import React from "react";
import styled, { keyframes } from "styled-components";
import { Recycle } from "./Icons";

const Animation = keyframes`
  0%{
      opacity:0
  }
  50%{
      opacity:0.5
  }
  100%{
      opacity:0
  }
`;

const Loader = styled.div`
  animation: ${Animation} 1s linear infinite;
  width: 100%;
  text-align: center;
`;

export default () => (
    <Loader>
        <Recycle />
    </Loader>
);


