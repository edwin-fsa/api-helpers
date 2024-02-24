export class Api {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

  async getResource(resource) {
    const response = await fetch(`${this.apiUrl}/${resource}`);
    const result = await response.json();
    return result;
  }

  async createResource(resource, body) {
    const response = await fetch(`${this.apiUrl}/${resource}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ body }),
    });

    await response.json();
  }

}
