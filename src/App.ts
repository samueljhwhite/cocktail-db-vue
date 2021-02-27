import { Vue, Component } from "vue-property-decorator";
// Components
import NavigationTop from "@/components/NavigationTop/NavigationTop.vue";
import Footer from "@/components/Footer/Footer.vue";
import DefaultSnackbar from "@/components/DefaultSnackbar/DefaultSnackbar.vue";
import DrinkDetailDialog from "@/components/DrinkDetailDialog/DrinkDetailDialog.vue";
import SignUpDialog from "@/components/SignUpDialog/SignUpDialog.vue";
// Views
import Drinks from "@/views/Drinks/Drinks.vue";

@Component({
  components: {
    DefaultSnackbar,
    DrinkDetailDialog,
    SignUpDialog,
    NavigationTop,
    Drinks,
    Footer,
  },
})
export default class App extends Vue {
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

  protected get isDisplayingSignUpDialog(): boolean {
    return !!this.$store.state.signUpDialog;
  }
  // #endregion
}
