import { useState } from "react";
import { useRecoilValue } from "recoil";
import { contractorSelectState } from "../../atom";
import { CreateLabelTd } from "../../components/createTableStyles";
import {
  ColorButton,
  Input,
  Label,
  SearchTd,
} from "../../components/search/searchTableStyle";
import {
  TableDivision,
  TableLabel,
  VehicleInfoTable,
} from "../../components/search/tableForm";
import Modal from "react-modal";
import { ContractorSelectTable } from "./components/VehicleCreateInfo/ContractorSelectTable";

export const Contractor = () => {
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
  const contractorData = useRecoilValue(contractorSelectState);

  return (
    <>
      <VehicleInfoTable
        title="계약자정보"
        table={
          <tbody>
            <tr>
              <CreateLabelTd>
                <Label>계약자ID</Label>
              </CreateLabelTd>
              <SearchTd>
                <div style={{ display: "flex" }}>
                  <Input
                    value={contractorData.id}
                    placeholder="계약자ID"
                    readOnly
                    onClick={openModal}
                  />
                  <ColorButton
                    style={{ minWidth: "100px", marginBottom: "0px" }}
                    onClick={openModal}
                  >
                    계약자선택
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
                      계약자선택
                    </h1>
                    <ContractorSelectTable closeModal={closeModal} />
                    <div style={{ marginTop: "24px" }}>
                      <ColorButton
                        onClick={closeModal}
                        style={{
                          height: "40px",
                          width: "100px",
                          marginRight: "8px",
                          fontSize: "15px",
                        }}
                      >
                        닫기
                      </ColorButton>
                    </div>
                  </Modal>
                </div>
              </SearchTd>
              <TableDivision num="3" />
              <TableLabel
                label="계약자명"
                placeholder="계약자명"
                readonly
                disabled
                value={contractorData.name}
              />
            </tr>
            <tr>
              <TableLabel
                label="휴대폰번호"
                placeholder="휴대폰번호"
                readonly
                disabled
                value={contractorData.phone}
              />
              <TableLabel
                label="개인/법인"
                placeholder="개인/법인"
                readonly
                disabled
                value={contractorData.individual}
              />
            </tr>
            <tr>
              <TableLabel
                label="생년월일"
                placeholder="생년월일"
                readonly
                disabled
                value={contractorData.birth}
              />
            </tr>
          </tbody>
        }
      />
    </>
  );
};
