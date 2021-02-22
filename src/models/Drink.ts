import Model from "@/models/Model.ts";
import Tag from "@/models/Tag.ts";
import Ingredient from "@/models/Ingredient.ts";
import axios from "axios";

export default class Drink extends Model {
  public name!: string;

  public endpoint: string = "/drinks";

  public description!: string;

  public method!: string;

  public tags!: Tag[];

  public ingredients!: Ingredient[];

  public created_at!: string;

  public published_at!: string;

  public updated_at!: string;

  public getAll() {
    return this.getEndpoint(this.endpoint);
  }

  public get(id: number) {
    return this.getByID(this.endpoint, id);
  }

  public queryName(queryText: string) {
    return this.queryByName(this.endpoint, queryText);
  }

  public async queryIngredients(queryText: string) {
    const results = await axios.get(
      `${this.host}${this.endpoint}?ingredients.name_contains=${queryText}`
    );
    if (!results) {
      return;
    }
    return results.data;
  }

  public async queryTags(queryText: string) {
    const results = await axios.get(
      `${this.host}${this.endpoint}?tags.name_contains=${queryText}`
    );
    if (!results) {
      return;
    }
    return results.data;
  }
}
