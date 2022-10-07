"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    id: ID
    first_name: String
    last_name: String
    phone: String
    rang: String
    birstday: String
    email: String
    description: String
  }

  # This "Branch" type defines the queryable fields for every branch in our data source.
  type Drug {
    id: Int
    name: String
    description: String
    doses: String
    state: DrugStateType
    count: String
    werehouse: WerehouseType
    category: CategoryType
  }

  input UserInput {
    first_name: String
    last_name: String
    phone: String
    rang: String
    birstday: String
    email: String
    description: String
  }

  # This "Branch" type defines the queryable fields for every branch in our data source.
  input DrugInput {
    name: String
    description: String
    doses: String
    state: DrugStateType
    count: String
    werehouse: WerehouseType
    category: CategoryType
  }

  type Query {
    drugs: [Drug]
    users: [User]
  }

  type DeleteItem {
    id: Int!
  }

  type Mutation {
    addUser(user: UserInput): User
    updateUser(id: Int!, user: UserInput): User
    deleteUser(id: Int!): DeleteItem

    addDrug(drug: DrugInput): Drug
    updateDrug(id: Int!, drug: DrugInput): Drug
    deleteDrug(id: Int!): DeleteItem
  }
`;
const resolvers = {
    Query: {
        drugs: () => __awaiter(void 0, void 0, void 0, function* () {
            const _arr = yield prisma.drug.findMany();
            return _arr;
        }),
        users: () => prisma.user.findMany(),
    },
    Mutation: {
        deleteDrug: (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
            const _id = yield prisma.drug.delete({ where: { id: args.id } });
            return _id;
        }),
        updateDrug: (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
            const updateUser = yield prisma.drug.update({
                where: {
                    id: args.id
                },
                data: Object.assign({}, args.drug)
            });
            return updateUser;
        }),
        addDrug: (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
            console.log(parent);
            console.log(args);
            const _new = yield prisma.drug.create({ data: Object.assign({}, args.drug) });
            return _new;
        }),
        addUser: (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
            const _new = yield prisma.user.create({ data: Object.assign({}, args.user) });
            return _new;
        }),
        deleteUser: (parent, args) => {
            prisma.user.delete({ where: { id: args.id } });
            return args.id;
        },
        updateUser: (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
            const updateUser = yield prisma.user.update({
                where: {
                    id: args.id
                },
                data: Object.assign({}, args.user)
            });
            return updateUser;
        })
    }
};
const schemaDef = (0, schema_1.makeExecutableSchema)({
    typeDefs,
    resolvers,
});
exports.default = schemaDef;
//# sourceMappingURL=schema.js.map