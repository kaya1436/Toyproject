import { Link } from "react-router-dom";
import {
  ColorButton,
  ContentBox,
  ContentTitle,
  SearchBox,
  SearchTable,
  SearchTd,
} from "../../components/search/searchTableStyle";
import { TableDivision } from "../../components/search/tableForm";
import GridTable from "../../components/table/GridTable";
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

  const vehicleModelColumns = [
    {
      checkboxSelection: true,
      headerCheckboxSelection: true,
      width: 48,
      lockPosition: true,
    },
    { headerName: "번호", field: "id", lockPosition: true },
    { headerName: "모델명", field: "name", lockPosition: true },
    { headerName: "배터리용량 (kWh)", field: "postId", lockPosition: true },
    { headerName: "최고출력 (kWh)", field: "email", lockPosition: true },
    { headerName: "차량등급", field: "body", lockPosition: true },
    { headerName: "제조사", field: "name", lockPosition: true },
  ];

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
        <form autoComplete="off">
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
        </form>
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
