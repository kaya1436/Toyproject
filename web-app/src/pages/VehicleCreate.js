import { Link } from "react-router-dom";
import {
  ColorButton,
  ContentBox,
  ContentTitle,
  Form,
  FormButton,
  Img,
  ImgBox,
  Input,
  Label,
  LabelTd,
  SearchTd,
} from "../components/search/searchTableStyle";
import {
  TableDivision,
  TableLabel,
  VehicleInfoTable,
} from "../components/search/tableForm";

function VehicleCreate() {
  return (
    <ContentBox>
      <Form autoComplete="off">
        <ContentTitle>차량정보</ContentTitle>
        <ColorButton>등록완료</ColorButton>
        <Link to="/vehicle">
          <FormButton>취소</FormButton>
        </Link>
        <VehicleInfoTable
          title="차량정보"
          table={
            <tbody>
              <tr>
                <LabelTd>
                  <Label>차량번호</Label>
                </LabelTd>
                <SearchTd style={{ display: "flex" }}>
                  <Input placeholder="차량번호"></Input>
                  <ColorButton style={{ minWidth: "100px" }}>
                    중복확인
                  </ColorButton>
                </SearchTd>
                <TableDivision num="9" />
                <LabelTd>
                  <Label>차량이미지</Label>
                </LabelTd>
              </tr>
              <tr>
                <LabelTd>
                  <Label>VIN No.*</Label>
                </LabelTd>
                <SearchTd style={{ display: "flex" }}>
                  <Input placeholder="VIN No."></Input>
                  <ColorButton style={{ minWidth: "100px" }}>
                    중복확인
                  </ColorButton>
                </SearchTd>
                <SearchTd rowSpan="4" colSpan="2">
                  <ImgBox>
                    <Img
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "contain",
                      }}
                    />
                  </ImgBox>
                </SearchTd>
              </tr>
              <tr>
                <TableLabel
                  label="배터리고유번호"
                  placeholder="배터리고유번호"
                />
              </tr>
              <tr>
                <TableLabel
                  label="단말기S/N"
                  placeholder="단말기S/N를 입력해주세요"
                />
              </tr>
              <tr>
                <LabelTd>
                  <Label>차량모델*</Label>
                </LabelTd>
                <SearchTd style={{ display: "flex" }}>
                  <Input placeholder="차량모델" disabled></Input>
                  <ColorButton
                    style={{ minWidth: "100px", marginBottom: "0px" }}
                  >
                    차량선택
                  </ColorButton>
                </SearchTd>
              </tr>
              <tr>
                <TableLabel
                  label="연식"
                  placeholder="연식을 입력하세요"
                  readOnly
                />
                <TableLabel
                  label="연료타입"
                  placeholder="연료타입"
                  readonly
                  disabled
                />
              </tr>
              <tr>
                <TableLabel
                  label="전체 배터리용량"
                  placeholder="전체 배터리용량"
                  readonly
                  disabled
                />
                <TableLabel
                  label="변속기"
                  placeholder="변속기"
                  readonly
                  disabled
                />
              </tr>
              <tr>
                <TableLabel
                  label="최고출력"
                  placeholder="최고출력"
                  readonly
                  disabled
                />
                <TableLabel
                  label="차량등급"
                  placeholder="차량등급"
                  readonly
                  disabled
                />
              </tr>
              <tr>
                <TableLabel label="외색*" placeholder="외색을 입력하세요" />
                <TableLabel
                  label="제조사"
                  placeholder="제조사"
                  readonly
                  disabled
                />
              </tr>
            </tbody>
          }
        />
        <VehicleInfoTable
          title="계약자정보"
          table={
            <tbody>
              <tr>
                <LabelTd>
                  <Label>계약자ID</Label>
                </LabelTd>
                <SearchTd style={{ display: "flex" }}>
                  <Input placeholder="차량번호"></Input>
                  <ColorButton
                    style={{ minWidth: "100px", marginBottom: "0px" }}
                  >
                    계약자선택
                  </ColorButton>
                </SearchTd>
                <TableDivision num="3" />
                <TableLabel
                  label="계약자명"
                  placeholder="계약자명"
                  readonly
                  disabled
                />
              </tr>
              <tr>
                <TableLabel
                  label="휴대폰번호"
                  placeholder="휴대폰번호"
                  readonly
                  disabled
                />
                <TableLabel
                  label="개인/법인"
                  placeholder="개인/법인"
                  readonly
                  disabled
                />
              </tr>
              <tr>
                <TableLabel
                  label="생년월일"
                  placeholder="생년월일"
                  readonly
                  disabled
                />
              </tr>
            </tbody>
          }
        />
        <VehicleInfoTable
          title="E-mobility 구독정보"
          table={
            <tbody>
              <tr>
                <TableLabel
                  label="E-mobility 요금제"
                  placeholder="요금제를 선택하세요"
                  readonly
                  disabled
                />
                <TableDivision num="3" />
                <TableLabel
                  label="월 납입금액(S$)"
                  placeholder="월 납입금액(S$)"
                  readonly
                  disabled
                />
              </tr>
              <tr>
                <TableLabel
                  label="충전제공량(kWh)"
                  placeholder="충전제공량(kWh)"
                  readonly
                  disabled
                />
                <TableLabel
                  label="찾아가는 충전 서비스 횟수"
                  placeholder="찾아가는 충전 서비스 횟수"
                  readonly
                  disabled
                />
              </tr>
              <tr>
                <TableLabel
                  label="배터리 정기점검 서비스 횟수"
                  placeholder="배터리 정기점검 서비스 횟수"
                  readonly
                  disabled
                />
                <TableLabel label="기간지정" placeholder="기간지정" />
              </tr>
            </tbody>
          }
        />
      </Form>
    </ContentBox>
  );
}
export default VehicleCreate;
