import { Vue, Component } from "vue-property-decorator";
import { drinks, DrinkData } from "@/support/drinks.ts";

@Component({})
export default class NavigationTop extends Vue {
  protected searchInput = '';
  protected drinks: DrinkData[] = drinks;
}
