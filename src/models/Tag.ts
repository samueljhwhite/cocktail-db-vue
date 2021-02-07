import Model from "@/models/Model.ts";

export default class Tag extends Model {
  public name!: string;

  protected endpoint: string = "/tags";

  public getAll() {
    return this.getEndpoint(this.endpoint);
  }
}
