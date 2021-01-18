import { Vue, Component, Prop } from "vue-property-decorator";
import { DrinkData } from "@/support/drinks.ts";
import RoundedPill from "@/components/RoundedPill/RoundedPill.vue";
import AddToShoppingList from "@/components/AddToShoppingList/AddToShoppingList.vue";
import ViewRecipe from "@/components/ViewRecipe/ViewRecipe.vue";
import AddToFavourites from "@/components/AddToFavourites/AddToFavourites.vue";

@Component({
  components: {
    RoundedPill,
    AddToShoppingList,
    ViewRecipe,
    AddToFavourites,
  },
})
export default class DrinkCard extends Vue {
  @Prop({ required: true })
  protected drink!: DrinkData;
}
