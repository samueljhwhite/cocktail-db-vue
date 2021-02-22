import Model from "@/models/Model.ts";
import Drink from "@/models/Drink.ts";

export default class Ingredient extends Model {
  public name!: string;

  public endpoint: string = "/ingredients";

  public drinks!: Drink[];

  public getAll() {
    return this.getEndpoint(this.endpoint);
  }

  public queryName(queryText: string) {
    return this.queryByName(this.endpoint, queryText);
  }
}
