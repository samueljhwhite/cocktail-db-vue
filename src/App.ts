import { Vue, Component } from "vue-property-decorator";
import DefaultSnackbar from "@/components/DefaultSnackbar/DefaultSnackbar.vue";
import NavigationTop from "@/components/NavigationTop/NavigationTop.vue";
import Footer from "@/components/Footer/Footer.vue";
import Drinks from "@/views/Drinks/Drinks.vue";
import DrinkDetailDialog from "@/components/DrinkDetailDialog/DrinkDetailDialog.vue";

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
  // Dispatch component Getters
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
}
