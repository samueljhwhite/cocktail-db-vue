import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class RoundedPill extends Vue {
  @Prop({ required: true })
  protected pillText!: string;
}
