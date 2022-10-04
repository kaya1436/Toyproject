import { Link } from "react-router-dom";
import {
  ColorButton,
  ContentBox,
  ContentTitle,
  Form,
  SearchBox,
  SearchTable,
  SearchTd,
} from "../../components/search/searchTableStyle";
import { TableDivision } from "../../components/search/tableForm";
import GridTable from "../../components/table/GridTable";
import { vehicleModelColumns } from "./vehicleModelColumns";
import {
  DeleteButton,
  ResetButton,
  SearchButton,
} from "../../components/search/buttons";
import { PopUp } from "../../components/search/PopUp";
import { useRecoilState } from "recoil";

import {
  BrandInput,
  VehicleNameInput,
} from "../../components/search/searchInputForm";
import {
  brandState,
  vehicleModelDataState,
  vehicleNameState,
} from "../../atom";

function VehicleModel() {
  const [vehicleName, setVehicleName] = useRecoilState(vehicleNameState);
  const [brand, setBrand] = useRecoilState(brandState);
  const [, setData] = useRecoilState(vehicleModelDataState);
  const defaultValues = { vehicle_name: vehicleName, brand: brand };

  const onReset = (e) => {
    e.preventDefault();
    setVehicleName("");
    setBrand([]);
  };

  const onSearch = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(defaultValues));
  };

  return (
    <ContentBox>
      <div>
        <Form autoComplete="off">
          <ContentTitle>차량모델관리</ContentTitle>
          <Link to="/vehicleModel/create">
            <ColorButton>등록</ColorButton>
          </Link>
          <DeleteButton />
          <PopUp />
          <SearchBox>
            <SearchTable>
              <tbody>
                <tr>
                  <VehicleNameInput />
                  <TableDivision num="1" />
                  <BrandInput />
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
          textFilter={false}
          getApi={"https://jsonplaceholder.typicode.com/comments"}
          column={vehicleModelColumns}
          setData={setData}
        />
      </div>
    </ContentBox>
  );
}
export default VehicleModel;
