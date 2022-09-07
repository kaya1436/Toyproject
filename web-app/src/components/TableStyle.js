import styled from "styled-components";
import blankImg from "../assets/img/photo-f.svg";

export const ContentBox = styled.div`
  width: 100%;
  padding: 110px 50px 50px 30px;
  box-sizing: border-box;
`;

export const ContentTitle = styled.div`
  display: block;
  font-size: 26px;
  font-weight: 500;
  margin-bottom: 24px;
`;

export const Form = styled.form`
  display: block;
`;

export const FormButton = styled.button`
  float: right;
  height: 34px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(191, 191, 191);
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  min-width: 88px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: 8px;
  margin-bottom: 12px;
  color: rgb(0, 0, 0);
`;

export const ColorButton = styled.button`
  float: right;
  height: 34px;
  background-color: rgb(32, 33, 51);
  color: rgb(255, 255, 255);
  border: none;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  min-width: 88px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: 8px;
  margin-bottom: 12px;
`;

export const SearchBox = styled.div`
  background-color: rgb(250, 250, 250);
  border: 1px solid rgb(240, 240, 240);
  padding: 6px 24px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;
`;

export const SearchTable = styled.table`
  width: 100%;
  border-spacing: 0px;
  table-layout: fixed;
`;

export const LabelTd = styled.td`
  min-width: 100px;
  width: 200px;
  line-height: 17px;
  padding: 0px;
  padding: 0px;
`;

export const Label = styled.label`
  height: 100%;
  font-size: 16px;
`;

export const SearchTd = styled.td`
  padding: 5px 0px;
`;

export const Input = styled.input`
  width: 100%;
  padding-left: 12px;
  padding-right: 12px;
  height: 34px;
  border-radius: 4px;
  border: 1px solid rgb(191, 191, 191);
  color: rgb(191, 191, 191);
  background-color: rgb(255, 255, 255);
  font-size: 14px;
  &:focus {
    outline: none;
    border: 2px solid rgb(37, 172, 204);
    color: rgb(0, 0, 0);
  }
  &:disabled {
    background-color: rgb(238, 238, 238);
    color: rgb(119, 128, 139);
  }
`;

export const TableDivLeft = styled.td`
  width: 20px;
  border-right: 1px solid rgb(235, 235, 235);
`;

export const TableDivRight = styled.td`
  width: 20px;
`;

export const selectStyles = {
  control: () => ({
    height: "34px",
    width: "100%",
    display: "flex",
    border: "1px solid rgb(191, 191, 191)",
    borderRadius: "4px",
    backgroundColor: "rgb(255, 255, 255)",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    width: "30px",
  }),
  valueContainer: (provided) => ({
    ...provided,
    flexWrap: "nowrap",
  }),
  multiValue: (provided) => ({
    ...provided,
    borderRadius: "4px",
    backgroundColor: "rgb(240, 240, 240)",
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: "rgb(132, 140, 165)",
    "&:hover": { backgroundColor: "rgb(240, 240, 240)", color: "rgb(0,0,0)" },
  }),
};

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

export const ImgBox = styled.div`
  width: 100%;
  height: 218px;
  margin: 0px;
  background-color: rgba(195, 200, 206, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Img = styled.div`
  background-image: url(${blankImg});
  background-position: center;
  display: inline-block;
  background-repeat: no-repeat;
`;
