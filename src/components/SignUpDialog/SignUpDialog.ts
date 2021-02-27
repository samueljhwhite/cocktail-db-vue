import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class SignUpDialog extends Vue {
  @Prop({ default: false })
  protected display!: boolean;

  protected closeDialog() {
    this.$store.dispatch("closeSignUpDialog");
  }
}
