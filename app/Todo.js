// @flow
import React from "react";
import { graphql, createFragmentContainer } from "react-relay";
import type { Environment } from "react-relay";

import type { Todo_todo } from "./__generated__/Todo_todo.graphql";
import ChangeTodoStatusMutation from "./ChangeTodoStatusMutation";

type Props = {
  relay: {
    environment: Environment
  },
  todo: Todo_todo
};

class Todo extends React.Component<Props> {
  handleCheckboxChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    const complete = e.target.checked;
    const { relay, todo } = this.props;
    ChangeTodoStatusMutation.commit(relay.environment, complete, todo.id);
  };

  render() {
    const { todo } = this.props;
    const { complete, text } = todo;
    return (
      <li>
        <div>
          <input
            checked={complete}
            onChange={this.handleCheckboxChange}
            type="checkbox"
          />
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
      id
      text
    }
  `
);
