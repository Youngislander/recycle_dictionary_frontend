import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const getSize = size => {
    let number;
    if(size === "sm") {
        number = 30;
    } else if(size === "md") {
        number = 50;
    } else if(size === "lg") {
        number = 70;
    }
    return `
       width: ${number}px;
       height: ${number}px;
    `;
};

const Container = styled.div`
  ${props => getSize(props.size)}
  width: 180px;
  height: 180px;
  background-image: url();
  background-size: cover;
  border-radius: 50%;
  border: 2px solid white;
  margin: 0 auto;
`;

const Avatar = ({ size = "sm", url, className }) => (
   <Container className={className} size ={size} url={url} />
);

Avatar.propTypes = {
    size : PropTypes.oneOf(["sm","md","lg"]),
    url : PropTypes.string.isRequired
};

export default Avatar;