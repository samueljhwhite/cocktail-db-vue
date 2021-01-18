import { Vue, Component } from "vue-property-decorator";
// import DrinkCard from "@/components/DrinkCard/DrinkCard.vue";
// import { drinks, DrinkData } from "@/support/drinks.ts";

@Component({})
export default class Statistics extends Vue {
  protected someProperty = '';

  protected someFunction() {
    console.log("someFunction!");
  }
}
