import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class AllRecipies extends Vue {
  @Prop({ required: true })
  protected pillText!: string;
}
