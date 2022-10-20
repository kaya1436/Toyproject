import {
  CreateLabelTd,
  ErrorMessage,
  ImgBox,
} from "../../components/createTableStyles";
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
import { useRecoilValue } from "recoil";
import {
  batteryState,
  brandState,
  gradeState,
  imageState,
  outPutState,
  transmissionState,
} from "../../atom";
import { SelectVehicleModal } from "./components/VehicleCreateInfo/SelectVehicleModal";

export const VehicleInfo = ({ register, errors, getValues }) => {
  const battery = useRecoilValue(batteryState);
  const output = useRecoilValue(outPutState);
  const image = useRecoilValue(imageState);
  const transmission = useRecoilValue(transmissionState);
  const grade = useRecoilValue(gradeState);
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
                <LicenseNumberDoubleCheck
                  register={register}
                  errors={errors}
                  getValues={getValues}
                />
              </div>
              {errors?.license_plate_number?.type === "required" && (
                <ErrorMessage>차량 번호 중복 확인을 해주세요.</ErrorMessage>
              )}
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
                {...register("battery_serial_number")}
                placeholder="배터리고유번호"
                maxLength="20"
              />
            </SearchTd>
          </tr>
          <tr>
            <CreateLabelTd>
              <Label>단말기S/N</Label>
            </CreateLabelTd>
            <SearchTd>
              <Input
                {...register("device_serial_number")}
                placeholder="단말기S/N를 입력해주세요"
                maxLength="20"
              />
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
                {...register("model_year")}
                placeholder="연식을 입력하세요"
                maxLength="4"
              />
            </SearchTd>
            <CreateLabelTd>
              <Label>연료타입</Label>
            </CreateLabelTd>
            <SearchTd>
              <Input
                {...register("fuel_type")}
                placeholder="연료타입"
                maxLength="4"
                disabled
                readOnly
              />
            </SearchTd>
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
              <Input {...register("color")} placeholder="외색을 입력하세요" />
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
