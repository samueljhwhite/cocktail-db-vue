import { Vue, Component } from "vue-property-decorator";
import { drinks, DrinkData } from "@/support/drinks.ts";

@Component({})
export default class NavigationTop extends Vue {
  protected cocktailSearch = "";

  protected tagsSearch = "";

  protected inputCocktails = '';

  protected inputTags = "";

  protected drinks: DrinkData[] = drinks;

  protected uniqueTags: string[] = [];

  protected tab = 'drinks';

  mounted() {
    this.initialize();
  }

  protected initialize() {
    this.listUniqueTags();
    this.setActiveTab();
  }

  protected listUniqueTags() {
    const allTags = this.drinks.map((drink: DrinkData) => {
      return drink.tags.map((tag: string) => tag);
    });

    this.uniqueTags = Array.from(new Set(allTags.flat()));
  }

  protected setActiveTab() {
    console.log(this.$route.name);
    this.tab = this.$route.name ? this.$route.name : '';
  }

  protected goToDrinks() {
    this.$router.push({ name: 'drinks' });
  }

  protected goToStatistics() {
    this.$router.push({ name: 'statistics' });
  }
}
