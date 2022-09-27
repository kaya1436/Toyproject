import Select from "react-select";
import { Page } from "../components/table/tableStyle";
import { selectStyles } from "../components/TableStyle";

export const GridPageFilter = ({ gridApi }) => {
  const pageOptions = [
    { value: "10", label: "10" },
    { value: "20", label: "20" },
    { value: "30", label: "30" },
    { value: "50", label: "50" },
    { value: "100", label: "100" },
  ];
  const onPaginationChanged = (pageSize) => {
    gridApi.api.paginationSetPageSize(pageSize);
    gridApi.api.paginationGoToPage(0);
  };

  return (
    <Page>
      <Select
        options={pageOptions}
        defaultValue={{ value: "10", label: "10" }}
        onChange={(e) => onPaginationChanged(e.value)}
        styles={selectStyles}
        placeholder="10"
        components={{ IndicatorSeparator: null }}
      />
    </Page>
  );
};
