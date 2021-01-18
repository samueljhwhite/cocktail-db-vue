import { Vue, Component, Prop } from "vue-property-decorator";
import RoundedPill from "@/components/RoundedPill/RoundedPill.vue";

@Component({
  components: {
    RoundedPill,
  },
})
export default class DrinkCard extends Vue {
  @Prop({ required: true })
  protected drink!: DrinkData;

  protected addToList() {
    console.log("Function!");
  }
}

export interface DrinkData {
  name: string;
  tags: string[];
  primaryIngredients: string[];
  description: string;
  method: string[];
}
