import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Input from "../../Input";
import Button from "../../Button";
import { withRouter } from "react-router";

const Wrapper = styled.div`
  position:absolute;
  top:0;
  right:0;
  background:#000000;
  opacity:0.9;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Box = styled.div`
background:black;
  border-radius: 0px;
  width: 100%;
  max-width: 350px;
  margin-bottom:20px
`;

const StateChanger = styled.span`
display:inline-block;
text-align:center;
color: white;
margin-top:-20px;
`;

const Link = styled.span`
  margin-top:10px;
  color: #34dd70;
  cursor: pointer;
  display:block;
  padding:10px;
  margin: 0 auto;
  width: 83px;
`;

const LoginTitle = styled.span`
  display:block;
  text-align:center;
  font-size:16px;
  font-weight:700;
  color:white;
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
              margin-bottom: 7px;
          }
      }
      button {
          margin-top: 10px;

      }
  }
`;

const Close = styled.div`
position: absolute;
display: block;
top: 90px;
right: 350px;
width: 35px;
height: 35px;
color: white;
font-size: 20px;
background: #34dd70;
text-align: center;
padding-top: 7px;
cursor:pointer
}
`

export default withRouter(({
    action,
    username,
    firstName,
    lastName,
    email,
    setAction,
    onSubmit,
    secret,
    history
}) => {
  function closeBtn(){
    history.push("/");
  }
return(
    <Wrapper>
      <Form>
          {action === "logIn" && (
            <>
             <Helmet>
               <title>Log In | Dancegram </title>
             </Helmet>
             <Close onClick={closeBtn}>
              X
            </Close>
              <LoginTitle>Welcome!</LoginTitle>
              <form onSubmit={onSubmit}>
               <Input placeholder={"Email"} {...email} type="email" />
               <Button text={"Log in"} />
              </form>
            </>
          )}
          {action === "signUp" && (
            <>
             <Helmet>
               <title>Sign Up | Dancegram </title>
             </Helmet>
             <Close onClick={closeBtn}>
              X
            </Close>
             <LoginTitle>Do you love Earth? Join us!</LoginTitle>
              <form onSubmit={onSubmit}>
                <Input placeholder={"First name"} {...firstName} />
                <Input placeholder={"Last name"} {...lastName} />
                <Input placeholder={"Email"} {...email} type="email" />
                <Input placeholder={"Username"} {...username} />
                <Button text={"Sign up"} />
              </form>
            </>
          )}
          {action === "confirm" && (
            <>
              <Helmet>
                <title> Confirm secret | Dancegram </title>
              </Helmet>
              <Close onClick={closeBtn}>
              X
              </Close>
              <form onSubmit={onSubmit}>
                <Input placeholder="Paste your secret" required {...secret} />
                <Button text={"confirm"} />
              </form>
            </>
          )}
     </Form>

     {action !== "confirm" && (
      <StateChanger>
         {action === "logIn" ? (
             <>
              Don't have an account?{" "}
              <Link onClick={() => setAction("signUp")}>Sign up</Link>
             </> 
         ) : (
             <>
             Have an account?{" "}
             <Link onClick={() => setAction("logIn")}>Log in</Link>
             </>
         )}
      </StateChanger>
     )}
     </Wrapper>
)
}
)