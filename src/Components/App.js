import React from 'react';
import { gql } from "apollo-boost";
import GlobalStyles from "./Styles/GlobalStyles.";
import styled from "styled-components";
import {HashRouter as Router} from "react-router-dom"
import { useQuery } from "react-apollo-hooks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import Routes from "./Routes"
import Header from "./Header"
import SearchHeader from "./SearchHeader"
import bg from "../img/bg4.png"

const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};
  width: 100%;
`;
const Bg = styled.div`
  background-image: url(${bg});
  position: absolute;
  width: 100%;
  background-size: cover;
  height: 100vh;
  top: 0;
  z-index: -1;
  opacity: 0.3;
}

`

export default () => {
  const { data: {isLoggedIn} } = useQuery(QUERY);
return (
   <>
   <GlobalStyles />
   <Bg class="bg"></Bg>
    <Router>
      <>
      <Header />
      <SearchHeader />
      <Wrapper>
        <Routes isLoggedIn={isLoggedIn} />
      </Wrapper> 
      </>
    </Router>
    <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
   </>
 )
};