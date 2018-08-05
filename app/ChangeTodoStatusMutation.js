// @flow
import { graphql, commitMutation } from "react-relay";
import type { Environment } from "react-relay";

const mutation = graphql`
  mutation ChangeTodoStatusMutation($input: ChangeTodoStatusInput!) {
    changeTodoStatus(input: $input) {
      todo {
        id
        complete
      }
    }
  }
`;

function commit(environment: Environment, complete: boolean, todoId: string) {
  return commitMutation(environment, {
    mutation,
    variables: {
      input: { complete, id: todoId }
    }
  });
}

export default { commit };
