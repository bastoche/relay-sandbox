// @flow

import { GraphQLSchema, GraphQLObjectType, GraphQLString } from "graphql";
import { fromGlobalId, globalIdField, nodeDefinitions } from "graphql-relay";

import { User } from "./user";
import { getUser, getViewer } from "./database";

const { nodeInterface, nodeField } = nodeDefinitions(
  globalId => {
    const { type, id } = fromGlobalId(globalId);
    if (type === "User") {
      return getUser(id);
    }
    return null;
  },
  obj => {
    if (obj instanceof User) {
      return GraphQLUser;
    }
    return null;
  }
);

const GraphQLUser = new GraphQLObjectType({
  name: "User",
  fields: {
    id: globalIdField("User"),
    name: {
      type: GraphQLString
    }
  },
  interfaces: [nodeInterface]
});

const Query = new GraphQLObjectType({
  name: "Query",
  fields: {
    viewer: {
      type: GraphQLUser,
      resolve: () => getViewer()
    },
    node: nodeField
  }
});

export const schema = new GraphQLSchema({
  query: Query
});
