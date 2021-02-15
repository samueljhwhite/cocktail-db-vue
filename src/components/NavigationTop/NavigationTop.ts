import { Vue, Component } from "vue-property-decorator";
// Components
import DrinksAutocomplete from "@/components/Autocompletes/DrinksAutocomplete/DrinksAutocomplete.vue";
import IngredientsAutocomplete from "@/components/Autocompletes/IngredientsAutocomplete/IngredientsAutocomplete.vue";
import TagsAutocomplete from "@/components/Autocompletes/TagsAutocomplete/TagsAutocomplete.vue";
import AllAutocomplete from "@/components/Autocompletes/AllAutocomplete/AllAutocomplete.vue";
// Models
import Drink from "@/models/Drink.ts";
import Tag from "@/models/Tag.ts";
import Ingredient from "@/models/Ingredient.ts";

@Component({
  components: {
    DrinksAutocomplete,
    IngredientsAutocomplete,
    TagsAutocomplete,
    AllAutocomplete,
  }
})
export default class NavigationTop extends Vue {
  protected cocktailSearch = "";

  protected tagsSearch = "";

  protected ingredientSearch = "";

  protected inputCocktails = "";

  protected inputIngredients = "";

  protected inputTags = "";

  protected drinks: Drink[] = [];

  protected tags: Tag[] = [];

  protected ingredients: Ingredient[] = [];

  protected tab = "drinks";

  mounted() {
    this.initialize();
  }

  protected initialize() {
    this.getTags();
    this.getIngredients();
    this.getDrinks();
    this.setActiveTab();
  }

  protected async getTags() {
    const tags = await new Tag().getAll();
    if (tags) {
      this.tags = tags;
    }
  }

  protected async getIngredients() {
    const ingredients = await new Ingredient().getAll();
    if (ingredients) {
      this.ingredients = ingredients;
    }
  }

  protected async getDrinks() {
    const drinks = await new Drink().getAll();
    if (drinks) {
      this.drinks = drinks;
    }
  }

  protected setActiveTab() {
    console.log(this.$route.name);
    this.tab = this.$route.name ? this.$route.name : "";
  }

  protected goToDrinks() {
    this.$router.push({ name: "drinks" });
  }

  protected goToStatistics() {
    this.$router.push({ name: "statistics" });
  }
}
