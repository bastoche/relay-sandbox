// @flow

import cors from "cors";
import express from "express";
import graphqlHTTP from "express-graphql";

import { API_PORT } from "../config";

import { schema } from "./schema";

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
