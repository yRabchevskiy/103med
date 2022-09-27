"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("@graphql-tools/schema");
const client_1 = require("@prisma/client");
const apollo_server_express_1 = require("apollo-server-express");
const prisma = new client_1.PrismaClient();
const typeDefs = (0, apollo_server_express_1.gql) `
  enum DrugStateType {
    Unknown
    Tablet
    Injection
  }
  enum WerehouseType {
    Unknown
    Rai
    Yurkivka
    Dimitrovka
  }
  enum CategoryType {
    Unknown
    Cardio
    Shkt
    Phyho
  }
  # This "Company" type defines the queryable fields for every company in our data source.
  type User {
    id: ID!
    first_name: String!
    last_name: String!
    phone: String!
    rang: String!
    birstday: String!
    email: String!
    description: String
  }

  # This "Branch" type defines the queryable fields for every branch in our data source.
  type Drug {
    id: Int!
    name: String!
    description: String
    doses: String
    state: DrugStateType!
    count: String
    werehouse: WerehouseType
    category: CategoryType!
  }

  type Query {
    drugs: [Drug]
    users: [User]
  }
`;
const resolvers = {
    Query: {
        drugs: () => prisma.drug.findMany(),
        users: () => prisma.user.findMany(),
    },
};
const schemaDef = (0, schema_1.makeExecutableSchema)({
    typeDefs,
    resolvers,
});
exports.default = schemaDef;
//# sourceMappingURL=schema.js.map