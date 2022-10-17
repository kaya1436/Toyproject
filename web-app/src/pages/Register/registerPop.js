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

export const WriteNamePop = () => {
  return <>{"이름을 입력해주세요."}</>;
};

export const WriteBirthPop = () => {
  return <>{"생년월일을 입력해주세요."}</>;
};

export const BirthLengthPop = () => {
  return <>{"생년월일이 맞지 않습니다."}</>;
};
