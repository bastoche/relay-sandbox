// @flow
import React from "react";
import { graphql, createFragmentContainer } from "react-relay";

import type { Todo_todo } from "./__generated__/Todo_todo.graphql";
import ChangeTodoStatusMutation from "./ChangeTodoStatusMutation";

type Props = {
  todo: Todo_todo
};

class Todo extends React.Component<Props> {
  handleCheckboxChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    const complete = e.target.checked;
    const { todo } = this.props;
    ChangeTodoStatusMutation.commit(complete, todo.id);
  };

  render() {
    const { todo } = this.props;
    return (
      <li>
        <div>
          <input
            checked={todo.complete}
            onChange={this.handleCheckboxChange}
            type="checkbox"
          />
          <label>{todo.text}</label>
        </div>
      </li>
    );
  }
}

export default createFragmentContainer(
  Todo,
  graphql`
    fragment Todo_todo on Todo @relay(mask: false) {
      complete
      id
      text
    }
  `
);
