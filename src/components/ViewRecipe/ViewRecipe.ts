import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class ViewRecipe extends Vue {
  @Prop({ required: true })
  protected id!: string;

  protected viewDrinkDetails() {
    this.$router.push({
      name: "drinks.details",
      params: {
        id: this.id,
      },
    });
  }
}
