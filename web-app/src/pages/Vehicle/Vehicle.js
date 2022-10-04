import { Link } from "react-router-dom";
import {
  ColorButton,
  ContentBox,
  ContentTitle,
  Form,
  FormButton,
  SearchBox,
  SearchTd,
  SearchTable,
  TableDivLeft,
  TableDivRight,
} from "../../components/search/searchTableStyle";
import { t } from "i18next";
import GridTable from "../../components/table/GridTable";
import {
  DeleteButton,
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
import { vehicleColumns } from "./vehicleColumns";
import {
  contractorState,
  multiSelectState,
  vehicleDataState,
  vehicleNumberState,
  vinState,
} from "../../atom";
import { useRecoilState } from "recoil";

function Vehicle() {
  const [vin, setVin] = useRecoilState(vinState);
  const [vehicleNumber, setVehicleNumber] = useRecoilState(vehicleNumberState);
  const [contractor, setContractor] = useRecoilState(contractorState);
  const [multiSelect, setMultiSelect] = useRecoilState(multiSelectState);
  const [, setData] = useRecoilState(vehicleDataState);
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
        <Form autoComplete="off">
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
                  <TableDivLeft rowSpan="2" />
                  <TableDivRight rowSpan="2" />
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
        </Form>
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
