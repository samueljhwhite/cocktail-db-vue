import { Vue, Component } from "vue-property-decorator";
import Ingredient from "@/models/Ingredient.ts";

@Component({})
export default class IngredientsAutocomplete extends Vue {
  protected ingredients: Ingredient[] = [];

  protected search = "";

  mounted() {
    this.initialize();
  }

  protected initialize() {
    this.getIngredients();
  }

  protected async getIngredients() {
    const ingredients = await new Ingredient().getAll();
    if (!ingredients) {
      return;
    }
    this.ingredients = ingredients;
  }
}
