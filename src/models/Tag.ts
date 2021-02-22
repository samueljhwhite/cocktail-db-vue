import Model from "@/models/Model.ts";
import Drink from "@/models/Drink.ts";

export default class Tag extends Model {
  public name!: string;

  // TODO: CHANGE BK TO PROTECTED
  public endpoint: string = "/tags";

  public drinks!: Drink[];

  public getAll() {
    return this.getEndpoint(this.endpoint);
  }

  public queryName(queryText: string) {
    return this.queryByName(this.endpoint, queryText);
  }
}
