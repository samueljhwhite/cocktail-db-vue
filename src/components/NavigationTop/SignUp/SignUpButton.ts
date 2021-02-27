import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class SignUpButton extends Vue {
    protected dispatchSignUpDialog() {
        this.$store.dispatch("openSignUpDialog");
    }
}
