import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Input from "../../Input";
import Button from "../../Button";
import { withRouter } from "react-router";

const Wrapper = styled.div`
    position: absolute;
    background: #000000;
    opacity:0.9;
    height: 100vh;
    top: 0px;
    width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Box = styled.div`
  border-radius: 0px;
  width: 100%;
  max-width: 350px;
`;

const LoginTitle = styled.span`
  display:block;
  text-align:center;
  font-size:16px;
  font-weight:700;
  margin-bottom:25px;
`

const Form = styled(Box)`
  padding: 40px;
  padding-bottom: 30px;
  margin-bottom: 15px;
  form{
      width: 100%;
      input {
          width: 100%;
          &:not(:last-child){
              margin-top: 7px;
          }
      }
      button {
          margin-top: 10px;
      }
  }
`;

const Close = styled.div`
    display:block;
    position:absolute;
    top:220px;
    right:620px;
    color:white;
    font-size:30px;
    cursor:pointer;
`

export default withRouter(({
    title,
    files,
    hashTag,
    caption,
    onSubmit, history}) => {
    const closeBtn=()=>{
        history.push("/");
    }
return(
    <Wrapper>
        <Form>
            <Helmet>
            <title>Upload | Dancegram </title>
            </Helmet>
            <Close onClick={closeBtn}>X</Close>
            <LoginTitle>Upload post!</LoginTitle>
            <form onSubmit={onSubmit}>
                <Input placeholder={"HashTag"} {...hashTag} />
                <Input placeholder={"title"} {...title} />
                <Input placeholder={"Caption"} {...caption} />
                <Input placeholder={"File"} {...files} />
                <Button text={"Upload"} />
            </form>
        </Form>
    </Wrapper>
)}
)