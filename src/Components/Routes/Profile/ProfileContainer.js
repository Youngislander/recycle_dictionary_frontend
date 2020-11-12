import React from "react";
import ProfilePresenter from "./ProfilePresenter"
import { gql } from "apollo-boost";
import withRouter from "react-router-dom/withRouter";
import { useQuery, useMutation } from "react-apollo-hooks";

const GET_USER = gql`
  query seeUser($username: String!) {
      seeUser(username: $username){
          id
          avatar
          username
          fullName
          isSelf
          bio
          level
          discussionsCount
          discussions{
              id
              files{
                  url
              }
              likeCount
          }
      }
  }
`;

export const LOG_OUT = gql`
  mutation logUserOut{
      logUserOut @client
  }
`

export default withRouter(({ match: { params: { username } } }) => {
    const { data, loading } = useQuery(GET_USER, { variables: { username } });
    const logOut = useMutation(LOG_OUT);
    return <ProfilePresenter loading={loading} logOut={logOut} data={data} />;
});