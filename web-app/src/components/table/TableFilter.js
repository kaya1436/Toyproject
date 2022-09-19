import { t } from "i18next";
import Select from "react-select";
import { selectStyles } from "../TableStyle";

export const PageFilter = ({ setPageSize }) => {
  const pageOptions = [
    { value: "10", label: "10" },
    { value: "20", label: "20" },
    { value: "30", label: "30" },
    { value: "50", label: "50" },
    { value: "100", label: "100" },
  ];
  return (
    <Select
      options={pageOptions}
      defaultValue={{ value: "100", label: "100" }}
      onChange={(e) => setPageSize(Number(e.value))}
      styles={selectStyles}
      placeholder="100"
      components={{ IndicatorSeparator: null }}
    />
  );
};

export const GlobalFilter = ({ setFilter }) => {
  const options = [
    { value: "", label: t("All") },
    { value: "Europe", label: t("E-mobility unregistered vehicle") },
    { value: "Asia", label: t("E-mobility registered vehicle") },
    { value: "Americas", label: t("Service withdrawal vehicle") },
  ];

  return (
    <Select
      options={options}
      onChange={(e) => setFilter("region", e.value)}
      styles={selectStyles}
      placeholder={t("All")}
      components={{ IndicatorSeparator: null }}
    />
  );
};
