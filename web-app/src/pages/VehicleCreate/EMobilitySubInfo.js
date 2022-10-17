import { useEffect, useRef, useState } from "react";
import Select from "react-select";
import { useRecoilValue } from "recoil";
import { contractorDataState } from "../../atom";
import { CreateLabelTd } from "../../components/createTableStyles";
import {
  Input,
  Label,
  SearchTd,
  selectStyles,
} from "../../components/search/searchTableStyle";
import {
  TableDivision,
  TableLabel,
  VehicleInfoTable,
} from "../../components/search/tableForm";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import "../../css/datepicker.css";
import ArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import ArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { getDay, getMonth, getYear, addYears } from "date-fns";

export const EMobilitySubInfo = () => {
  const contractorData = useRecoilValue(contractorDataState);
  const [data, setData] = useState([]);
  const [productData, setProductData] = useState([]);
  const getData = async () => {
    try {
      const res = await axios.get(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
      );
      setData(res.data.data.movies);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const options = data.map((value) => ({
    value: value,
    label: value.imdb_code,
  }));
  const selectChange = (e) => {
    setProductData(e.value);
  };

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState("");
  const calendar = useRef(null);
  const closeDatePicker = () => {
    setStartDate(startDate);
    calendar.current.setOpen(false);
  };
  const onChange = (date) => {
    setStartDate(date);
    setEndDate(addYears(date, 5));
  };
  return (
    <VehicleInfoTable
      title="E-mobility 구독정보"
      table={
        <tbody>
          <tr>
            <CreateLabelTd>
              <Label>E-mobility 요금제</Label>
            </CreateLabelTd>
            <SearchTd>
              {contractorData.length === 0 ? (
                <Input placeholder="요금제를 선택하세요." disabled />
              ) : (
                <Select
                  styles={selectStyles}
                  options={options}
                  onChange={selectChange}
                  placeholder="요금제를 선택하세요"
                  components={{ IndicatorSeparator: null }}
                />
              )}
            </SearchTd>
            <TableDivision num="3" />
            <TableLabel
              label="월 납입금액(S$)"
              placeholder="월 납입금액(S$)"
              value={productData.rating || ""}
              readonly
              disabled
            />
          </tr>
          <tr>
            <TableLabel
              label="충전제공량(kWh)"
              placeholder="충전제공량(kWh)"
              value={productData.runtime || ""}
              readonly
              disabled
            />
            <TableLabel
              label="찾아가는 충전 서비스 횟수"
              placeholder="찾아가는 충전 서비스 횟수"
              value={productData.year || ""}
              readonly
              disabled
            />
          </tr>
          <tr>
            <TableLabel
              label="배터리 정기점검 서비스 횟수"
              placeholder="배터리 정기점검 서비스 횟수"
              value={productData.date_uploaded_unix || ""}
              readonly
              disabled
            />
            <CreateLabelTd>
              <Label>기간지정</Label>
            </CreateLabelTd>
            <SearchTd>
              <span
                style={{
                  display: "inline-block",
                  width: "calc(50% - 12px)",
                }}
              >
                <DatePicker
                  ref={calendar}
                  selected={startDate}
                  onChange={onChange}
                  startDate={startDate}
                  endDate={endDate}
                  selectsStart
                  placeholderText="YYYY-MM-DD"
                  dateFormat="yyyy-MM-dd"
                  shouldCloseOnSelect={false}
                  locale={ko}
                  fixedHeight
                  showPopperArrow={false}
                  popperPlacement="top-start"
                  minDate={new Date()}
                  todayButton="오늘"
                  dayClassName={(date) => getDay(date) === 0 && "sunday"}
                  weekDayClassName={(date) => getDay(date) === 0 && "sunday"}
                  renderCustomHeader={({
                    date,
                    increaseMonth,
                    decreaseMonth,
                  }) => (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div className="month-prev" onClick={decreaseMonth}>
                        <ArrowLeft />
                      </div>
                      <div className="month-day">
                        {getYear(date)}년 {getMonth(date) + 1}월
                      </div>
                      <div className="month-next" onClick={increaseMonth}>
                        <ArrowRight />
                      </div>
                    </div>
                  )}
                >
                  <div style={{ float: "right", lineHeight: "26px" }}>
                    <button
                      onClick={closeDatePicker}
                      className="datepicker-button"
                    >
                      확인
                    </button>
                  </div>
                </DatePicker>
              </span>
              <span
                style={{
                  display: "inline-block",
                  width: "24px",
                  textAlign: "center",
                }}
              >
                ~
              </span>
              <span
                style={{
                  display: "inline-block",
                  width: "calc(50% - 13px)",
                }}
              >
                <DatePicker
                  selected={endDate}
                  placeholderText="YYYY-MM-DD"
                  dateFormat="yyyy-MM-dd"
                  selectsEnd
                  disabled
                />
              </span>
            </SearchTd>
          </tr>
        </tbody>
      }
    />
  );
};
