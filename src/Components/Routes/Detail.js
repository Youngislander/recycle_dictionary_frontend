import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import Loader from "../Loader";
import TagBtn from "../Tag";


const Wrapper = styled.div`
    position:relative;
    width:100%;
`;

const Contents = styled.div`
    padding:50px;
    box-sizing:border-box;
    width:80vw;
    height: 70vh;
    background:#f8fffb;
    border-radius: 20px;
    margin: 40px auto;
    overflow:auto;
    &::webkit-scrollbar{
        width:10px;
        height:0;
        background:black
    };
    &::webkit-scrollbar-thumb{
        width:3px;
        background: black;
    }
    &::webkit-scrollbar-track{
        background: grey
    }
`;


const LoaderWrapper = styled.div`
    position:absolute;
    top:45%;
    left:49%;
`;

const Title = styled.span`
display: inline-block;
font-size: 30px;
font-weight: 700;
line-height: 53px;
border-bottom: 3px solid #88b696;
`;

const Caption = styled.span`
    display:block;
    padding:20px 0 20px 0;
  color:black;
  font-size:14px;
  line-height:1.5
`

const Files = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex-shrink: 0;
`;

const File = styled.img`
width: 150px;
background-image: url($props => props.src);
background-size: cover;
background-position: center;
opacity: 1;
-webkit-transition: opacity 0.5s linear;
margin-top: 50px;
margin-left: 50px;
`;


const SEE_POST = gql`
    query seeFullPost($id: String!) {
        seeFullPost(id: $id){
            id
            title
            hashTags
            caption
            files{
                id
                url
            }
            createdAt
        }
    }
`

export default ({match:{params:{id}}}) => {
    const {data, loading} = useQuery(SEE_POST, {
        variables: {id}
        }
    );
    return (
    <Wrapper>
        <LoaderWrapper>
            {loading && <Loader />}
        </LoaderWrapper>
        {!loading&&(
        <Contents>
            <Title>{data.seeFullPost.title}</Title>
            <Files>
                {
                    data.seeFullPost.files && 
                    data.seeFullPost.files.map((file, index) => (
                <File id={file.id} src={file.url} />
                ))}
            </Files>
            <Caption>{data.seeFullPost.caption}</Caption>
            <TagBtn text={data.seeFullPost.hashTags} deleteBtn={false} />
        </Contents>
        )}
    </Wrapper>
    )
}
