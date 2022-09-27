import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";
import { columnDefs } from "./column";
import {
  ColumnFilter,
  FilterDiv,
  TableTop,
} from "../components/table/tableStyle";
import Select from "react-select";
import { selectStyles } from "../components/TableStyle";
import axios from "axios";
import { useMemo, useState } from "react";
import { GridPagination, GridTotalRow } from "./GridPagination";
import { t } from "i18next";
import { GridPageFilter } from "./GridPageFilter";
import Loading from "./Loading";
import "../css/gridTable.css";

const GridTable = () => {
  const [gridApi, setGridApi] = useState();
  const [rowData, setRowData] = useState();
  const [totalPage, setTotalPage] = useState();
  const [currentPage, setCurrentPage] = useState();
  const [totalRow, setTotalRow] = useState();

  const textOptions = [
    { value: "", label: t("All") },
    { value: "Europe", label: t("E-mobility unregistered vehicle") },
    { value: "Asia", label: t("E-mobility registered vehicle") },
    { value: "Americas", label: t("Service withdrawal vehicle") },
  ];

  const onGridReady = (params) => {
    setGridApi(params);
    const updateData = (data) => params.api.setRowData(data);
    axios
      .get("https://restcountries.com/v2/all")
      .then((res) => updateData(res.data));
    params.api.sizeColumnsToFit();
  };
  const onGridSizeChanged = () => {
    gridApi.api.sizeColumnsToFit();
  };
  const defaultColDef = {
    autoHeight: false,
    wrapText: true,
    wrapHeaderText: true,
  };

  const onSelectionChanged = (e) => {
    console.log(e.api.getSelectedRows());
  };

  const onPaginationChanged = (e) => {
    const currentPage = e.api.paginationGetCurrentPage() + 1;
    const totalPage = e.api.paginationGetTotalPages();
    const totalRow = e.api.paginationGetRowCount();
    setTotalPage(totalPage);
    setCurrentPage(currentPage);
    setTotalRow(totalRow);
  };
  let regionFilter = "";
  const externalFilterChanged = (e) => {
    regionFilter = e.value;
    gridApi.api.onFilterChanged();
    gridApi.api.paginationGoToPage(0);
  };
  const isExternalFilterPresent = () => {
    return regionFilter !== "";
  };
  const doesExternalFilterPass = (node) => {
    switch (regionFilter) {
      case "":
        return true;
      case "Europe":
        return node.data.region === "Europe";
      case "Asia":
        return node.data.region === "Asia";
      case "Americas":
        return node.data.region === "Americas";
    }
  };
  const loadingOverlayComponent = useMemo(() => {
    return Loading;
  }, []);

  return (
    <>
      <TableTop>
        <GridTotalRow totalRow={totalRow} />
        <FilterDiv>
          <GridPageFilter gridApi={gridApi} />
          <ColumnFilter>
            <Select
              options={textOptions}
              onChange={externalFilterChanged}
              styles={selectStyles}
              placeholder={t("All")}
              components={{ IndicatorSeparator: null }}
            />
          </ColumnFilter>
        </FilterDiv>
      </TableTop>
      <div className="ag-theme-material">
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
          isExternalFilterPresent={isExternalFilterPresent}
          doesExternalFilterPass={doesExternalFilterPass}
          loadingOverlayComponent={loadingOverlayComponent}
          suppressRowClickSelection={true}
          onGridSizeChanged={onGridSizeChanged}
        />
      </div>
      <div>
        <GridPagination
          currentPage={currentPage}
          totalPage={totalPage}
          gridApi={gridApi}
        />
      </div>
    </>
  );
};

export default GridTable;
