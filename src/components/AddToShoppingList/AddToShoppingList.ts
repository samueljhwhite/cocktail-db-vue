import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class DrinkCard extends Vue {
  @Prop({ default: () => [] })
  protected ingredients!: string[];

  protected addToList() {
    console.log(this.ingredients);
  }
}
