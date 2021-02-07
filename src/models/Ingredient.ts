import Model from "@/models/Model.ts";

export default class Ingredient extends Model {
  public name!: string;

  protected endpoint: string = "/ingredients";

  public getAll() {
    return this.getEndpoint(this.endpoint);
  }
}
