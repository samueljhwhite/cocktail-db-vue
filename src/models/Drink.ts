import Model from "@/models/Model.ts";
import Tag from "@/models/Tag.ts";
import Ingredient from "@/models/Ingredient.ts";

export default class Drink extends Model {
  public name!: string;

  protected endpoint: string = "/drinks";

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
}
