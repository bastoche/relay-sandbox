// @flow

import { graphql } from "graphql";

import { schema } from "./schema";

const query = "{ hello }";

graphql(schema, query).then(result => {
  // Prints
  // {
  //   data: { hello: "world" }
  // }
  console.log(result); // eslint-disable-line no-console
});
