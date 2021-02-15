import { Vue, Component, Watch } from "vue-property-decorator";
// Models
import Drink from "@/models/Drink.ts";
import { Route } from "vue-router";
// Components
import DrinkCard from "@/components/DrinkCard/DrinkCard.vue";
import DrinksAutocomplete from "@/components/Autocompletes/DrinksAutocomplete/DrinksAutocomplete.vue";
import IngredientsAutocomplete from "@/components/Autocompletes/IngredientsAutocomplete/IngredientsAutocomplete.vue";
import TagsAutocomplete from "@/components/Autocompletes/TagsAutocomplete/TagsAutocomplete.vue";

@Component({
  components: {
    DrinkCard,
    DrinksAutocomplete,
    IngredientsAutocomplete,
    TagsAutocomplete,
  },
})
export default class Drinks extends Vue {
  protected drinksArray: Drink[] = [];

  protected isDetailsView = false;

  protected drinkDetailID: number | null = null;

  mounted() {
    this.initialize();
  }

  protected initialize() {
    this.getDrinks();
    this.resolveViewType();
    if (this.isDetailsView === false) {
      return;
    }
    this.dispatchDetailsDialog();
  }

  protected async getDrinks() {
    const drinks = await new Drink().getAll();
    if (!drinks) {
      return;
    }
    this.drinksArray = drinks;
  }

  protected resolveViewType() {
    this.$route.params.id
      ? (this.isDetailsView = true)
      : (this.isDetailsView = false);
  }

  protected dispatchDetailsDialog(id = this.$route.params.id) {
    this.$store.dispatch("openDrinkDialog", id);
  }

  @Watch("$route", { immediate: true, deep: true })
  onUrlChange(newVal: Route) {
    if (newVal.name === "drinks") {
      this.isDetailsView = false;
    }
    if (newVal.name === "drinks.details") {
      this.isDetailsView = true;
      this.dispatchDetailsDialog();
    }
  }
}
