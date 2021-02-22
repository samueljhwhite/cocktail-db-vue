import { Vue, Component } from "vue-property-decorator";
// Models
import Drink from "@/models/Drink.ts";
// Components
import NavigationTop from "@/components/NavigationTop/NavigationTop.vue";
import Footer from "@/components/Footer/Footer.vue";
import DefaultSnackbar from "@/components/DefaultSnackbar/DefaultSnackbar.vue";
import DrinkDetailDialog from "@/components/DrinkDetailDialog/DrinkDetailDialog.vue";
// Views
import Drinks from "@/views/Drinks/Drinks.vue";

@Component({
  components: {
    DefaultSnackbar,
    DrinkDetailDialog,
    NavigationTop,
    Drinks,
    Footer,
  },
})
export default class App extends Vue {
  // #region Lifecycle & Init
  mounted() {
    this.initialize();
  }

  protected initialize() {
    this.getDrinks();
  }
  // #endregion

  // #region Async Functions
  protected async getDrinks() {
    const drinks = await new Drink().getAll();
    if (drinks) {
      this.$store.dispatch("commitQueryResults", drinks);
    }
  }
  // #endregion

  // #region Getters
  protected get isDisplayingSnackbar(): boolean {
    return !!this.$store.state.snackbar;
  }

  protected get snackbarDisplayText(): string {
    return this.$store.state.snackbar;
  }

  protected get isDisplayingDetailsDialog(): boolean {
    return !!this.$store.state.drinkDetailDialog;
  }

  protected get detailsDialogID(): string {
    return this.$store.state.drinkDetailDialog;
  }
  // #endregion
}
