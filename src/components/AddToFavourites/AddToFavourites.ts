import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class AddToFavourites extends Vue {
  @Prop({ required: true })
  protected id!: number;

  @Prop({ default: 'Drink' })
  protected name!: string;

  protected addToFavourites() {
    this.$store.dispatch('openSnackbar', `${this.name} added to favourites`)
  }
}
