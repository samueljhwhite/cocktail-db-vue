import Model from "@/models/Model.ts";

export default class Drink extends Model {
  public name!: string;

  protected endpoint: string = "/drinks";

  public description!: string;

  public method!: string;

  public tags!: string[];

  public ingredients!: string[];

  public created_at!: string;

  public published_at!: string;

  public updated_at!: string;

  public getAll() {
    return this.getEndpoint(this.endpoint);
  }
}
