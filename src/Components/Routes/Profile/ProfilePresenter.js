import React from "react";
import styled from "styled-components";
import { Helmet } from "rl-react-helmet";
import Loader from "../../Loader";
import Avatar from "../../Avatar";
import { withRouter } from "react-router";


const Wrapper1 = styled.div`
    min-height: 100vh;
    padding-top:20%;
    width:100%;
`;

const LoaderWrap = styled.div`
    width:30px;
    margin:auto;
`

const Wrapper = styled.div`
`;

const Header = styled.header`
position: absolute;
top: 0px;
background: #50cc7c;
padding-top: 140px;
display: block;
height: 100vh;
color: white;
padding: 25px;
right: 0px;
}
`;

const HeaderWrapper = styled.div`
    margin-top:100px;
`

const HeaderColumn = styled.div`
`;

const UserInfo = styled.div`
    padding:5px;
    border-bottom:2px solid white;
`;

const UsernameRow = styled.div`
    display: flex;
    align-items: center;
    width:200px;
    margin-top:20px;
`;

const Username = styled.span`
    font-size: 26px;
    display: block;
    margin-right:10px;
`;

const Counts = styled.ul`
    display: flex;
    margin: 15px 0px;
`;

const Count = styled.li`
    font-size: 16px;
    &:not(:last-child) {
        margin-right: 10px;
    }
`;

const FullName = styled.span`
    font-size: 16px;
`;

const Bio = styled.p`
  margin: 10px 0px;
`;

const Posts = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 200px);
  grid-template-rows: 200px;
  grid-auto-rows: 200px;
`;

const FatText = styled.span``

const Button = styled.button`
  width: 60px;
  border: 0;
  color: #6a9984;
  font-weight: 600;
  background-color: white;
  text-align: center;
  padding: 7px 2px;
  font-size: 10px;
  cursor: pointer;
  margin-top:10px
`;

const Close = styled.div`
position: absolute;
display: block;
top: 80px;
right: 260px;
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

export default withRouter(({ loading, data, logOut, history, location} ) => {
  if (loading === true) {
    return (
      <Wrapper1>
        <LoaderWrap>
        <Loader />
        </LoaderWrap>
      </Wrapper1>
    );
  } else if (!loading && data && data.seeUser) {
    const {
      seeUser: {
        id,
        avatar,
        username,
        fullName,
        isSelf,
        bio,
        discussions,
        discussionsCount,
        level
      }
    } = data;
    function closeBtn(){
      history.push("/");
    }
    function logOut(){
      localStorage.removeItem("token");
      history.push("/login");
      location.reload();
    }
    return (
      <Wrapper>
        <Helmet>
          <title>{username} | R.D </title>
        </Helmet>
        <Header>
            <Close onClick={closeBtn}>
              X
            </Close>
            <HeaderWrapper>
                <HeaderColumn>
                    <Avatar size="lg" url={avatar} />
                </HeaderColumn>
                <HeaderColumn>
                    <UserInfo>
                        <UsernameRow>
                        <Username>{username}</Username>{" "}
                        {isSelf &&<Button onClick={logOut}>LOGOUT</Button>}
                        </UsernameRow>
                        <Counts>
                        <Count>
                            <FatText>{discussionsCount} discussions</FatText>
                        </Count>
                        <Count>
                            <FatText>{level} lv.</FatText>
                        </Count>
                        </Counts>
                        <FullName text={fullName} />
                        <Bio>{bio}</Bio>
                    </UserInfo>
                </HeaderColumn>
            </HeaderWrapper>
        </Header>
        <Posts>
        </Posts>
      </Wrapper>
    );
  }
  return null;
 }
)
