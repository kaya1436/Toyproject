import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

import { columnDefs } from "./column";
import {
  ArrowButton,
  ColumnFilter,
  FilterDiv,
  Page,
  PageButton,
  PageSpan,
  TableTop,
} from "../components/table/tableStyle";
import Select from "react-select";
import { selectStyles } from "../components/TableStyle";
import axios from "axios";
import { useState } from "react";
import { GridPagination } from "./GridPagination";
import { t } from "i18next";

const GridTable = () => {
  const [gridApi, setGridApi] = useState();
  const [rowData, setRowData] = useState();
  const [totalPage, setTotalPage] = useState();
  const [currentPage, setCurrentPage] = useState();

  const onGridReady = (params) => {
    setGridApi(params);
    const updateData = (data) => params.api.setRowData(data);
    axios
      .get("https://restcountries.com/v2/all")
      .then((res) => updateData(res.data));
  };
  const defaultColDef = { flex: 1, autoHeight: false };

  const onSelectionChanged = (e) => {
    console.log(e.api.getSelectedRows());
  };
  const pageOptions = [
    { value: "10", label: "10" },
    { value: "20", label: "20" },
    { value: "30", label: "30" },
    { value: "50", label: "50" },
    { value: "100", label: "100" },
  ];
  const options = [
    { value: "", label: t("All") },
    { value: "Europe", label: t("E-mobility unregistered vehicle") },
    { value: "Asia", label: t("E-mobility registered vehicle") },
    { value: "Americas", label: t("Service withdrawal vehicle") },
  ];
  const pageChange = (e) => {
    gridApi.api.paginationSetPageSize(e.value);
    gridApi.api.paginationGoToPage(0);
  };

  const onPaginationChanged = (e) => {
    const currentPage = e.api.paginationGetCurrentPage() + 1;
    const totalPage = e.api.paginationGetTotalPages();
    setTotalPage(totalPage);
    setCurrentPage(currentPage);
  };
  const onFIlterTextChange = (e) => {
    gridApi.api.setQuickFilter(e.value);
    gridApi.api.paginationGoToPage(0);
  };

  return (
    <>
      <TableTop>
        <div>
          <span style={{ color: "rgb(137,137,137)", marginRight: "2px" }}>
            Total
          </span>
          <span
            style={{
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            {totalPage}
          </span>
        </div>
        <FilterDiv>
          <Page>
            <Select
              options={pageOptions}
              onChange={pageChange}
              defaultValue={pageOptions[0]}
              styles={selectStyles}
              components={{ IndicatorSeparator: null }}
            />
          </Page>
          <ColumnFilter>
            <Select
              options={options}
              onChange={onFIlterTextChange}
              styles={selectStyles}
              placeholder={t("All")}
              components={{ IndicatorSeparator: null }}
            />
          </ColumnFilter>
        </FilterDiv>
      </TableTop>
      <div className="ag-theme-alpine" style={{ width: "100%" }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          onGridReady={onGridReady}
          defaultColDef={defaultColDef}
          rowSelection="multiple"
          onSelectionChanged={onSelectionChanged}
          rowMultiSelectWithClick={true}
          pagination={true}
          paginationPageSize={10}
          domLayout="autoHeight"
          suppressPaginationPanel={true}
          onPaginationChanged={onPaginationChanged}
        />
      </div>
      <GridPagination
        currentPage={currentPage}
        totalPage={totalPage}
        gridApi={gridApi}
      />
    </>
  );
};

export default GridTable;
