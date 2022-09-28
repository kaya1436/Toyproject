import styled from "styled-components";

export const TableTop = styled.div`
  width: 100%;
  margin-top: 50px;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FilterDiv = styled.div`
  display: flex;
`;

export const Page = styled.div`
  width: 100px;
`;

export const ColumnFilter = styled.div`
  margin-left: 10px;
  width: 180px;
`;

export const PageDiv = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: center;
`;

export const ArrowButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  margin: 2px;
  padding-top: 3px;
  padding-right: 0px;
  padding-left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:disabled {
    cursor: unset;
    color: rgb(153, 153, 153);
  }
`;

export const PageSpan = styled.span`
  display: flex;
  align-items: center;
  line-height: 23px;
`;

export const PageButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: rgb(153, 153, 153);
  border-radius: 50%;
  height: 24px;
  width: 24px;
  margin: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: rgb(230, 230, 230);
  }
  &.active {
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
    font-weight: bold;
    height: 23px;
    width: 23px;
  }
`;

export const LoadingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
