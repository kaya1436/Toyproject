import { useEffect, useMemo, useState } from "react";
import TotalTable from "../TotalTable";
import axios from "axios";

const Genres = ({ values }) => {
  return (
    <>
      {values.map((genre, idx) => {
        return (
          <span key={idx} className="badge">
            {genre}
          </span>
        );
      })}
    </>
  );
};
function BasicTable() {
  const columns = useMemo(() => [
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
      accessor: "languages.name",
    },
  ]);
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await axios("https://restcountries.com/v2/all");
      setData(result.data);
    })();
  }, []);
  return <TotalTable columns={columns} data={data} />;
}
export default BasicTable;
