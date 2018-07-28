// @flow

import React from "react";
import { graphql, QueryRenderer } from "react-relay";
import environment from "./environment";

export default class App extends React.Component<void> {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query AppQuery {
            viewer {
              name
            }
          }
        `}
        variables={{}}
        render={({ error, props }) => {
          if (error) {
            return <div>Error!</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }
          return <div>Hello {props.viewer.name}</div>;
        }}
      />
    );
  }
}
