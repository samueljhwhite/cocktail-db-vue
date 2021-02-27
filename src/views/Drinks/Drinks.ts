import { Vue, Component, Watch } from "vue-property-decorator";
import { Route } from "vue-router";
// Models
import Drink from "@/models/Drink.ts";
// Components
import DrinkCard from "@/components/DrinkCard/DrinkCard.vue";
import SearchBar from "@/components/SearchBar/SearchBar.vue";

@Component({
  components: {
    DrinkCard,
    SearchBar,
  },
})
export default class Drinks extends Vue {
  // #region Class Properties
  protected isLoading = true;

  protected isDetailsView = false;

  protected drinkDetailID: number | null = null;
  // #endregion

  // #region Lifecycle & Init
  mounted() {
    this.initialize();
  }

  protected initialize() {
    this.getDefaultDrinks();
    this.resolveViewType();
    if (this.isDetailsView === false) {
      return;
    }
    this.dispatchDetailsDialog();
  }
  // #endregion

  // #region Class Methods
  protected resolveViewType() {
    this.$route.params.id
      ? (this.isDetailsView = true)
      : (this.isDetailsView = false);
  }

  protected dispatchDetailsDialog(id = this.$route.params.id) {
    this.$store.dispatch("openDrinkDialog", id);
    this.isLoading = false;
  }

  protected fetchingDrinks() {
    this.isLoading = true;
  }
  // #endregion

  // #region Async Functions
  protected async getDefaultDrinks() {
    // TODO: Need default response endpoint.
    console.log('Need default response endpoint. drinks.ts')
    this.isLoading = true;
    const drinks = await new Drink().getAll();
    if (!drinks) {
      return;
    }
    this.$store.dispatch("commitQueryResults", drinks);
    // this.isLoading = false;
  }
  // #endregion

  // #region Getters
  protected get drinksList(): Drink[] {
    return this.$store.state.queryResults;
  }
  // #endregion

  // #region Watchers
  @Watch("$route", { immediate: true, deep: true })
  protected onUrlChange(newVal: Route) {
    if (newVal.name === "drinks") {
      this.isDetailsView = false;
    }
    if (newVal.name === "drinks.details") {
      this.isDetailsView = true;
      this.dispatchDetailsDialog();
    }
  }

  @Watch("drinksList")
  protected onQueryLoad(value: Drinks[] | null, newValue: Drinks[] | null) {
    if (value === newValue) {
      return;
    }
    this.isLoading = false;
  }
  // #endregion
}
