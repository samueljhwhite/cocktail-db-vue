import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class DrinkCard extends Vue {
  @Prop({ default: () => [] })
  protected ingredients!: string[];

  protected addToList() {
    this.ingredients.forEach((ingredient) => {
      this.$store.commit("addToList", ingredient);
    });

    console.log(this.$store.state.list);
  }
}
