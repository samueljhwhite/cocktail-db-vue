import { Vue, Component } from "vue-property-decorator";
import DefaultSnackbar from '@/components/DefaultSnackbar/DefaultSnackbar.vue';
import NavigationTop from "@/components/NavigationTop/NavigationTop.vue";
import Drinks from "@/views/Drinks/Drinks.vue";

@Component({
  components: {
    DefaultSnackbar,
    NavigationTop,
    Drinks,
  },
})
export default class App extends Vue {
  protected snackbar = {
    display: true,
    displayText: '',
    timeout: 1700,
  }
}
