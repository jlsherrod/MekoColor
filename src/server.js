import { Model, belongsTo, createServer, hasMany } from "miragejs";

createServer({
  models: {
    client: Model.extend({
      formulas: hasMany(),
    }),
    formula: Model.extend({
      client: belongsTo(),
    }),
  },

  seeds(server) {
    let client1 = server.create("client", {
      first_name: "Jimmy",
      last_name: "Dallas",
      tel: "918-555-0987",
      email: "jimmy@dallas.com",
    });
    let client2 = server.create("client", {
      first_name: "Frank",
      last_name: "Austin",
      tel: "918-666-7777",
      email: "jimmy@dallas.com",
    });
    let client3 = server.create("client", {
      first_name: "Dunkirk",
      last_name: "Smith",
      tel: "918-555-8888",
      email: "jimmy@dallas.com",
    });
    server.create("formula", {
      name: "first formula",
      date: "01.01.2020",
      content: "20g 88,0 with 50g 10 vol for 30 mins",
      client: client1,
    });
    server.create("formula", {
      name: "second formula",
      date: "01.01.2020",
      content: "20g 88,0 with 50g 10 vol for 30 mins",
      client: client2,
    });
    server.create("formula", {
      name: "third formula",
      date: "01.01.2020",
      content: "20g 88,0 with 50g 10 vol for 30 mins",
      client: client3,
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

      return client;
    });
    this.get("/clients/:id/formulas", (schema, request) => {
      let id = request.params.id;

      return schema.clients.find(id).formulas;
    });
  },
});
