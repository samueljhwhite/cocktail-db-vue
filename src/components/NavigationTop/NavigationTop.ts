import { Vue, Component } from "vue-property-decorator";
// Components
import SignUpButton from "@/components/NavigationTop/SignUp/SignUpButton.vue";

@Component({
  components: {
    SignUpButton,
  }
})
export default class NavigationTop extends Vue {
  // #region Class Properties 
  protected tab = "drinks";
  // #endregion
}
