import { AgGridReact } from "ag-grid-react";
import axios from "axios";
import { t } from "i18next";
import { useMemo, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { nameState, vehicleDataState } from "../../../atom";
import Loading from "../../../components/Loading";
import NoRowsOverlay from "../../../components/NoRowsOverlay";
import { Input } from "../../../components/search/searchTableStyle";

export const VehicleSelectTable = () => {
  const [gridApi, setGridApi] = useState();
  const [data, setData] = useRecoilState(vehicleDataState);
  const columns = [
    {
      headerName: t("Vehicle Model"),
      field: "name",
      lockPosition: true,
      checkboxSelection: true,
    },
  ];
  const onGridReady = (params) => {
    setGridApi(params);
    const updateData = (data) => params.api.setRowData(data);
    axios
      .get("https://restcountries.com/v2/all")
      .then((res) => updateData(res.data));
    params.api.sizeColumnsToFit();
    setData([]);
  };
  const defaultColDef = {
    wrapText: true,
    wrapHeaderText: true,
    sortable: true,
    sort: "desc",
  };
  const sortingOrder = useMemo(() => {
    return ["desc", "asc"];
  }, []);
  const textFilter = (e) => {
    gridApi.api.setQuickFilter(e.target.value);
    const rowCount = gridApi.api.getDisplayedRowCount();
    if (rowCount > 0) {
      gridApi.api.hideOverlay();
    } else if (rowCount === 0) {
      gridApi.api.showNoRowsOverlay();
    }
  };
  const noRowsOverlayComponent = useMemo(() => {
    return NoRowsOverlay;
  }, []);
  const loadingOverlayComponent = useMemo(() => {
    return Loading;
  }, []);
  const onSelectionChanged = (e) => {
    setData(e.api.getSelectedRows());
  };
  return (
    <>
      <Input
        style={{ marginBottom: "12px" }}
        placeholder={t("Vehicle Model")}
        onChange={textFilter}
        required
      />
      <div className="ag-theme-alpine" style={{ height: "370px" }}>
        <AgGridReact
          columnDefs={columns}
          onGridReady={onGridReady}
          defaultColDef={defaultColDef}
          rowSelection="single"
          rowHeight={32}
          alwaysShowVerticalScroll={true}
          onSelectionChanged={onSelectionChanged}
          sortingOrder={sortingOrder}
          noRowsOverlayComponent={noRowsOverlayComponent}
          loadingOverlayComponent={loadingOverlayComponent}
        />
      </div>
    </>
  );
};
