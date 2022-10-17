import { CreateLabelTd, ImgBox } from "../../components/createTableStyles";
import {
  Input,
  Label,
  SearchTd,
} from "../../components/search/searchTableStyle";
import {
  TableDivision,
  TableLabel,
  VehicleInfoTable,
} from "../../components/search/tableForm";
import {
  LicenseNumberDoubleCheck,
  VinNoDoubleCheck,
} from "./components/VehicleCreateInfo/DoubleCheck";
import blankImg from "../../assets/img/photo-f.svg";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  batterySerialState,
  batteryState,
  brandState,
  colorState,
  deviceSerialState,
  fuelState,
  gradeState,
  imageState,
  modelYearState,
  outPutState,
  transmissionState,
} from "../../atom";
import { SelectVehicleModal } from "./components/VehicleCreateInfo/SelectVehicleModal";

export const VehicleInfo = () => {
  const [batterySerial, setBatterySerial] = useRecoilState(batterySerialState);
  const [deviceSerial, setDivceSerial] = useRecoilState(deviceSerialState);
  const [year, setYear] = useRecoilState(modelYearState);
  const battery = useRecoilValue(batteryState);
  const output = useRecoilValue(outPutState);
  const image = useRecoilValue(imageState);
  const fuel = useRecoilValue(fuelState);
  const transmission = useRecoilValue(transmissionState);
  const grade = useRecoilValue(gradeState);
  const [color, setColor] = useRecoilState(colorState);
  const brand = useRecoilValue(brandState);

  return (
    <VehicleInfoTable
      title="차량정보"
      table={
        <tbody>
          <tr>
            <CreateLabelTd>
              <Label>차량번호</Label>
            </CreateLabelTd>
            <SearchTd>
              <div style={{ display: "flex" }}>
                <LicenseNumberDoubleCheck />
              </div>
            </SearchTd>
            <TableDivision num="9" />
            <CreateLabelTd>
              <Label>차량이미지</Label>
            </CreateLabelTd>
          </tr>
          <tr>
            <CreateLabelTd>
              <Label>VIN No.*</Label>
            </CreateLabelTd>
            <SearchTd>
              <div style={{ display: "flex" }}>
                <VinNoDoubleCheck />
              </div>
            </SearchTd>
            <SearchTd rowSpan="4" colSpan="2">
              <ImgBox>
                {image.length === 0 ? (
                  <img src={blankImg} style={{ width: "50px" }} />
                ) : (
                  <img
                    src={image}
                    style={{
                      width: "100%",
                      height: "200px",
                    }}
                  />
                )}
              </ImgBox>
            </SearchTd>
          </tr>
          <tr>
            <CreateLabelTd>
              <Label>배터리고유번호</Label>
            </CreateLabelTd>
            <SearchTd>
              <Input
                placeholder="배터리고유번호"
                value={batterySerial}
                onChange={(e) => setBatterySerial(e.target.value)}
                maxLength="20"
              ></Input>
            </SearchTd>
          </tr>
          <tr>
            <CreateLabelTd>
              <Label>단말기S/N</Label>
            </CreateLabelTd>
            <SearchTd>
              <Input
                placeholder="단말기S/N를 입력해주세요"
                value={deviceSerial}
                onChange={(e) => setDivceSerial(e.target.value)}
                maxLength="20"
              ></Input>
            </SearchTd>
          </tr>
          <tr>
            <CreateLabelTd>
              <Label>차량모델*</Label>
            </CreateLabelTd>
            <SearchTd>
              <div style={{ display: "flex" }}>
                <SelectVehicleModal />
              </div>
            </SearchTd>
          </tr>
          <tr>
            <CreateLabelTd>
              <Label>연식</Label>
            </CreateLabelTd>
            <SearchTd>
              <Input
                placeholder="연식을 입력하세요"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                maxLength="4"
              ></Input>
            </SearchTd>
            <TableLabel
              label="연료타입"
              placeholder="연료타입"
              value={fuel}
              readonly
              disabled
            />
          </tr>
          <tr>
            <TableLabel
              label="전체 배터리용량"
              placeholder="전체 배터리용량"
              value={battery}
              readonly
              disabled
            />
            <TableLabel
              label="변속기"
              placeholder="변속기"
              value={transmission}
              readonly
              disabled
            />
          </tr>
          <tr>
            <TableLabel
              label="최고출력"
              placeholder="최고출력"
              value={output}
              readonly
              disabled
            />
            <TableLabel
              label="차량등급"
              placeholder="차량등급"
              value={grade}
              readonly
              disabled
            />
          </tr>
          <tr>
            <CreateLabelTd>
              <Label>외색*</Label>
            </CreateLabelTd>
            <SearchTd>
              <Input
                placeholder="외색을 입력하세요"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
            </SearchTd>
            <TableLabel
              label="제조사"
              placeholder="제조사"
              value={brand}
              readonly
              disabled
            />
          </tr>
        </tbody>
      }
    />
  );
};
