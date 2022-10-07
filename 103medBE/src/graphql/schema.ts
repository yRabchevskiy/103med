import { makeExecutableSchema } from '@graphql-tools/schema';
import { Prisma, PrismaClient } from '@prisma/client';
import { gql } from 'apollo-server-express';
const prisma = new PrismaClient();

const typeDefs = gql`
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
    drugs: async () => {
      const _arr = await prisma.drug.findMany();
      return _arr;
    },
    users: () => prisma.user.findMany(),
  },
  Mutation: {
    deleteDrug: async (parent: any, args: { id: number }) => {
      const _id = await prisma.drug.delete({ where: { id: args.id } });
      return _id;
    },
    updateDrug: async (parent: any, args: { id: number, drug: Prisma.DrugUpdateInput }) => {
      const updateUser = await prisma.drug.update({
        where: {
          id: args.id
        },
        data: {
          ...args.drug
        }
      });
      return updateUser;
    },
    addDrug: async (parent: any, args: { drug: Prisma.DrugCreateInput; }) => {
      console.log(parent);
      console.log(args);
      const _new = await prisma.drug.create({ data: { ...args.drug } });
      return _new;
    },
    addUser: async (parent: any, args: { user: Prisma.UserCreateInput }) => {
      const _new = await prisma.user.create({ data: { ...args.user } });
      return _new;
    },
    deleteUser: (parent: any, args: { id: number }) => {
      prisma.user.delete({ where: { id: args.id } });
      return args.id;
    },
    updateUser: async (parent: any, args: { id: number, user: Prisma.UserUpdateInput }) => {
      const updateUser = await prisma.user.update({
        where: {
          id: args.id
        },
        data: {
          ...args.user
        }
      });
      return updateUser;
    }
  }
};

const schemaDef = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schemaDef;