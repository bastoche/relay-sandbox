// @flow
import React from "react";
import { graphql, createFragmentContainer } from "react-relay";

import type { Todo_todo } from "./__generated__/Todo_todo.graphql";

type Props = {
  todo: Todo_todo
};

class Todo extends React.Component<Props> {
  render() {
    const { complete, text } = this.props.todo;

    return (
      <li>
        <div>
          <input readOnly checked={complete} type="checkbox" />
          <label>{text}</label>
        </div>
      </li>
    );
  }
}

export default createFragmentContainer(
  Todo,
  graphql`
    fragment Todo_todo on Todo {
      complete
      text
    }
  `
);
