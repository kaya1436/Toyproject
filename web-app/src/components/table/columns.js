export const vehicleListColumns = [
  {
    checkboxSelection: true,
    headerCheckboxSelection: true,
    width: 48,
    lockPosition: true,
  },
  { field: "name", headerName: "번호", lockPosition: true },
  { field: "nativeName", headerName: "VIN No.", lockPosition: true },
  {
    field: "capital",
    headerName: "차량번호",
    cellRenderer: ({ value }) => {
      return value ? value : "-";
    },
    lockPosition: true,
  },
  {
    field: "flag",
    headerName: "E-mobility 요금제",
    cellRenderer: ({ value }) => {
      return <img src={value} width="50" />;
    },
    lockPosition: true,
  },
  { headerName: "가입일", field: "region", lockPosition: true },
  { headerName: "종료일", field: "population", lockPosition: true },
  { headerName: "현재위치", field: "numericCode", lockPosition: true },
];
