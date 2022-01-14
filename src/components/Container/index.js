import styled from "@emotion/styled";
import React from "react";

const Container = styled.div`
  overflow: hidden;
  padding: 30px 15px;
`;

function index({ children }) {
  return <Container>{children}</Container>;
}

export default index;
