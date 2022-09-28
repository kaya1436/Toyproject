import { useState } from "react";
import { Link } from "react-router-dom";
import { MultiSelect } from "../components/MultiSelect";
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
import { t } from "i18next";
import GridTable from "../components/table/GridTable";

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

  const onSearch = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(defaultValues));
  };
  return (
    <ContentBox>
      <div>
        <Form autoComplete="off">
          <ContentTitle>{t("Vehicle Info.")}</ContentTitle>
          <Link to="/vehicle/create">
            <ColorButton>{t("Register")}</ColorButton>
          </Link>
          <FormButton>{t("Upload All")}</FormButton>
          <FormButton>{t("Download")}</FormButton>
          <FormButton>{t("Delete")}</FormButton>
          <FormButton>{t("Format Download")}</FormButton>
          <SearchBox>
            <SearchTable>
              <tbody>
                <tr>
                  <LabelTd>
                    <Label htmlFor="vin">{t("VIN No.")}</Label>
                  </LabelTd>
                  <SearchTd>
                    <Input
                      placeholder={t("Enter details")}
                      value={vin}
                      onChange={(e) => setVin(e.target.value)}
                    ></Input>
                  </SearchTd>
                  <TableDivLeft rowSpan="2" />
                  <TableDivRight rowSpan="2" />
                  <LabelTd>
                    <Label htmlFor="license_plate_number">
                      {t("Vehicle No.")}
                    </Label>
                  </LabelTd>
                  <SearchTd>
                    <Input
                      placeholder={t("Enter details")}
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                    ></Input>
                  </SearchTd>
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
                    <ColorButton
                      type="submit"
                      onClick={onSearch}
                      style={{ marginBottom: "0px" }}
                    >
                      {t("Search")}
                    </ColorButton>
                    <FormButton
                      onClick={onReset}
                      style={{ marginBottom: "0px" }}
                    >
                      {t("Clear")}
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
export default Vehicle;
