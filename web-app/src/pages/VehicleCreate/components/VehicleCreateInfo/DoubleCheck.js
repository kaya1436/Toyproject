import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { licenseDisabledState, vinState } from "../../../../atom";
import {
  ColorButton,
  Input,
} from "../../../../components/search/searchTableStyle";
import {
  LicenseCheckErrorPop,
  LicenseNotInputErrorPop,
  LicenseSuccessPop,
  VinCheckErrorPop,
  VinNotInputErrorPop,
  VinSuccessPop,
} from "../PopUp";

export const LicenseNumberDoubleCheck = ({ register, errors, getValues }) => {
  const licenseNumber = getValues("license_plate_number");
  const [disabled, setDisabled] = useRecoilState(licenseDisabledState);
  const licenseNumDoubleCheck = async (licenseNumber) => {
    let boolean_value;
    await axios
      .post("중복확인API", { license_plate_number: licenseNumber })
      .then((response) => {
        boolean_value = response.data;
      })
      .catch((error) => {
        console.log(error);
        boolean_value = false;
      });
    return boolean_value;
  };
  const doubleCheck = (e) => {
    e.preventDefault();
    licenseNumDoubleCheck(licenseNumber).then((response) => {
      if (licenseNumber === "") {
        toast.error(<LicenseNotInputErrorPop />);
      } else if (response === false) {
        toast.success(<LicenseSuccessPop />);
        setDisabled(true);
      } else {
        toast.error(<LicenseCheckErrorPop />);
      }
    });
  };

  return (
    <>
      <Input
        {...register("license_plate_number", { required: true })}
        placeholder="차량번호"
        maxLength="12"
        className={errors.license_plate_number ? "is-invalid" : ""}
      />
      <ColorButton
        style={{ minWidth: "100px", marginBottom: "0px" }}
        onClick={doubleCheck}
        disabled={disabled}
      >
        중복확인
      </ColorButton>
    </>
  );
};

export const VinNoDoubleCheck = () => {
  const [vinNo, setVinNo] = useRecoilState(vinState);
  const [disabled, setDisabled] = useState(false);

  const vinNumDoubleCheck = async (vinNo) => {
    let boolean_value;
    await axios
      .post("중복확인API", { license_plate_number: vinNo })
      .then((response) => {
        boolean_value = response.data;
      })
      .catch((error) => {
        console.log(error);
        boolean_value = true;
      });
    return boolean_value;
  };
  const doubleCheck = (e) => {
    e.preventDefault();
    vinNumDoubleCheck(vinNo).then((response) => {
      if (vinNo === "") {
        toast.error(<VinNotInputErrorPop />);
      } else if (response === false) {
        toast.success(<VinSuccessPop />);
        setDisabled(true);
      } else {
        toast.error(<VinCheckErrorPop />);
        setVinNo("");
      }
    });
  };
  const vinNumberInput = (e) => {
    setVinNo(e.target.value);
    setDisabled(false);
  };
  return (
    <>
      <Input
        placeholder="VIN No."
        value={vinNo}
        onChange={vinNumberInput}
        maxLength="17"
      ></Input>
      <ColorButton
        style={{ minWidth: "100px", marginBottom: "0px" }}
        onClick={doubleCheck}
        disabled={disabled}
      >
        중복확인
      </ColorButton>
    </>
  );
};
