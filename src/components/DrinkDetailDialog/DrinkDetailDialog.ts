import { Vue, Component, Prop } from "vue-property-decorator";
import Drink from "@/models/Drink.ts";

import RoundedPill from "@/components/RoundedPill/RoundedPill.vue";
import AddToShoppingList from "@/components/AddToShoppingList/AddToShoppingList.vue";
import AddToFavourites from "@/components/AddToFavourites/AddToFavourites.vue";
import Method from "@/components/DrinkDetailDialog/Method/Method.vue";
import Variations from "@/components/DrinkDetailDialog/Variations/Variations.vue";
import Media from "@/components/DrinkDetailDialog/Media/Media.vue";

@Component({
  components: {
    RoundedPill,
    AddToShoppingList,
    AddToFavourites,
    Method,
    Variations,
    Media,
  },
})
export default class DrinkDetailDialog extends Vue {
  @Prop({ default: false })
  protected display!: boolean;

  @Prop({ required: true })
  protected drinkID!: number;

  protected isLoading = true;

  protected drink: Drink | null = null;

  protected tabItems = ['method', 'variations', 'media'];
  
  protected tab = 0;

  mounted() {
    this.initialize();
  }

  protected async initialize() {
    this.drink = await this.getDrinkData();
    this.isLoading = false;
  }

  protected async getDrinkData() {
    const drink = await new Drink().get(this.drinkID);
    if (drink) {
      return drink;
    }
  }

  protected closeDialog() {
    this.$store.dispatch("closeDrinkDialog");
    this.$router.push({ name: "drinks" });
  }

  protected get activeTab() {
    return this.tab;
  }
}
