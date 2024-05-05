import { createServer, Model } from "miragejs";

createServer({
  models: {
    client: Model,
  },
  seeds(server) {
    server.create("client", { first_name: "Jimmy", last_name: "Dallas" });
    server.create("client", { first_name: "Frank", last_name: "Austin" });
    server.create("client", { first_name: "Dunkirk", last_name: "Smith" });
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
  },
});
