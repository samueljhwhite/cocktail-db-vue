import { Vue, Component } from "vue-property-decorator";
import Drinks from "@/views/Drinks/Drinks.vue";

@Component({
  components: {
    Drinks,
  },
})
export default class App extends Vue {}
