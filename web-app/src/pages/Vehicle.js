import { useState } from "react";
import { Link } from "react-router-dom";
import { MultiSelect } from "../components/MultiSelect";
import BasicTable from "../components/table/BasicTable";
import {
  ColorButton,
  ContentBox,
  ContentTitle,
  Form,
  FormButton,
  Input,
  SearchBox,
  SearchTd,
  Label,
  LabelTd,
  SearchTable,
  TableDivLeft,
  TableDivRight,
} from "../components/TableStyle";

function Vehicle() {
  const [vin, setVin] = useState("");
  const [number, setNumber] = useState("");
  const [contractor, setContractor] = useState("");
  const [selected, setSelected] = useState([]);
  const defaultValues = {
    vin: vin,
    license_plate_number: number,
    계약자명: contractor,
    brand: selected,
  };
  const options = [
    { value: "test1", label: "test1" },
    { value: "test2", label: "test2" },
    { value: "test3", label: "test3" },
    { value: "test4", label: "test4" },
  ];
  const onReset = () => {
    setVin("");
    setNumber("");
    setContractor("");
    setSelected([]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(defaultValues));
  };

  return (
    <ContentBox>
      <div>
        <Form onSubmit={onSubmit} autoComplete="off">
          <ContentTitle>차량정보</ContentTitle>
          <Link to="/vehicle/create">
            <ColorButton>등록</ColorButton>
          </Link>
          <FormButton>일괄등록</FormButton>
          <FormButton>내려받기</FormButton>
          <FormButton>삭제</FormButton>
          <FormButton>포맷 다운로드</FormButton>
          <SearchBox>
            <SearchTable>
              <tbody>
                <tr>
                  <LabelTd>
                    <Label htmlFor="vin">VIN No.</Label>
                  </LabelTd>
                  <SearchTd>
                    <Input
                      placeholder="내용을 입력하세요."
                      value={vin}
                      onChange={(e) => setVin(e.target.value)}
                    ></Input>
                  </SearchTd>
                  <TableDivLeft rowSpan="2" />
                  <TableDivRight rowSpan="2" />
                  <LabelTd>
                    <Label htmlFor="license_plate_number">차량번호</Label>
                  </LabelTd>
                  <SearchTd>
                    <Input
                      placeholder="내용을 입력하세요."
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                    ></Input>
                  </SearchTd>
                </tr>
                <tr>
                  <LabelTd>
                    <Label htmlFor="계약자명">계약자명</Label>
                  </LabelTd>
                  <SearchTd>
                    <Input
                      placeholder="내용을 입력하세요."
                      value={contractor}
                      onChange={(e) => setContractor(e.target.value)}
                    ></Input>
                  </SearchTd>
                  <LabelTd>
                    <Label htmlFor="product_name">E-mobility 요금제</Label>
                  </LabelTd>
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
        <form>
          <div>
            <BasicTable />
          </div>
        </form>
      </div>
    </ContentBox>
  );
}
export default Vehicle;
