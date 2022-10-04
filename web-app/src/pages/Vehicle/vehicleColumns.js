export const vehicleColumns = [
  {
    checkboxSelection: true,
    headerCheckboxSelection: true,
    width: 48,
    lockPosition: true,
  },
  { headerName: "번호", field: "name", lockPosition: true },
  { headerName: "VIN No.", field: "nativeName", lockPosition: true },
  {
    headerName: "차량번호",
    field: "capital",
    cellRenderer: ({ value }) => {
      return value ? value : "-";
    },
    lockPosition: true,
  },
  {
    headerName: "E-mobility 요금제",
    field: "flag",
    cellRenderer: ({ value }) => {
      return <img src={value} width="50" />;
    },
    lockPosition: true,
  },
  { headerName: "가입일", field: "region", lockPosition: true },
  { headerName: "종료일", field: "population", lockPosition: true },
  { headerName: "현재위치", field: "numericCode", lockPosition: true },
];
