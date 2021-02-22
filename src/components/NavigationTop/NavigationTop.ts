import { Vue, Component } from "vue-property-decorator";
// Components
import SearchBar from "@/components/SearchBar/SearchBar.vue";

@Component({
  components: {
    SearchBar,
  },
})
export default class NavigationTop extends Vue {
  // #region Class Properties 
  protected tab = "drinks";
  // #endregion
}
