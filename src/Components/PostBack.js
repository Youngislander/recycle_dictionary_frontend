import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Post = styled.div`
  position:relative
  ${props => props.theme.whiteBox};
  background: linear-gradient(rgb(121, 255, 163), rgb(208 255 225), rgb(255 255 255));
  box-shadow: 0 0 10px 3px #424c4585;
  border-radius:20px;
  padding:20px;
  width: 260px;
  max-width: 600px;
  margin-bottom: 25px;
  user-select: none;
  a {
    color: inherit;
  };
  height:408px;
  cursor:pointer;
`;

const Detail = styled(Link)`
  display:block;
   width:100px;
   line-height:30px;
   color:black;
   border: 1px solid black;
   text-align:center;
   margin:10px auto;
    &:hover{
        color:white;
        background:black;
    }
`

const Title = styled.span`
  position:absolute;
  z-index:-1;
  width:195px;
  height:70px;
  top:-20px;
  left:50%;
  margin-left:-98px;
  border-radius:20px;
  background:black;
  display: block;
  margin-top: 5px;
  font-size: 20px;
  font-weight:700;
  color:#daf6e3;
  line-height:70px;
  text-align:center;
  box-shadow: 0 0 10px 3px #424c4585;
`;

const Caption = styled.span`
  color:black;
  font-size:14px;
  overflow: hidden; 
  text-overflow: ellipsis; 
  display: -webkit-box; 
  -webkit-line-clamp: 9;
  -webkit-box-orient: vertical; 
  word-wrap:break-word; 
  line-height: 1.2em; 
  height: 10.8em;
`

const Files = styled.div`
  margin-top:50px;
  position: relative;
  padding-bottom: 84%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex-shrink: 0;
`;

const File = styled.img`
width: 150px;
position: absolute;
top: 50%;
background-image: url($props => props.src);
background-size: cover;
background-position: center;
opacity: 1;
-webkit-transition: opacity 0.5s linear;
left: 45%;
margin-top: -80px;
margin-left: -63px;
`;

const Button = styled.span`
  cursor: pointer;
`;

const Meta = styled.div`
  padding: 15px;
`

export default ({
    id,
    hashTags,
    title,
    files,
    createdAt,
    currentItem,
    caption
}) => (
    <Post>
        <Title>
        </Title>
        <Meta>
          <Caption>
            {caption}
          </Caption>
        </Meta>
        <Detail to={`/detail/${id}`}>
          Detail
        </Detail>
    </Post>
);
