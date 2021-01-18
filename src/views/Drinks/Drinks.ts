import { Vue, Component } from "vue-property-decorator";
import DrinkCard from "@/components/DrinkCard/DrinkCard.vue";
import { drinks, DrinkData } from "@/support/drinks.ts";

@Component({
  components: {
    DrinkCard,
  },
})
export default class Drinks extends Vue {
  protected drinksArray: DrinkData[] = drinks;

  protected addToList() {
    console.log("Function!");
  }
}
