import { t } from "i18next";
import { useRecoilState } from "recoil";
import {
  brandState,
  contractorState,
  multiSelectState,
  vehicleNameState,
  vehicleNumberState,
  vinState,
} from "../../atom";
import { MultiSelect } from "./MultiSelect";
import { Input, Label, LabelTd, SearchTd } from "./searchTableStyle";

//vehicle page
export const VinInput = () => {
  const [vin, setVin] = useRecoilState(vinState);
  return (
    <>
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
    </>
  );
};

export const VehicleNumberInput = () => {
  const [vehicleNumber, setVehicleNumber] = useRecoilState(vehicleNumberState);
  return (
    <>
      <LabelTd>
        <Label htmlFor="license_plate_number">{t("Vehicle No.")}</Label>
      </LabelTd>
      <SearchTd>
        <Input
          placeholder={t("Enter details")}
          value={vehicleNumber}
          onChange={(e) => setVehicleNumber(e.target.value)}
        ></Input>
      </SearchTd>
    </>
  );
};

export const ContractorInput = () => {
  const [contractor, setContractor] = useRecoilState(contractorState);
  return (
    <>
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
    </>
  );
};

export const MultiInput = () => {
  const [multiSelect, setMultiSelect] = useRecoilState(multiSelectState);
  const options = [
    { value: "test1", label: "test1" },
    { value: "test2", label: "test2" },
    { value: "test3", label: "test3" },
    { value: "test4", label: "test4" },
  ];
  return (
    <>
      <LabelTd>
        <Label htmlFor="product_name">{t("E-mobility Subs.Plan")}</Label>
      </LabelTd>
      <SearchTd>
        <MultiSelect
          options={options}
          value={multiSelect}
          onChange={setMultiSelect}
        />
      </SearchTd>
    </>
  );
};

//vehicle model page
export const VehicleNameInput = () => {
  const [vehicleName, setVehicleName] = useRecoilState(vehicleNameState);
  return (
    <>
      <LabelTd>
        <Label htmlFor="vehicle_name">모델명</Label>
      </LabelTd>
      <SearchTd>
        <Input
          placeholder="내용을 입력하세요."
          value={vehicleName}
          onChange={(e) => setVehicleName(e.target.value)}
        ></Input>
      </SearchTd>
    </>
  );
};

export const BrandInput = () => {
  const [brand, setBrand] = useRecoilState(brandState);
  const options = [
    { label: "현대자동차", value: "hyundai" },
    { label: "기아자동차", value: "kia" },
  ];
  return (
    <>
      <LabelTd>
        <Label htmlFor="brand">제조사</Label>
      </LabelTd>
      <SearchTd>
        <MultiSelect options={options} value={brand} onChange={setBrand} />
      </SearchTd>
    </>
  );
};
