import styled from "@emotion/styled";
import React from "react";

const Header = styled.div`
  background-color: #121212;
  padding: 5px 15px 5px 15px;
`;

const Brand = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
`;

function index() {
  return (
    <Header>
      <Brand>Movies List JULO</Brand>
    </Header>
  );
}

export default index;
