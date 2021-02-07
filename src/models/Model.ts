import axios from "axios";

export default class Model {
  public id!: number;

  public created_at!: string;

  public published_at!: string;

  public updated_at!: string;

  public async getEndpoint(endpoint: string) {
    const results = await axios.get(`http://localhost:1337${endpoint}`);
    if (results) {
      return results.data;
    }
  }
}
