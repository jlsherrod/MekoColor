import { createServer, Model } from "miragejs";

createServer({
  models: {
    client: Model,
  },
  seeds(server) {
    server.create("client", {
      first_name: "Jimmy",
      last_name: "Dallas",
      tel: "918-555-0987",
      email: "jimmy@dallas.com",
    });
    server.create("client", {
      first_name: "Frank",
      last_name: "Austin",
      tel: "918-666-7777",
      email: "jimmy@dallas.com",
    });
    server.create("client", {
      first_name: "Dunkirk",
      last_name: "Smith",
      tel: "918-555-8888",
      email: "jimmy@dallas.com",
    });
  },
  routes() {
    this.namespace = "api";
    this.get("/clients", (schema) => {
      return schema.clients.all();
    });
    this.get("/clients/:id", (schema, request) => {
      let id = request.params.id;

      return schema.clients.find(id);
    });
    this.post("/clients", (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      return schema.clients.create(attrs);
    });
    this.patch("/clients/:id", (schema, request) => {
      let id = request.params.id;

      let attrs = JSON.parse(request.requestBody);
      let client = schema.clients.find(id);
      client.update(attrs);

      return client.update(attrs);
    });
  },
});
