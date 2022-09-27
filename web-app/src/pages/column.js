export const columnDefs = [
  {
    checkboxSelection: true,
    headerCheckboxSelection: true,
    width: 48,
    lockPosition: true,
  },
  { field: "name", headerName: "번호", lockPosition: true },
  { field: "nativeName", headerName: "모델명", lockPosition: true },
  {
    field: "capital",
    headerName: "배터리용량 (kWh)",
    cellRenderer: ({ value }) => {
      return value ? value : "-";
    },
    lockPosition: true,
  },
  {
    field: "flag",
    headerName: "최고출력 (kWh)",
    cellRenderer: ({ value }) => {
      return <img src={value} width="50" />;
    },
    lockPosition: true,
  },
  { field: "region", headerName: "차량등급", lockPosition: true },
  { field: "population", headerName: "제조사", lockPosition: true },
];
