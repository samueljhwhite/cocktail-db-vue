import { Vue, Component } from "vue-property-decorator";
import axios from "axios";
import Drink from "@/models/Drink.ts";
import Tag from "@/models/Tag.ts";
import Ingredient from "@/models/Ingredient.ts";

@Component({})
export default class Statistics extends Vue {
  protected isLoading = true;

  protected drinks: Drink[] | null = null;

  protected tags: Tag[] | null = null;

  protected ingredients: Ingredient[] | null = null;

  protected testQuery: Drink[] | null = null;

  mounted() {
    this.initialize();
  }

  protected async initialize() {
    const promises = [
      this.getDrinks(),
      this.getTags(),
      this.getIngredients(),
      this.testDrinks(),
    ];

    const results = await Promise.all(promises);

    this.drinks = results[0];
    this.tags = results[1];
    this.ingredients = results[2];
    this.testQuery = results[3];

    this.isLoading = false;
  }

  protected async getDrinks() {
    const drinks = await new Drink().getAll();
    if (drinks) {
      return drinks;
    }
  }

  protected async getTags() {
    const tags = await new Tag().getAll();
    if (tags) {
      return tags;
    }
  }

  protected async getIngredients() {
    const ingredients = await new Ingredient().getAll();
    if (ingredients) {
      return ingredients;
    }
  }

  protected async testDrinks() {
    const drinks = await axios.get(
      "http://localhost:1337/drinks?ingredients.name=Rum"
    );
    if (drinks) {
      return drinks;
    }
  }
}
