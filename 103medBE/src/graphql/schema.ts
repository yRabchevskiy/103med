import { makeExecutableSchema } from '@graphql-tools/schema';
import { PrismaClient } from '@prisma/client';
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

const schemaDef = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schemaDef;