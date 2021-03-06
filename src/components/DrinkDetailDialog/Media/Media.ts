import { Vue, Component, Prop } from "vue-property-decorator";
import Drink from "@/models/Drink.ts";

@Component({})
export default class Media extends Vue {
    @Prop({ required: true })
    protected drink!: Drink;
}
