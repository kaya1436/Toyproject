import { Link } from "react-router-dom";
import {
  ColorButton,
  ContentBox,
  ContentTitle,
} from "../../components/search/searchTableStyle";
import { CreatePopUp } from "./components/PopUp";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "../../css/gridTableAlpine.css";
import { VehicleInfo } from "./VehicleInfo";
import { Cancel } from "./components/cancel";
import { Contractor } from "./ContractorInfo";
import { EMobilitySubInfo } from "./EMobilitySubInfo";

function VehicleCreate() {
  const registerDone = (e) => {
    e.preventDefault();
  };

  return (
    <ContentBox>
      <form autoComplete="off">
        <ContentTitle>차량정보</ContentTitle>
        <ColorButton onClick={registerDone}>등록완료</ColorButton>
        <Link to="/vehicle">
          <Cancel />
        </Link>
        <VehicleInfo />
        <Contractor />
        <EMobilitySubInfo />
      </form>
      <CreatePopUp />
    </ContentBox>
  );
}
export default VehicleCreate;
