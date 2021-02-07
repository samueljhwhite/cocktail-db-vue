import { Vue, Component, Prop, Watch } from "vue-property-decorator";

@Component<DefaultSnackbar>({})
export default class DefaultSnackbar extends Vue {
  @Prop({ default: false })
  protected display!: boolean;

  @Prop({ default: "Confirmed" })
  protected displayText!: string;

  @Prop({ default: 1700 })
  protected timeout!: number;

  protected internalValue = this.display;

  mounted() {
    this.timeoutSnackbar();
  }

  protected timeoutSnackbar() {
    setTimeout(() => {
      this.$store.dispatch("closeSnackbar");
    }, this.timeout);
  }

  @Watch("display")
  protected onDisplayChange(value: boolean, newValue: boolean) {
    if (this.internalValue === newValue) {
      return;
    }
    this.internalValue = newValue;
  }
}
