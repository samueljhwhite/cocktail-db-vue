import { Vue, Component } from "vue-property-decorator";
import { drinks, DrinkData } from "@/support/drinks.ts";

@Component({})
export default class NavigationTop extends Vue {
  protected cocktailSearch = "";

  protected tagsSearch = "";

  protected drinks: DrinkData[] = drinks;

  protected uniqueTags: string[] = [];

  mounted() {
    this.initialize();
  }

  protected initialize() {
    this.listUniqueTags();
  }

  protected listUniqueTags() {
    const allTags = this.drinks.map((drink: DrinkData) => {
      return drink.tags.map((tag: string) => tag);
    });

    this.uniqueTags = Array.from(new Set(allTags.flat()));
  }
}
