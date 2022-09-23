import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

import { columnDefs } from "./column";
import {
  ArrowButton,
  FilterDiv,
  Page,
  PageButton,
  PageSpan,
  TableTop,
} from "../components/table/tableStyle";
import Select from "react-select";
import { selectStyles } from "../components/TableStyle";
import axios from "axios";
import { useMemo, useState } from "react";

import DoubleArrowLeft from "@mui/icons-material/KeyboardDoubleArrowLeft";
import ArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import ArrowRight from "@mui/icons-material/KeyboardArrowRight";
import DoubleArrowRight from "@mui/icons-material/KeyboardDoubleArrowRight";

const GridTable = () => {
  const [gridApi, setGridApi] = useState();
  const [rowData, setRowData] = useState();
  const [totalPage, setTotalPage] = useState();
  const [currentPage, setCurrentPage] = useState();
  const [previousDisable, setPreviousDisable] = useState(true);
  const [nextDisable, setNextDisable] = useState(false);

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
  const pageChange = (e) => {
    gridApi.api.paginationSetPageSize(e.value);
    gridApi.api.paginationGoToPage(0);
  };

  const onPaginationChanged = (e) => {
    const currentPage = e.api.paginationGetCurrentPage() + 1;
    const totalPage = e.api.paginationGetTotalPages();

    setTotalPage(totalPage);
    setCurrentPage(currentPage);
    if (e.api.currentPage === 0) {
      setPreviousDisable(true);
    } else {
      setPreviousDisable(false);
    }
    if (e.api.currentPage + 1 === totalPage) {
      setNextDisable(true);
    } else {
      setNextDisable(false);
    }
  };
  const pages = useMemo(() => {
    const start = Math.floor((currentPage - 1) / 5) * 5;
    const end = start + 5 > totalPage ? totalPage : start + 5;
    return Array.from({ length: end - start }, (_, i) => start + i + 1);
  }, [currentPage, totalPage]);

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
              defaultValue={{ value: "20", label: "20" }}
              styles={selectStyles}
              components={{ IndicatorSeparator: null }}
            />
          </Page>
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
      <PageSpan>
        <ArrowButton
          onClick={() => gridApi.api.paginationGoToFirstPage()}
          disabled={previousDisable}
        >
          <DoubleArrowLeft />
        </ArrowButton>
        <ArrowButton
          onClick={() => gridApi.api.paginationGoToPreviousPage()}
          disabled={previousDisable}
        >
          <ArrowLeft />
        </ArrowButton>
        {pages.map((page, i) => (
          <PageButton
            className={currentPage === page ? "active" : null}
            onClick={() => gridApi.api.paginationGoToPage(page)}
            key={i}
          >
            {page}
          </PageButton>
        ))}
        <ArrowButton
          onClick={() => gridApi.api.paginationGoToNextPage()}
          disabled={nextDisable}
        >
          <ArrowRight />
        </ArrowButton>
        <ArrowButton
          onClick={() => gridApi.api.paginationGoToLastPage()}
          disabled={nextDisable}
        >
          <DoubleArrowRight />
        </ArrowButton>
      </PageSpan>
    </>
  );
};

export default GridTable;
