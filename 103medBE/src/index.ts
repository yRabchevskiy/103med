// import schema from "./graphql/schema";
// import cors from 'cors';
// import express from "express";
// import { GraphQLSchema } from 'graphql';

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
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './graphql/schema';
import cors from 'cors';
// import { execute, subscribe } from 'graphql';
// import { createServer } from 'http';
// import { SubscriptionServer } from 'subscriptions-transport-ws';

const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors({
  origin: 'http://localhost:4200',
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  }),
);

app.listen(Number(PORT), 'localhost', () => {
  console.log('Server start on port 8080')
});
