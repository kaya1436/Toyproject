export const vehicleListColumns = [
  {
    Header: "번호",
    accessor: "name",
  },
  {
    Header: "VIN No.",
    accessor: "nativeName",
  },
  {
    Header: "차량번호",
    accessor: "capital",
    Cell: (props) => {
      const data = props.row.original.capital;
      return data ? data : "-";
    },
  },
  {
    Header: "E-mobility 요금제",
    Cell: (props) => <img src={props.row.original.flag} width={50} />,
  },
  {
    Header: "가입일",
    accessor: "region",
  },
  {
    Header: "종료일",
    accessor: "population",
  },
  {
    Header: "현재위치",
    accessor: "numericCode",
  },
];
