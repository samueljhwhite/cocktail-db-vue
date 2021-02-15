import { Vue, Component } from "vue-property-decorator";
import Tag from "@/models/Tag.ts";

@Component({})
export default class TagsAutocomplete extends Vue {
  protected tags: Tag[] = [];

  protected search = "";

  mounted() {
    this.initialize();
  }

  protected initialize() {
    this.getTags();
  }

  protected async getTags() {
    const tags = await new Tag().getAll();
    if (!tags) {
      return;
    }
    this.tags = tags;
  }
}
