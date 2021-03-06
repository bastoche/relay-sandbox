// @flow
import { graphql, commitMutation } from "react-relay";

import environment from "./environment";

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

function getOptimisticResponse(complete: boolean, todoId: string) {
  return {
    changeTodoStatus: {
      todo: {
        complete,
        id: todoId
      }
    }
  };
}

function commit(complete: boolean, todoId: string) {
  return commitMutation(environment, {
    mutation,
    variables: {
      input: { complete, id: todoId }
    },
    optimisticResponse: getOptimisticResponse(complete, todoId)
  });
}

export default { commit };
