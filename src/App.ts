import { Vue, Component } from "vue-property-decorator";
import NavigationTop from "@/components/NavigationTop/NavigationTop.vue";
import Drinks from "@/views/Drinks/Drinks.vue";

@Component({
  components: {
    NavigationTop,
    Drinks,
  },
})
export default class App extends Vue {}
