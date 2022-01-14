import styled from "@emotion/styled";
import React from "react";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Page = styled.button`
  background: transparent;
  padding: 0;
  border: 0;
  color: #fff;
  font-size: 18px;
  margin: 0 5px;
`;

function index({ totalData, dataPerPage, onPress }) {
  const totalPages = () => {
    const totalPage = Math.ceil(totalData / dataPerPage);
    const arr = [];
    for (let index = 0; index < totalPage; index++) {
      arr.push(index);
    }
    return arr;
  };
  return (
    <Wrapper>
      {totalPages().map((_) => {
        return (
          <Page key={_} onClick={() => onPress(_)}>
            {_ + 1}
          </Page>
        );
      })}
    </Wrapper>
  );
}

export default index;
