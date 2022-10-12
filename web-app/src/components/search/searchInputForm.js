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
import { Input, Label, SearchLabelTd, SearchTd } from "./searchTableStyle";

//vehicle page
export const VinInput = () => {
  const [vin, setVin] = useRecoilState(vinState);
  return (
    <>
      <SearchLabelTd>
        <Label htmlFor="vin">{t("VIN No.")}</Label>
      </SearchLabelTd>
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
      <SearchLabelTd>
        <Label htmlFor="license_plate_number">{t("Vehicle No.")}</Label>
      </SearchLabelTd>
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
      <SearchLabelTd>
        <Label htmlFor="계약자명">{t("Contractor Name")}</Label>
      </SearchLabelTd>
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
      <SearchLabelTd>
        <Label htmlFor="product_name">{t("E-mobility Subs.Plan")}</Label>
      </SearchLabelTd>
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
      <SearchLabelTd>
        <Label htmlFor="vehicle_name">모델명</Label>
      </SearchLabelTd>
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
      <SearchLabelTd>
        <Label htmlFor="brand">제조사</Label>
      </SearchLabelTd>
      <SearchTd>
        <MultiSelect options={options} value={brand} onChange={setBrand} />
      </SearchTd>
    </>
  );
};
