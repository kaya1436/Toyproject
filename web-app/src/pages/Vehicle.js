import { useState } from "react";
import { Link } from "react-router-dom";
import { MultiSelect } from "../components/search/MultiSelect";
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
} from "../components/search/searchTableStyle";
import { t } from "i18next";
import GridTable from "../components/table/GridTable";
import {
  DeleteButton,
  DownloadButton,
  ResetButton,
  SearchButton,
  UploadButton,
} from "../components/search/buttons";
import { PopUp } from "../components/search/PopUp";
import {
  VehicleNumberInput,
  VinInput,
} from "../components/search/searchInputForm";

function Vehicle() {
  const [number, setNumber] = useState("");
  const [contractor, setContractor] = useState("");
  const [selected, setSelected] = useState([]);

  const options = [
    { value: "test1", label: "test1" },
    { value: "test2", label: "test2" },
    { value: "test3", label: "test3" },
    { value: "test4", label: "test4" },
  ];

  return (
    <ContentBox>
      <div>
        <Form autoComplete="off">
          <ContentTitle>{t("Vehicle Info.")}</ContentTitle>
          <Link to="/vehicle/create">
            <ColorButton>{t("Register")}</ColorButton>
          </Link>
          <UploadButton />
          <DownloadButton />
          <DeleteButton />
          <FormButton>{t("Format Download")}</FormButton>
          <PopUp />
          <SearchBox>
            <SearchTable>
              <tbody>
                <tr>
                  <VinInput />
                  <TableDivLeft rowSpan="2" />
                  <TableDivRight rowSpan="2" />
                  <VehicleNumberInput />
                </tr>
                <tr>
                  <LabelTd>
                    <Label htmlFor="계약자명">{t("Contractor Name")}</Label>
                  </LabelTd>
                  <SearchTd>
                    <Input
                      placeholder={t("Enter details")}
                      value={contractor}
                      onChange={(e) => setContractor(e.target.value)}
                    ></Input>
                  </SearchTd>
                  <LabelTd>
                    <Label htmlFor="product_name">
                      {t("E-mobility Subs.Plan")}
                    </Label>
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
                    <SearchButton
                      number={number}
                      contractor={contractor}
                      selected={selected}
                    />
                    <ResetButton
                      setNumber={setNumber}
                      setContractor={setContractor}
                      setSelected={setSelected}
                    />
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
export default Vehicle;
