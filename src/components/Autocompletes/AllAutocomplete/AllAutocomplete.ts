import { Vue, Component } from "vue-property-decorator";
import Drink from "@/models/Drink.ts";
import Ingredient from "@/models/Ingredient.ts";
import Tag from "@/models/Tag.ts";

@Component({})
export default class AllAutocomplete extends Vue {
  // Class properties
  protected allItems: (Drink | Ingredient | Tag)[] = [];

  protected search = "";

  protected selected: Drink | Ingredient | Tag | null = null;

  // Lifecycle & Init
  mounted() {
    this.initialize();
  }

  protected async initialize() {
    const promises = [this.getDrinks(), this.getTags(), this.getIngredients()];
    const results = await Promise.all(promises);

    this.allItems = [...results[0], ...results[1], ...results[2]];
  }

  // GET calls
  protected async getDrinks() {
    const drinks = await new Drink().getAll();
    if (!drinks) {
      return;
    }
    return drinks;
  }

  protected async getIngredients() {
    const ingredients = await new Ingredient().getAll();
    if (!ingredients) {
      return;
    }
    return ingredients;
  }

  protected async getTags() {
    const tags = await new Tag().getAll();
    if (!tags) {
      return;
    }
    return tags;
  }
}
