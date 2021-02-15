import { Vue, Component } from "vue-property-decorator";
import Drink from "@/models/Drink.ts";

@Component({})
export default class DrinksAutocomplete extends Vue {
  protected drinks: Drink[] = [];

  protected search = "";

  mounted() {
    this.initialize();
  }

  protected initialize() {
    this.getDrinks();
  }

  protected async getDrinks() {
    const drinks = await new Drink().getAll();
    if (!drinks) {
      return;
    }
    this.drinks = drinks;
  }
}
