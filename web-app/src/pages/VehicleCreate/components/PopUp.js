import { ToastContainer, Flip } from "react-toastify";

export const CreatePopUp = () => {
  return (
    <ToastContainer
      className="toast"
      position="top-center"
      autoClose={1000}
      hideProgressBar={true}
      closeButton={false}
      style={{ width: "280px" }}
      transition={Flip}
    />
  );
};

export const LicenseSuccessPop = () => {
  return <>{"등록 가능한 차량 번호입니다."}</>;
};

export const LicenseNotInputErrorPop = () => {
  return <>{"차량번호를 입력해주세요."}</>;
};

export const LicenseCheckErrorPop = () => {
  return <>{"이미 존재하는 차량번호입니다."}</>;
};

export const VinSuccessPop = () => {
  return <>{"등록 가능한 차량입니다."}</>;
};

export const VinNotInputErrorPop = () => {
  return <>{"VIN을 입력해주세요."}</>;
};

export const VinCheckErrorPop = () => {
  return <>{"이미 등록된 차량입니다."}</>;
};
