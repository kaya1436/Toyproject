import { Link } from "react-router-dom";
import {
  ColorButton,
  ContentBox,
  ContentTitle,
  FormButton,
  SearchBox,
  SearchTd,
  SearchTable,
} from "../../components/search/searchTableStyle";
import { t } from "i18next";
import GridTable from "../../components/table/GridTable";
import {
  DownloadButton,
  ResetButton,
  SearchButton,
  UploadButton,
  VehicleDeleteButton,
} from "../../components/search/buttons";
import { PopUp } from "../../components/search/PopUp";
import {
  ContractorInput,
  MultiInput,
  VehicleNumberInput,
  VinInput,
} from "../../components/search/searchInputForm";
import {
  contractorNameState,
  multiSelectState,
  vehicleDataState,
  vehicleNumberState,
  vinState,
} from "../../atom";
import { useRecoilState } from "recoil";
import { TableDivision } from "../../components/search/tableForm";

function Vehicle() {
  const [vin, setVin] = useRecoilState(vinState);
  const [vehicleNumber, setVehicleNumber] = useRecoilState(vehicleNumberState);
  const [contractor, setContractor] = useRecoilState(contractorNameState);
  const [multiSelect, setMultiSelect] = useRecoilState(multiSelectState);
  const [, setData] = useRecoilState(vehicleDataState);

  const vehicleColumns = [
    {
      checkboxSelection: true,
      headerCheckboxSelection: true,
      width: 48,
      lockPosition: true,
    },
    { headerName: t("Number"), field: "name", lockPosition: true },
    { headerName: t("VIN No."), field: "nativeName", lockPosition: true },
    {
      headerName: t("Vehicle No."),
      field: "capital",
      cellRenderer: ({ value }) => {
        return value ? value : "-";
      },
      lockPosition: true,
    },
    {
      headerName: t("E-mobility Subs.Plan"),
      field: "flag",
      cellRenderer: ({ value }) => {
        return <img src={value} width="50" />;
      },
      lockPosition: true,
    },
    { headerName: t("Subscription Date"), field: "region", lockPosition: true },
    { headerName: t("End Date"), field: "population", lockPosition: true },
    {
      headerName: t("Current location"),
      field: "numericCode",
      lockPosition: true,
    },
  ];

  const defaultValues = {
    vin: vin,
    license_plate_number: vehicleNumber,
    계약자명: contractor,
    brand: multiSelect,
  };

  const onReset = (e) => {
    e.preventDefault();
    setVin("");
    setVehicleNumber("");
    setContractor("");
    setMultiSelect([]);
  };

  const onSearch = (e) => {
    e.preventDefault();
    console.log(defaultValues);
  };

  return (
    <ContentBox>
      <div>
        <form autoComplete="off">
          <ContentTitle>{t("Vehicle Info.")}</ContentTitle>
          <Link to="/vehicle/create">
            <ColorButton>{t("Register")}</ColorButton>
          </Link>
          <UploadButton />
          <DownloadButton />
          <VehicleDeleteButton />
          <FormButton>{t("Format Download")}</FormButton>
          <PopUp />
          <SearchBox>
            <SearchTable>
              <tbody>
                <tr>
                  <VinInput />
                  <TableDivision num="2" />
                  <VehicleNumberInput />
                </tr>
                <tr>
                  <ContractorInput />
                  <MultiInput />
                </tr>
                <tr>
                  <SearchTd colSpan="6">
                    <SearchButton onSearch={onSearch} />
                    <ResetButton onReset={onReset} />
                  </SearchTd>
                </tr>
              </tbody>
            </SearchTable>
          </SearchBox>
        </form>
      </div>
      <div>
        <GridTable
          textFilter={true}
          getApi={"https://restcountries.com/v2/all"}
          column={vehicleColumns}
          setData={setData}
        />
      </div>
    </ContentBox>
  );
}
export default Vehicle;
