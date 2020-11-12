import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.input`
  border-bottom:3px solid white;
  box-sizing:border-box;
  height: 50px;
  font-size: 30px;
  padding: 0px 15px;
  color:#51f180
`;
const Input = ({ 
    placeholder,
    required = true,
    value,
    onChange,
    type="text",
    className 
}) => (
     <Container
       className={className} 
       placeholder={placeholder} 
       required={required} 
       value={value} 
       onChange={onChange} 
       type={type} 
       />
    );

Input.propTypes = {
    placeholder: PropTypes.string.isRequired,
    required: PropTypes.bool,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string
};

export default Input;