import { Vue, Component, Prop, Watch } from "vue-property-decorator";

@Component<DefaultSnackbar>({})
export default class DefaultSnackbar extends Vue {
  @Prop({ default: false })
  protected display!: boolean;

  @Prop({ default: "Confirmed" })
  protected displayText: string = 'Confirmed';

  @Prop({ default: 1700 })
  protected timeout!: number;

  protected internalValue = this.display;

  @Watch('display')
  protected onDisplayChange(value: boolean, newValue: boolean) {
    if (this.internalValue === newValue) {
      return;
    }
    this.internalValue = newValue;
  }
}
