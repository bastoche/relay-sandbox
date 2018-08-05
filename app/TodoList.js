// @flow

import React from "react";
import { graphql, createFragmentContainer } from "react-relay";

import type { TodoList_userTodoData } from "./__generated__/TodoList_userTodoData.graphql";
import Todo from "./Todo";

type Props = {
  userTodoData: TodoList_userTodoData
};

class TodoList extends React.Component<Props> {
  render() {
    const {
      userTodoData: { todos }
    } = this.props;

    return (
      <section>
        <ul>
          {todos.edges &&
            todos.edges.map(edge => {
              const node = edge && edge.node;
              if (node) {
                return <Todo key={node.id} todo={node} />;
              }
              return null;
            })}
        </ul>
      </section>
    );
  }
}

export default createFragmentContainer(
  TodoList,
  graphql`
    fragment TodoList_userTodoData on User @relay(mask: false) {
      todos(first: 10) {
        edges {
          node {
            id
            ...Todo_todo @relay(mask: false)
          }
        }
      }
      id
    }
  `
);
