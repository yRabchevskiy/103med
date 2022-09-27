"use strict";
// import schema from "./graphql/schema";
// import cors from 'cors';
// import express from "express";
// import { GraphQLSchema } from 'graphql';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const app = express();
// app.use(cors());
// app.use(
//   "/graphql",
//   graphqlHTTP({
//     schema: schema,
//     graphiql: true
//   })
// );
// app.listen(8080, 'localhost', () => {
//   console.log('Server start on port 8080');
// });
const express_1 = __importDefault(require("express"));
const express_graphql_1 = require("express-graphql");
const schema_1 = __importDefault(require("./graphql/schema"));
const cors_1 = __importDefault(require("cors"));
// import { execute, subscribe } from 'graphql';
// import { createServer } from 'http';
// import { SubscriptionServer } from 'subscriptions-transport-ws';
const PORT = process.env.PORT || 8080;
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: 'http://localhost:4200',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));
app.use('/graphql', (0, express_graphql_1.graphqlHTTP)({
    schema: schema_1.default,
    graphiql: true,
}));
app.listen(Number(PORT), 'localhost', () => {
    console.log('Server start on port 8080');
});
//# sourceMappingURL=index.js.map