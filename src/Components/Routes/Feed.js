import React from "react";
import Helmet from "rl-react-helmet";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import Loader from "../Loader";
import Post from "../Post";

const FEED_QUERY = gql`
  {
      seeFeed {
          id
          title
          caption
          views
          hashTags
          user{
              id
              avatar
              username
          }
          files{
              id
              url
          }
          createdAt
      }
  }
`;

const Wrapper = styled.div`
  // display: flex;
  // flex-direction: column;
  align-items: center;
  min-height: 80vh;
`;

// const Section = styled.div`
//   margin-bottom: 50px;
//   // grid-gap: 45px;
//   // grid-template-columns: repeat(4, 160px);
//   // grid-template-rows: 160px;
//   // grid-auto-rows: 160px;
// `;

const PostSection = styled.div`
  // grid-template-columns: repeat(3,242px);
  // grid-template-rows: 460px;
  // grid-auto-rows: 245px;
  margin-bottom: 50px;
  margin: 0 auto;
  width:69vw;
`;

export default () => {
    const { data, loading } = useQuery(FEED_QUERY);
    return (
        <Wrapper>
          <Helmet>
              <title>Feed | Eco dictionary</title>
          </Helmet>
            {loading && <Loader />}
            <div class="postSection">  
            {!loading &&
              data &&
              data.seeFeed &&
              data.seeFeed.map(post => (
                <>
                  <Post
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    caption={post.caption}
                    hashTags={post.hashTags}
                    user={post.user}
                    files={post.files}
                    views={post.views}
                    createdAt={post.createdAt}
                  />
                  </>
              ))}
            </div>
        </Wrapper>
    )
}