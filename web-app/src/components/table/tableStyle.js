import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  text-align: center;
  table-layout: fixed;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  line-height: 20px;
`;

export const TheadTr = styled.tr`
  height: 42px;
  min-height: 42px;
  background-color: rgb(250, 250, 250);
  border-top: 1px solid rgb(0, 0, 0);
  border-bottom: 1px solid rgb(225, 227, 230);
`;

export const TbodyTr = styled.tr`
  cursor: pointer;
  border-top: none;
  border-bottom: 1px solid rgba(132, 132, 132, 0.2);
  font-size: 13px;
  min-height: 41px;
  height: 41px;
  &:hover {
    background-color: rgb(240, 240, 240);
  }
`;

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
  justify-content: center;
  margin-top: 24px;
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
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
