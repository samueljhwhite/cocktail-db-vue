import { Vue, Component, Prop } from "vue-property-decorator";
import { DrinkData } from "@/support/drinks.ts";
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
