import { t } from "i18next";
import { useRecoilState } from "recoil";

import { vehicleNumberState, vinState } from "../../atom";
import { Input, Label, LabelTd, SearchTd } from "./searchTableStyle";

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
