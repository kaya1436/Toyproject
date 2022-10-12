import { Link } from "react-router-dom";
import { CreateLabelTd } from "../../components/createTableStyles";
import {
  ColorButton,
  ContentBox,
  ContentTitle,
  FormButton,
  Input,
  Label,
  SearchTd,
} from "../../components/search/searchTableStyle";
import {
  TableDivision,
  TableLabel,
  VehicleInfoTable,
} from "../../components/search/tableForm";
import { CreatePopUp } from "./components/PopUp";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "../../css/gridTableAlpine.css";
import { VehicleInfo } from "./components/VehicleInfo";
import { useRecoilState } from "recoil";
import {
  batteryState,
  brandState,
  fuelState,
  gradeState,
  imageState,
  outPutState,
  transmissionState,
  vehicleNameState,
} from "../../atom";

function VehicleCreate() {
  const [, setName] = useRecoilState(vehicleNameState);
  const [, setBattery] = useRecoilState(batteryState);
  const [, setOutput] = useRecoilState(outPutState);
  const [, setImage] = useRecoilState(imageState);
  const [, setFuel] = useRecoilState(fuelState);
  const [, setTransmission] = useRecoilState(transmissionState);
  const [, setGrade] = useRecoilState(gradeState);
  const [, setBrand] = useRecoilState(brandState);
  const cancelChange = () => {
    setName("");
    setBattery("");
    setOutput("");
    setImage("");
    setFuel("");
    setTransmission("");
    setGrade("");
    setBrand("");
  };

  const registerDone = (e) => {
    e.preventDefault();
  };
  return (
    <ContentBox>
      <form autoComplete="off">
        <ContentTitle>차량정보</ContentTitle>
        <ColorButton onClick={registerDone}>등록완료</ColorButton>
        <Link to="/vehicle">
          <FormButton onClick={cancelChange}>취소</FormButton>
        </Link>
        <VehicleInfo />
        <VehicleInfoTable
          title="계약자정보"
          table={
            <tbody>
              <tr>
                <CreateLabelTd>
                  <Label>계약자ID</Label>
                </CreateLabelTd>
                <SearchTd style={{ display: "flex" }}>
                  <Input placeholder="차량번호"></Input>
                  <ColorButton
                    style={{ minWidth: "100px", marginBottom: "0px" }}
                  >
                    계약자선택
                  </ColorButton>
                </SearchTd>
                <TableDivision num="3" />
                <TableLabel
                  label="계약자명"
                  placeholder="계약자명"
                  readonly
                  disabled
                />
              </tr>
              <tr>
                <TableLabel
                  label="휴대폰번호"
                  placeholder="휴대폰번호"
                  readonly
                  disabled
                />
                <TableLabel
                  label="개인/법인"
                  placeholder="개인/법인"
                  readonly
                  disabled
                />
              </tr>
              <tr>
                <TableLabel
                  label="생년월일"
                  placeholder="생년월일"
                  readonly
                  disabled
                />
              </tr>
            </tbody>
          }
        />
        <VehicleInfoTable
          title="E-mobility 구독정보"
          table={
            <tbody>
              <tr>
                <TableLabel
                  label="E-mobility 요금제"
                  placeholder="요금제를 선택하세요"
                  readonly
                  disabled
                />
                <TableDivision num="3" />
                <TableLabel
                  label="월 납입금액(S$)"
                  placeholder="월 납입금액(S$)"
                  readonly
                  disabled
                />
              </tr>
              <tr>
                <TableLabel
                  label="충전제공량(kWh)"
                  placeholder="충전제공량(kWh)"
                  readonly
                  disabled
                />
                <TableLabel
                  label="찾아가는 충전 서비스 횟수"
                  placeholder="찾아가는 충전 서비스 횟수"
                  readonly
                  disabled
                />
              </tr>
              <tr>
                <TableLabel
                  label="배터리 정기점검 서비스 횟수"
                  placeholder="배터리 정기점검 서비스 횟수"
                  readonly
                  disabled
                />
                <TableLabel label="기간지정" placeholder="기간지정" />
              </tr>
            </tbody>
          }
        />
      </form>
      <CreatePopUp />
    </ContentBox>
  );
}
export default VehicleCreate;
