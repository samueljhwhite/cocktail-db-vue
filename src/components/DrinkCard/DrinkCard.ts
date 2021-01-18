import { Vue, Component, Prop } from "vue-property-decorator";
import RoundedPill from "@/components/RoundedPill/RoundedPill.vue";
import AddToShoppingList from "@/components/AddToShoppingList/AddToShoppingList.vue";

@Component({
  components: {
    RoundedPill,
    AddToShoppingList,
  },
})
export default class DrinkCard extends Vue {
  @Prop({ required: true })
  protected drink!: DrinkData;
}

export interface DrinkData {
  name: string;
  tags: string[];
  primaryIngredients: string[];
  description: string;
  method: string[];
}
