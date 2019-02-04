import React, { Component } from "react";
import Link from "./Link";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const FEED_QUERY = gql`
  {
    feed {
      links {
        id
        description
        url
      }
    }
  }
`;

class LinkList extends Component {
  render() {
    
    return (
      <Query query={FEED_QUERY}>
        {() => linksToRender.map(link => <Link key={link.id} link={link} />)}
      </Query>
    );
  }
}

export default LinkList;
