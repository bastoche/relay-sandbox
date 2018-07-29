// @flow

import React from "react";
import { graphql, QueryRenderer } from "react-relay";

import environment from "./environment";
import type { AppQueryResponse } from "./__generated__/AppQuery.graphql";

export default class App extends React.Component<{||}> {
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
        render={({
          error,
          props
        }: {
          error: ?Error,
          props: ?AppQueryResponse
        }) => {
          if (error) {
            return <div>Error!</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }
          if (!props.viewer) {
            return <div>Hello, stranger!</div>;
          }
          if (props.viewer) {
            return <div>Hello, {props.viewer.name}!</div>;
          }
        }}
      />
    );
  }
}
