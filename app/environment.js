// @flow

import { Environment, Network, RecordSource, Store } from "relay-runtime";
import { API_PORT } from "../config";

function fetchQuery(operation, variables) {
  return fetch(`http://localhost:${API_PORT}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  }).then(response => {
    return response.json();
  });
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource())
});

export default environment;
