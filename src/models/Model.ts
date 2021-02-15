import axios from "axios";

export default class Model {
  public id!: number;

  private host: string = "http://localhost:1337";

  public created_at!: string;

  public published_at!: string;

  public updated_at!: string;

  public async getEndpoint(endpoint: string) {
    const results = await axios.get(`${this.host}${endpoint}`);
    if (results) {
      return results.data;
    }
  }

  public async getByID(endpoint: string, id: number) {
    const result = await axios.get(`${this.host}${endpoint}/${id}`);
    if (!result) {
      return {
        error: "Cannot find by ID",
      };
    }
    return result.data;
  }
}
