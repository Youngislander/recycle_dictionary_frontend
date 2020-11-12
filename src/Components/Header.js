import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import { Recycle } from "./Icons";
import { useQuery } from "react-apollo-hooks";
import { ME } from "../SharedQueries";

const Header = styled.header`
  width: 100%;
  border: 0;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: ${props => props.theme.boxBorder};
  border-radius: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 25px;
  z-index: 2;
  box-sizing:border-box`

const HeaderWrapper = styled.div`
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
  display: flex;
  justify-content: center;
`

const HeaderColumn = styled.div`
 width: 33%;
 text-align: center;
 &:first-child {
     margin-right: auto;
     text-align: left;
 }
 &:last-child{
     margin-left: auto;
     text-align: right;
 }
`;

const HeaderLink = styled(Link)`
  &:not(:last-child){
      margin-right: 30px;
  }
  color:white;

`;



export default withRouter (({ history }) => {
    const { data, loading }= useQuery(ME);
    if(loading) return "";
    return (
       <Header>
           <HeaderWrapper>
               <HeaderColumn>
               <HeaderLink to="/">
                     discussion
                   </HeaderLink>
               </HeaderColumn>
               <HeaderColumn>
               <HeaderLink to="/">
                    <Recycle />
                   </HeaderLink>
               </HeaderColumn>
               <HeaderColumn>
                   {!data.me ? (
                    <>
                        <HeaderLink to ="/login">
                        My page
                        </HeaderLink>
                        <HeaderLink to="/upload">
                            Upload
                        </HeaderLink>
                     </>                   
                   ) : (
                    <>
                        <HeaderLink to={data.me.username}>
                            My page
                        </HeaderLink>
                        <HeaderLink to="/upload">
                            Upload
                        </HeaderLink>
                    </>
                   )}
               </HeaderColumn>
           </HeaderWrapper>
       </Header>
    );
});