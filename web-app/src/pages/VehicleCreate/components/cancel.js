import { useRecoilState } from "recoil";
import {
  batterySerialState,
  vinState,
  batteryState,
  brandState,
  colorState,
  deviceSerialState,
  fuelState,
  gradeState,
  imageState,
  licenseNumberState,
  modelYearState,
  outPutState,
  transmissionState,
  vehicleNameState,
  contractorDataState,
} from "../../../atom";
import { FormButton } from "../../../components/search/searchTableStyle";

export const Cancel = () => {
  const [, setLicenseNumber] = useRecoilState(licenseNumberState);
  const [, setVinNo] = useRecoilState(vinState);
  const [, setBatterySerial] = useRecoilState(batterySerialState);
  const [, setDivceSerial] = useRecoilState(deviceSerialState);
  const [, setName] = useRecoilState(vehicleNameState);
  const [, setYear] = useRecoilState(modelYearState);
  const [, setBattery] = useRecoilState(batteryState);
  const [, setOutput] = useRecoilState(outPutState);
  const [, setImage] = useRecoilState(imageState);
  const [, setFuel] = useRecoilState(fuelState);
  const [, setTransmission] = useRecoilState(transmissionState);
  const [, setGrade] = useRecoilState(gradeState);
  const [, setColor] = useRecoilState(colorState);
  const [, setBrand] = useRecoilState(brandState);
  const [, setContractorData] = useRecoilState(contractorDataState);

  const cancelChange = () => {
    setLicenseNumber("");
    setVinNo("");
    setBatterySerial("");
    setDivceSerial("");
    setName("");
    setYear("");
    setBattery("");
    setOutput("");
    setImage("");
    setFuel("");
    setTransmission("");
    setGrade("");
    setColor("");
    setBrand("");
    setContractorData([]);
  };
  return <FormButton onClick={cancelChange}>취소</FormButton>;
};
