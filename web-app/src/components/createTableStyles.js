import styled from "styled-components";

export const InfoHeader = styled.div`
  font-size: 16px;
  width: 100%;
  border-top: 1px solid rgb(0, 0, 0);
  border-bottom: 1px solid rgb(225, 227, 230);
  display: inline-block;
`;

export const InfoHeaderText = styled.div`
  border-bottom: 2px solid rgb(32, 33, 51);
  display: inline-block;
  padding: 15px 15px 13px;
  font-weight: 700;
`;

export const CreateLabelTd = styled.td`
  width: 180px;
  padding: 0px;
`;

export const ImgBox = styled.div`
  width: 100%;
  height: 200px;
  margin: 0px;
  background-color: rgba(195, 200, 206, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ErrorMessage = styled.div`
  color: rgb(230, 72, 72);
  font-size: 12px;
  margin-bottom: 14px;
`;
