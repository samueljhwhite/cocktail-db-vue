import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class AddToFavourites extends Vue {
  @Prop({ required: true })
  protected id!: string[];

  protected addToFavourites() {
    console.log(this.id);
  }
}
