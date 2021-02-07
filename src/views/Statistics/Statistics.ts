import { Vue, Component } from "vue-property-decorator";
import axios, { AxiosResponse } from 'axios';
// import DrinkCard from "@/components/DrinkCard/DrinkCard.vue";
// import { drinks, DrinkData } from "@/support/drinks.ts";

@Component({})
export default class Statistics extends Vue {
  protected drinks: AxiosResponse | null = null;

  protected tags: AxiosResponse | null = null;

  protected ingredients: AxiosResponse | null = null;

  mounted() {
    this.initialize();
  }

  protected initialize() {
    this.getIngredients();
    this.getDrinks();
    this.getTags();
    this.testDrinks();
  }

  protected async getDrinks() {
    const drinks = await axios.get('http://localhost:1337/drinks');
    if (!drinks) {
      return;
    }
    console.log(drinks);
    this.drinks = drinks.data;
  }

  protected async testDrinks() {
    const drinks = await axios.get('http://localhost:1337/drinks?ingredients.name=Rum');
    if (!drinks) {
      return;
    }
    console.log('testDrinks ', drinks);
  }

  protected async getTags() {
    const tags = await axios.get('http://localhost:1337/tags');
    if (!tags) {
      return;
    }
    this.tags = tags.data;
  }

  protected async getIngredients() {
    const ingredients = await axios.get('http://localhost:1337/ingredients');
    if (!ingredients) {
      return;
    }
    this.ingredients = ingredients.data;
  }
}

