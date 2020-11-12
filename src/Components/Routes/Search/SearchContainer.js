import React from "react";
import Helmet from "rl-react-helmet";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import Loader from "../../Loader";
import Post from "../../Post";

const SEARCH_QUERY = gql`
    query searchPost($term: String!) {
        searchPost(term:$term){
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
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
`;

const Section = styled.div`
  margin-bottom: 50px;
  display: grid;
  grid-gap: 45px;
  grid-template-columns: repeat(4, 160px);
  grid-template-rows: 160px;
  grid-auto-rows: 160px;
`;

const PostSection = styled(Section)`
  grid-template-columns: repeat(3,242px);
  grid-template-rows: 460px;
  grid-auto-rows: 245px;
`;

export default ({location}) => {
    const term = location.search.split('=')[1].replace("/(\s*)/g", "");
    const { data, loading } = useQuery(SEARCH_QUERY, {
        variables: {term}
    });
    return (
        <Wrapper>
          <Helmet>
              <title>Search: {term} | Eco dictionary</title>
          </Helmet>
            {loading && <Loader />}
            <PostSection>  
            {!loading &&
              data &&
              data.searchPost &&
              data.searchPost.map(post => (
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
            </PostSection>
        </Wrapper>
    )
}