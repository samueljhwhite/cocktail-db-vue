import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class DrinkCard extends Vue {
  @Prop({ default: () => [] })
  protected ingredients!: string[];

  protected addToList(): void {
    // if (!this.ingredients) {
    //   return;
    // }
    // this.ingredients.forEach((ingredient) => {
    //   this.$store.commit("addToList", ingredient);
    // });

    // console.log(this.$store.state.list);
    this.testSnackbar();
  }

  protected testSnackbar() {
    this.$store.dispatch('openSnackbar', `Ingredients added to shopping list.`);
  }
}
