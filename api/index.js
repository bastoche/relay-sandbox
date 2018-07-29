// @flow

import cors from "cors";
import express from "express";
import graphqlHTTP from "express-graphql";

import { schema } from "./schema";
import { API_PORT } from "../config";

const app = express();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(API_PORT);
