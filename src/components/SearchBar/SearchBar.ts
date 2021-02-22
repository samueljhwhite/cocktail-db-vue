import { Vue, Component, Watch } from "vue-property-decorator";
// Models
import Drink from "@/models/Drink.ts";
import Ingredient from "@/models/Ingredient.ts";
import Tag from "@/models/Tag.ts";

@Component({})
export default class SearchBar extends Vue {
  // #region Class Properties
  protected selected: Drink | Tag | Ingredient | null = null;

  protected search = "";

  protected allItems: (Drink | Tag | Ingredient)[] = [];
  // #endregion

  // #region Async Methods
  protected async querySearch() {
    const promises = [
      new Ingredient().queryName(this.search),
      new Drink().queryName(this.search),
      new Tag().queryName(this.search),
    ];

    const results = await Promise.all(promises);
    this.allItems = results.flat();
  }

  protected async handleSelected(selection: Drink | Ingredient | Tag | null) {
    if (selection === null) {
      // TODO: Need default response endpoint.
      const resetResults = await new Drink().getAll();
      this.$store.dispatch("commitQueryResults", resetResults);
    }

    else if (selection.type === 'ingredient') {
      const drinkResults = await new Drink().queryIngredients(selection.name);
      this.$store.dispatch("commitQueryResults", drinkResults);
    } 
    
     else if (selection.type === 'tag') {
      const drinkResults = await new Drink().queryTags(selection.name);
      this.$store.dispatch("commitQueryResults", drinkResults);
    }
    
    else if (selection.type === 'drink') {
      this.$router.push({
        name: "drinks.details",
        params: { id: selection.id.toString() },
      });
    }
  }
  // #endregion

  // #region Watchers
  @Watch("selected")
  protected onSelectedChange(value: string | null, newValue: string | null) {
    if (this.selected === newValue) {
      return;
    }
    this.handleSelected(this.selected);
  }

  @Watch("search")
  protected searchChange(value: string, newValue: string) {
    if (
      this.search === newValue ||
      value === newValue ||
      this.search === "" ||
      this.search === null
    ) {
      return;
    }

    setTimeout(() => this.querySearch(), 500);
  }
  // #endregion
}
