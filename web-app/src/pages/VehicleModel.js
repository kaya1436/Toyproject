import { Link } from "react-router-dom";
import {
  ColorButton,
  ContentBox,
  ContentTitle,
  Form,
  FormButton,
  Input,
  Label,
  LabelTd,
  SearchBox,
  SearchTable,
  SearchTd,
} from "../components/TableStyle";
import { TableDivision } from "../components/SearchTable";
import { useState } from "react";
import { MultiSelect } from "../components/MultiSelect";
import GridTable from "./gridTable";

function VehicleModel() {
  const [input, setInput] = useState("");
  const [selected, setSelected] = useState([]);
  const defaultValues = { vehicle_name: input, brand: selected };
  const options = [
    { label: "현대자동차", value: "hyundai" },
    { label: "기아자동차", value: "kia" },
  ];
  const onReset = () => {
    setInput("");
    setSelected([]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(defaultValues));
  };

  return (
    <ContentBox>
      <div>
        <Form autoComplete="off" onSubmit={onSubmit}>
          <ContentTitle>차량모델관리</ContentTitle>
          <Link to="/vehicleModel/create">
            <ColorButton>등록</ColorButton>
          </Link>
          <FormButton>삭제</FormButton>
          <SearchBox>
            <SearchTable>
              <tbody>
                <tr>
                  <LabelTd>
                    <Label htmlFor="vehicle_name">모델명</Label>
                  </LabelTd>
                  <SearchTd>
                    <Input
                      placeholder="내용을 입력하세요."
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                    ></Input>
                  </SearchTd>
                  <TableDivision num="1" />
                  <td>
                    <label>제조사</label>
                  </td>
                  <SearchTd>
                    <MultiSelect
                      options={options}
                      value={selected}
                      onChange={setSelected}
                    />
                  </SearchTd>
                </tr>
                <tr>
                  <SearchTd colSpan="6">
                    <ColorButton type="submit" style={{ marginBottom: "0px" }}>
                      검색
                    </ColorButton>
                    <FormButton
                      onClick={onReset}
                      style={{ marginBottom: "0px" }}
                    >
                      초기화
                    </FormButton>
                  </SearchTd>
                </tr>
              </tbody>
            </SearchTable>
          </SearchBox>
        </Form>
      </div>
      <div>
        <GridTable />
      </div>
    </ContentBox>
  );
}
export default VehicleModel;
