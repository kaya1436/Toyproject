import { AgGridReact } from "ag-grid-react";
import axios from "axios";
import { useMemo, useState } from "react";
import Select from "react-select";
import { useRecoilState } from "recoil";
import { contractorDataState } from "../../../../atom";
import Loading from "../../../../components/Loading";
import NoRowsOverlay from "../../../../components/NoRowsOverlay";
import {
  ColorButton,
  Input,
  selectStyles,
} from "../../../../components/search/searchTableStyle";
import { GridTotalRow } from "../../../../components/table/GridPagination";
import { FilterDiv, TableTop } from "../../../../components/table/GridStyle";

export const ContractorSelectTable = ({ closeModal }) => {
  const [gridApi, setGridApi] = useState();
  const [data, setData] = useRecoilState(contractorDataState);
  const [totalRow, setTotalRow] = useState();
  const [searchRange, setSearchRange] = useState("athlete");
  const [searchText, setSearchText] = useState("");

  const columns = [
    {
      headerName: "번호",
      field: "age",
      lockPosition: true,
      width: 100,
    },
    {
      headerName: "계약자명",
      field: "athlete",
      lockPosition: true,
    },
    {
      headerName: "계약자ID",
      field: "country",
      lockPosition: true,
    },
    {
      headerName: "개인/법인",
      field: "sport",
      lockPosition: true,
    },
    {
      headerName: "휴대폰번호",
      field: "year",
      lockPosition: true,
    },
  ];
  const onGridSizeChanged = () => {
    gridApi.api.sizeColumnsToFit();
  };
  const onGridReady = (params) => {
    setGridApi(params);
    const updateData = (data) => params.api.setRowData(data);
    const rowCount = params.api.getDisplayedRowCount();
    axios
      .get("https://www.ag-grid.com/example-assets/olympic-winners.json")
      .then((res) => updateData(res.data));
    params.api.sizeColumnsToFit();
    if (rowCount > 0) {
      params.api.hideOverlay();
    } else if (rowCount === 0) {
      params.api.showNoRowsOverlay();
    }
  };
  const onPaginationChanged = (e) => {
    const row = e.api.paginationGetRowCount();
    setTotalRow(row);
  };

  const defaultColDef = {
    wrapText: true,
    wrapHeaderText: true,
  };

  const textFilter = (e) => {
    setSearchText(e.target.value);
  };
  const noRowsOverlayComponent = useMemo(() => {
    return NoRowsOverlay;
  }, []);
  const loadingOverlayComponent = useMemo(() => {
    return Loading;
  }, []);
  const onRowSelected = (e) => {
    setData(e.api.getSelectedRows());
    closeModal();
  };
  const options = [
    { value: "athlete", label: "계약자명" },
    { value: "country", label: "계약자ID" },
    { value: "year", label: "휴대폰번호" },
  ];

  const filterChange = () => {
    console.log(searchRange, searchText);
  };
  const EnterPress = (e) => {
    if (e.key === "Enter") {
      filterChange();
    }
  };
  return (
    <>
      <TableTop style={{ margin: "0px" }}>
        <GridTotalRow totalRow={totalRow} />
        <FilterDiv>
          <div style={{ width: "117px", marginRight: "8px" }}>
            <Select
              options={options}
              defaultValue={options[0]}
              styles={selectStyles}
              onChange={(e) => setSearchRange(e.value)}
              components={{ IndicatorSeparator: null }}
            />
          </div>
          <div style={{ width: "180px" }}>
            <Input
              placeholder={"검색어 입력"}
              onChange={textFilter}
              onKeyDown={EnterPress}
              onkey
            />
          </div>
          <ColorButton onClick={filterChange}>검색</ColorButton>
        </FilterDiv>
      </TableTop>
      <div
        className="ag-theme-alpine"
        style={{ height: "370px", textAlign: "center" }}
      >
        <AgGridReact
          columnDefs={columns}
          onGridReady={onGridReady}
          defaultColDef={defaultColDef}
          rowSelection="single"
          rowHeight={32}
          alwaysShowVerticalScroll={true}
          onRowSelected={onRowSelected}
          noRowsOverlayComponent={noRowsOverlayComponent}
          loadingOverlayComponent={loadingOverlayComponent}
          pagination={true}
          onPaginationChanged={onPaginationChanged}
          onGridSizeChanged={onGridSizeChanged}
          suppressPaginationPanel={true}
        />
      </div>
    </>
  );
};
