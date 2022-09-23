export const columnDefs = [
  { checkboxSelection: true, headerCheckboxSelection: true },
  { field: "name", headerName: "번호" },
  { field: "nativeName", headerName: "모델명" },
  {
    field: "capital",
    headerName: "배터리용량 (kWh)",
    cellRenderer: ({ value }) => {
      return value ? value : "-";
    },
  },
  {
    field: "flag",
    headerName: "최고출력 (kWh)",
    cellRenderer: ({ value }) => {
      return <img src={value} width="50" />;
    },
  },
  { field: "region", headerName: "차량등급" },
  { field: "population", headerName: "제조사" },
];
