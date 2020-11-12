import React from "react";
import styled from "styled-components";
import Input from "../Components/Input";
import useInput from "../Components/Hooks/useInput"
import { withRouter } from "react-router";
import TagBtn from "./Tag";

const Wrapper = styled.div`
  width:100%;
  padding-top: 95px;
  margin:0 auto;  
`;

const Main = styled.text`
    display:block;
  font-family: 'Pacifico', cursive;
  text-align: center;
  font-size: 7em;
  color: white;
`;

const SearchInput = styled(Input)`
 margin: 54px 0 10px 0;
 background-color: ${props => props.theme.bgColor};
 font-size: 20px;
 background:white;
 border-radius: 20px;
 height: 50px;
 text-align: left;
 padding-left:20px;
 box-sizing:border-box;
 box-shadow: 0 0 10px 3px #476d5347;
 width: 100%;
 &::placeholder {
     opacity: 0.8;
     font-weight: 200;
     color: #34dd70;
 }
`

const HeaderColumn = styled.div`
 position:relative;
 width: 50%;
 text-align: center;
 margin:0 auto;
`;

const SearchButtonWrapper = styled.button`
    position: absolute;
    border:none;
    display:block;
    background-position:center;
    top: 69px;
    right: -9px;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    color: white;
    background:#34dd70;
    box-shadow: 0 0 10px 3px #476d5330;
    cursor:pointer;
`

const SearchButton = styled.button`
    position: absolute;
    border:0;
    outline:0;
    background-color: transparent;
    background-image: url(/static/media/loupe.49d129eb.svg);
    background-repeat: no-repeat;
    background-position: center;
    top: 76px;
    right: 0;
    width: 22px;
    height: 25px;
    cursor:pointer;
`
const TagWrapper = styled.div`
    width:100%;
    height:128px;
`;

const FrontText = styled.span`
display: block;
margin-top: 3px;
font-size: 12px;
color: #ffffff;
font-weight: 600;
padding: 10px;
border-bottom: 1px solid;
margin-bottom: 12px;
text-align:left;
`
const MainText = styled.span`
display: block;
    margin: 0 auto;
    color: white;
    font-size: 20px;
    width: 65vw;
    margin-top: 78px;
    margin-bottom: 44px;
    line-height: 1.3;
    text-align: center;
}
}

`

const SearchHeader = withRouter(({history}) => {
    let mySearchArray = []; 
    if(localStorage.getItem("mySearch")){
        const mySearch = localStorage.getItem("mySearch") ;
        mySearchArray.push(mySearch);
    }
    const search = useInput("");
    const onSearchSubmit = e => {
        e.preventDefault();
        history.push(`/search?term=${search.value}`);
        const searchValue = search.value.replace(" ", "");
        mySearchArray.push(searchValue);
        localStorage.setItem("mySearch", mySearchArray);
        console.log(mySearchArray)
    };
    return(
    <Wrapper>
        <Main>Eco dictionary</Main>
        <MainText>Waste separation is almost effortless, it is easy and it doesnt take a lot of time. no excuses! Once you incoparate waste separation into your daily routine, you'll do it automatically and it will take you just a few seconds!</MainText>
        <HeaderColumn>
                <form onSubmit={onSearchSubmit}>
                    <SearchInput 
                    value={search.value}
                    onChange={search.onChange} 
                    placeholder="I want to recycle..." 
                    />
                     <SearchButtonWrapper>
                    </SearchButtonWrapper>
                    <SearchButton>
                    </SearchButton>
                </form>
                <TagWrapper>
                    <FrontText>Recent searches</FrontText>
                    {localStorage.getItem("mySearch")&&
                     mySearchArray.map(mySearch => (
                        <TagBtn deleteBtn={true} text={mySearch} />
                       )
                      )
                    }
                    {
                        !localStorage.getItem("mySearch")&&
                        <TagBtn deleteBtn={true} />
                    }
                </TagWrapper>
        </HeaderColumn>
    </Wrapper>
    )
    }
)
export default SearchHeader;