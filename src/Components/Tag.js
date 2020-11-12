import React, { useEffect } from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import { searchLogo } from "./Icons";

const TagWrapper = styled.div`
width: 100%;
padding: 0px 0px 50px;
text-align: left;
margin: 0 auto;
    `;

const Tag = styled.span`
display: inline-block;
text-align: left;
font-size: 12px;
font-weight: 600;
border-radius: 20px;
border: 2px solid #4dff8c;
padding: 8px 10px;
box-sizing: border-box;
color: #4dff8c;
`
const DeleteBtn = styled.span`
    display: inline-block;
    width: 20px;
    height: 20px;
    font-size: 5px;
    color: white;
    margin-left: -7px;
    margin-right:10px;
    font-weight: 600;
    border-radius: 50%;
    background: #67987f;
    text-align: center;
    padding-top: 5px;
    cursor:pointer;
`
const TagLink = styled(Link)``;

const TagBtn = ({frontText="", bg="black", color="white", text="", deleteBtn=false }) =>
{   //hashTag가 db에 콤마로 여러개 저장되어있을때를 대비..
    let textArray =[];
    textArray.push(text);
    if(text.includes(","))textArray=text.split(",");
    //local search기록 delete
    let mySearch = localStorage.getItem("mySearch");
    console.log(mySearch)
    function deleteSearch(e) {
        if(mySearch){
            let mySearchArray = mySearch.split(",")
            const target = e.target.previousSibling.href.split("=")[1]
            console.log(target);
            const newSearchArray = mySearchArray.filter(function(array){
                console.log(target, array)
                return array !== target
             }
            )
            console.log(newSearchArray);
            localStorage.setItem("mySearch", newSearchArray);
        }
        e.target.previousSibling.remove();
        e.target.remove();
    }
return(  
  <TagWrapper>
            <>
            {text===""&&deleteBtn&&
                (<>
                    <TagLink to={`/search?term=glass`}>
                        <Tag bg={bg} color={color}> #glass</Tag>
                    </TagLink>
                        <DeleteBtn onClick={deleteSearch}>X</DeleteBtn>
                    <TagLink to={`/search?term=plastic`}>
                        <Tag bg={bg} color={color}> #plastic</Tag>
                    </TagLink>
                        <DeleteBtn onClick={deleteSearch}>X</DeleteBtn>
                    <TagLink to={`/search?term=bottle`}>
                        <Tag bg={bg} color={color}> #bottle</Tag>
                    </TagLink>
                        <DeleteBtn onClick={deleteSearch}>X</DeleteBtn>
                 </>
                )
            }
            {text&&!deleteBtn&&
                textArray.map(text=> 
                    (<>
                        <TagLink to={`/search?term=${text}`}>
                        <Tag bg={bg} color={color}> #{text}</Tag>
                        </TagLink>
                     </>)
                )
            }
            
        {/* 해시태그 받았을 때 */}
            {
                text!==""&&deleteBtn&&mySearch&&
                textArray.map(text=>
                    (
                        <>
                        <TagLink to={`/search?term=${text}`}>
                            <Tag bg={bg} color={color}> #{text}</Tag>
                        </TagLink>
                            {
                          deleteBtn&&
                          (<DeleteBtn onClick={deleteSearch}>X</DeleteBtn>)
                            }
                        </>
                    )    
                )
            }
            </>
    </TagWrapper>
)
};

export default TagBtn;