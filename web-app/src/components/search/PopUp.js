import { ToastContainer, Flip } from "react-toastify";

export const PopUp = () => {
  return (
    <ToastContainer
      className="toast"
      position="top-center"
      autoClose={1500}
      hideProgressBar={true}
      closeButton={false}
      style={{ width: "250px" }}
      transition={Flip}
    />
  );
};

export const DeletePop = () => {
  return <>{"삭제할 항목을 선택하세요."}</>;
};

export const DownloadPop = () => {
  return <>{"내려받을 항목을 선택하세요."}</>;
};
