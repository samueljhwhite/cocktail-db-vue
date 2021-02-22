import { Vue, Component, Prop } from "vue-property-decorator";
import Drink from "@/models/Drink.ts";

import RoundedPill from "@/components/RoundedPill/RoundedPill.vue";

@Component({
  components: {
    RoundedPill,
  },
})
export default class Method extends Vue {
  @Prop({ required: true })
  protected drink!: Drink;
}
