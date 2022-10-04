import { t } from "i18next";
import { useRecoilValue } from "recoil";
import { vehicleModelRowState, vehicleRowState } from "../../atom";
import { ColorButton, FormButton } from "./searchTableStyle";
import * as xlsx from "xlsx";
import moment from "moment";
import { useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "../../css/toastStyle.css";
import "react-toastify/dist/ReactToastify.css";
import { DeletePop, DownloadPop } from "./PopUp";

export const VehicleDeleteButton = () => {
  const row = useRecoilValue(vehicleRowState);
  const id = row.map((value) => value.Number);
  const handleDelete = async (e) => {
    e.preventDefault();
    if (id.length === 0) {
      toast(<DeletePop />);
    } else {
      try {
        await axios.delete(`api주소/${id}`);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
      <FormButton onClick={handleDelete}>{t("Delete")}</FormButton>
    </>
  );
};

export const DeleteButton = () => {
  const row = useRecoilValue(vehicleModelRowState);
  const id = row.map((value) => value.Number);
  const handleDelete = async (e) => {
    e.preventDefault();
    if (id.length === 0) {
      toast(<DeletePop />);
    } else {
      try {
        await axios.delete(`api주소/${id}`);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
      <FormButton onClick={handleDelete}>{t("Delete")}</FormButton>
    </>
  );
};

export const DownloadButton = () => {
  const excelData = useRecoilValue(vehicleRowState);
  const now = moment().format("YYYYMMDDhhmmss");
  const excelDownload = (e, excelData) => {
    e.preventDefault();
    if (excelData.length === 0) {
      toast(<DownloadPop />);
    } else {
      const ws = xlsx.utils.json_to_sheet(excelData);
      const wb = xlsx.utils.book_new();
      ws["!cols"] = [
        { wpx: 100 },
        { wpx: 100 },
        { wpx: 100 },
        { wpx: 100 },
        { wpx: 100 },
        { wpx: 100 },
        { wpx: 100 },
      ];

      xlsx.utils.book_append_sheet(wb, ws, "Sheet1");
      xlsx.writeFile(wb, `Filemonitoring_vehiclelist_${now}.xlsx`);
    }
  };
  return (
    <>
      <FormButton onClick={(e) => excelDownload(e, excelData)}>
        {t("Download")}
      </FormButton>
    </>
  );
};

export const UploadButton = () => {
  const fileInput = useRef();
  const uploadButton = (e) => {
    e.preventDefault();
    fileInput.current.click();
  };
  const handleChange = async (e) => {
    const uploadFile = e.target.files[0];
    const formData = new FormData();
    formData.append("file", uploadFile);
    try {
      await axios.post("api주소", formData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <FormButton onClick={uploadButton}>{t("Upload All")} </FormButton>
      <input
        type="file"
        ref={fileInput}
        onChange={handleChange}
        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel,.csv"
        style={{ display: "none" }}
      />
    </>
  );
};

export const ResetButton = ({ onReset }) => {
  return (
    <FormButton onClick={onReset} style={{ marginBottom: "0px" }}>
      {t("Clear")}
    </FormButton>
  );
};

export const SearchButton = ({ onSearch }) => {
  return (
    <ColorButton
      type="submit"
      onClick={onSearch}
      style={{ marginBottom: "0px" }}
    >
      {t("Search")}
    </ColorButton>
  );
};
