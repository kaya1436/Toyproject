import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import {
  ColorButton,
  ContentBox,
  ContentTitle,
  Form,
  FormButton,
  InputBox,
  SearchBox,
  SearchInput,
  SearchLabel,
  SearchName,
  SearchTable,
  selectStyles,
  TableDivLeft,
  TableDivRight,
} from "../components/TableStyle";

function Vehicle() {
  const defaultValues = { filters: [] };
  const options = [
    { value: "test1", label: "test1" },
    { value: "test2", label: "test2" },
    { value: "test3", label: "test3" },
    { value: "test4", label: "test4" },
  ];
  const { register, handleSubmit, control, reset } = useForm({ defaultValues });

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
  };

  return (
    <ContentBox>
      <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <ContentTitle>차량정보</ContentTitle>
        <ColorButton>등록</ColorButton>
        <FormButton>일괄등록</FormButton>
        <FormButton>내려받기</FormButton>
        <FormButton>삭제</FormButton>
        <FormButton>포맷 다운로드</FormButton>
        <SearchBox>
          <SearchTable>
            <tbody>
              <tr>
                <SearchName>
                  <SearchLabel htmlFor="vin">VIN No.</SearchLabel>
                </SearchName>
                <SearchInput>
                  <InputBox
                    placeholder="내용을 입력하세요."
                    {...register("vin")}
                  ></InputBox>
                </SearchInput>
                <TableDivLeft rowSpan="2" />
                <TableDivRight rowSpan="2" />
                <SearchName>
                  <SearchLabel htmlFor="license_plate_number">
                    차량번호
                  </SearchLabel>
                </SearchName>
                <SearchInput>
                  <InputBox
                    placeholder="내용을 입력하세요."
                    {...register("license_plate_number")}
                  ></InputBox>
                </SearchInput>
              </tr>
              <tr>
                <SearchName>
                  <SearchLabel htmlFor="계약자명">계약자명</SearchLabel>
                </SearchName>
                <SearchInput>
                  <InputBox
                    placeholder="내용을 입력하세요."
                    {...register("계약자명")}
                  ></InputBox>
                </SearchInput>
                <SearchName>
                  <SearchLabel htmlFor="product_name">
                    E-mobility 요금제
                  </SearchLabel>
                </SearchName>
                <SearchInput>
                  <Controller
                    name="filters"
                    control={control}
                    render={({ field }) => {
                      return (
                        <Select
                          name="filters"
                          placeholder="전체선택"
                          options={options}
                          isMulti
                          styles={selectStyles}
                          {...field}
                        />
                      );
                    }}
                  />
                </SearchInput>
              </tr>
              <tr>
                <SearchInput colSpan="6">
                  <ColorButton type="submit" style={{ marginBottom: "0px" }}>
                    검색
                  </ColorButton>
                  <FormButton
                    onClick={() => reset()}
                    style={{ marginBottom: "0px" }}
                  >
                    초기화
                  </FormButton>
                </SearchInput>
              </tr>
            </tbody>
          </SearchTable>
        </SearchBox>
      </Form>
    </ContentBox>
  );
}
export default Vehicle;
