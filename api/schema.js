// @flow

import {
  GraphQLBoolean,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString
} from "graphql";
import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
  fromGlobalId,
  globalIdField,
  nodeDefinitions
} from "graphql-relay";
import type { ConnectionArguments } from "graphql-relay";

import { User, toUserId } from "./model/user";
import { Todo, toTodoId } from "./model/todo";
import { getUser, addUser } from "./services/user";
import { addTodo, getTodo, getTodos } from "./services/todo";

const { nodeInterface, nodeField } = nodeDefinitions(
  globalId => {
    const { type, id } = fromGlobalId(globalId);
    if (type === "Todo") {
      return getTodo(toTodoId(id));
    } else if (type === "User") {
      return getUser(toUserId(id));
    }
    return null;
  },
  obj => {
    if (obj instanceof Todo) {
      return GraphQLTodo;
    } else if (obj instanceof User) {
      return GraphQLUser;
    }
    return null;
  }
);

const GraphQLTodo = new GraphQLObjectType({
  name: "Todo",
  fields: {
    id: globalIdField("Todo"),
    text: {
      type: GraphQLNonNull(GraphQLString)
    },
    complete: {
      type: GraphQLNonNull(GraphQLBoolean)
    }
  },
  interfaces: [nodeInterface]
});

const { connectionType: TodosConnection } = connectionDefinitions({
  name: "Todo",
  nodeType: GraphQLTodo
});

const GraphQLUser = new GraphQLObjectType({
  name: "User",
  fields: {
    id: globalIdField("User"),
    name: {
      type: GraphQLNonNull(GraphQLString)
    },
    todos: {
      type: GraphQLNonNull(TodosConnection),
      args: connectionArgs,
      resolve: (user: User, args: ConnectionArguments) =>
        connectionFromArray(getTodos(user.id), args)
    }
  },
  interfaces: [nodeInterface]
});

const Query = new GraphQLObjectType({
  name: "Query",
  fields: {
    viewer: {
      type: GraphQLNonNull(GraphQLUser),
      resolve: () => getUser(VIEWER_ID)
    },
    node: nodeField
  }
});

// fake authentication
const VIEWER_ID = toUserId("VIEWER_ID");
addUser(new User(VIEWER_ID, "Viewer"));

// data initialization
addTodo(VIEWER_ID, new Todo("done", true));
addTodo(VIEWER_ID, new Todo("not done", false));

export const schema = new GraphQLSchema({
  query: Query
});
