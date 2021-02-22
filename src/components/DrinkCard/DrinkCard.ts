import { Vue, Component, Prop } from "vue-property-decorator";
import Drink from "@/models/Drink";

import AddToShoppingList from "@/components/AddToShoppingList/AddToShoppingList.vue";
import ViewRecipe from "@/components/ViewRecipe/ViewRecipe.vue";
import AddToFavourites from "@/components/AddToFavourites/AddToFavourites.vue";
import RoundedPill from "@/components/RoundedPill/RoundedPill.vue";

@Component({
  components: {
    AddToShoppingList,
    ViewRecipe,
    AddToFavourites,
    RoundedPill,
  },
})
export default class DrinkCard extends Vue {
  @Prop({ required: true })
  protected drink!: Drink;
}
