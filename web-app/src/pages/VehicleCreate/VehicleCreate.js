import { Link } from "react-router-dom";
import {
  ColorButton,
  ContentBox,
  ContentTitle,
  FormButton,
} from "../../components/search/searchTableStyle";
import { CreatePopUp } from "./components/PopUp";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "../../css/gridTableAlpine.css";
import { VehicleInfo } from "./VehicleInfo";
import { Contractor } from "./ContractorInfo";
import { EMobilitySubInfo } from "./EMobilitySubInfo";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { licenseDisabledState } from "../../atom";

function VehicleCreate() {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    clearErrors,
    formState: { errors },
  } = useForm();
  const [, setLicenseDisabled] = useRecoilState(licenseDisabledState);
  const registerDone = (data) => {
    console.log(data);
  };
  const resetButton = () => {
    reset();
    clearErrors();
    setLicenseDisabled(false);
  };

  return (
    <ContentBox>
      <form autoComplete="off">
        <ContentTitle>차량정보</ContentTitle>
        <ColorButton onClick={handleSubmit(registerDone)}>등록완료</ColorButton>
        <Link to="/vehicle">
          <FormButton onClick={resetButton}>취소</FormButton>
        </Link>
        <VehicleInfo
          register={register}
          errors={errors}
          getValues={getValues}
        />
        <Contractor />
        <EMobilitySubInfo />
      </form>
      <CreatePopUp />
    </ContentBox>
  );
}
export default VehicleCreate;
