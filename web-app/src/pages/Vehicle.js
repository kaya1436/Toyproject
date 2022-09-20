import { useEffect, useState } from "react";
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
import axios from "axios";
import { vehicleListColumns } from "../components/table/columns";
import { t } from "i18next";

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
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await axios.get("https://restcountries.com/v2/all");
    setData(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ContentBox>
      <div>
        <Form onSubmit={onSubmit} autoComplete="off">
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
                    <ColorButton type="submit" style={{ marginBottom: "0px" }}>
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
        <BasicTable data={data} columns={vehicleListColumns} />
      </div>
    </ContentBox>
  );
}
export default Vehicle;
