import { Vue, Component } from "vue-property-decorator";

Component({});
export default class Home extends Vue {
  protected someProperty = {
    key1: "Lalala",
    key2: 23,
  };

  protected someFunction() {
    alert(this.someProperty.key1);
  }
}