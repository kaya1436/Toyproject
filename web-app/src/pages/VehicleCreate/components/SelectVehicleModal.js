import { useState } from "react";
import {
  ColorButton,
  FormButton,
  Input,
} from "../../../components/search/searchTableStyle";
import Modal from "react-modal";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  batteryState,
  brandState,
  fuelState,
  gradeState,
  imageState,
  modelSelectState,
  outPutState,
  transmissionState,
  vehicleNameState,
} from "../../../atom";
import { VehicleSelectTable } from "./VehicleSelectTable";

export const SelectVehicleModal = () => {
  const customStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      zIndex: 999,
    },
    content: {
      inset: "50% auto auto 50%",
      transform: "translate(-50%, -50%)",
      height: "586px",
      minWidth: "662px",
    },
  };
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = (e) => {
    e.preventDefault();
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const selectRow = useRecoilValue(modelSelectState);
  const [name, setName] = useRecoilState(vehicleNameState);
  const [, setBattery] = useRecoilState(batteryState);
  const [, setOutput] = useRecoilState(outPutState);
  const [, setImage] = useRecoilState(imageState);
  const [, setFuel] = useRecoilState(fuelState);
  const [, setTransmission] = useRecoilState(transmissionState);
  const [, setGrade] = useRecoilState(gradeState);
  const [, setBrand] = useRecoilState(brandState);
  const selectPush = () => {
    console.log(selectRow);
    setName(selectRow.name);
    setBattery(selectRow.battery);
    setOutput(selectRow.output);
    setImage(selectRow.image);
    setFuel(selectRow.fuel);
    setTransmission(selectRow.transmission);
    setGrade(selectRow.grade);
    setBrand(selectRow.brand);
    closeModal();
  };

  return (
    <>
      <Input placeholder="차량모델" value={name} disabled></Input>
      <ColorButton
        style={{ minWidth: "100px", marginBottom: "0px" }}
        onClick={openModal}
      >
        차량선택
      </ColorButton>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
      >
        <h1
          style={{
            fontSize: "20px",
            marginBottom: "24px",
            fontWeight: "600",
            color: "rgb(0,0,0)",
          }}
        >
          차량모델선택
        </h1>
        <VehicleSelectTable />
        <div style={{ marginTop: "24px" }}>
          <ColorButton
            onClick={selectPush}
            style={{
              height: "40px",
              width: "100px",
              marginRight: "8px",
              fontSize: "15px",
            }}
          >
            완료
          </ColorButton>
          <FormButton
            onClick={closeModal}
            style={{
              height: "40px",
              width: "100px",
              marginRight: "8px",
              fontSize: "15px",
            }}
          >
            취소
          </FormButton>
        </div>
      </Modal>
    </>
  );
};
