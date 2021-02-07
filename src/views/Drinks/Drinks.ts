import { Vue, Component } from "vue-property-decorator";
import Drink from "@/models/Drink.ts";

import DrinkCard from "@/components/DrinkCard/DrinkCard.vue";

@Component({
  components: {
    DrinkCard,
  },
})
export default class Drinks extends Vue {
  protected drinksArray: Drink[] | null = null;

  mounted() {
    this.initialize();
  }

  protected initialize() {
    this.getDrinks();
  }

  protected async getDrinks() {
    const drinks = await new Drink().getAll();
    this.drinksArray = drinks;
  }
}
