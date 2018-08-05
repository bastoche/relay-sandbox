// @flow
import React from "react";
import { graphql, QueryRenderer } from "react-relay";

import type { ViewerTodoListQueryResponse } from "./__generated__/ViewerTodoListQuery.graphql";
import TodoList from "./TodoList";
import environment from "./environment";

export default class ViewerTodoList extends React.Component<{||}> {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query ViewerTodoListQuery {
            viewer {
              id
              ...TodoList_userTodoData
            }
          }
        `}
        variables={{}}
        render={({
          error,
          props
        }: {
          error: ?Error,
          props: ?ViewerTodoListQueryResponse
        }) => {
          if (error) {
            return <div>Error!</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }
          return (
            <div>
              <div>Todo list for User {props.viewer.id}:</div>
              {/* $FlowFixMe */}
              <TodoList userTodoData={props.viewer} />
            </div>
          );
        }}
      />
    );
  }
}
