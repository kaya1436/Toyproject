import {
  CreateLabelTd,
  InfoHeader,
  InfoHeaderText,
} from "../createTableStyles";
import {
  Input,
  Label,
  SearchBox,
  SearchTable,
  SearchTd,
} from "./searchTableStyle";

export const VehicleInfoTable = ({ title, table }) => {
  return (
    <div>
      <InfoHeader style={title === "차량정보" ? null : { marginTop: "20px" }}>
        <InfoHeaderText>{title}</InfoHeaderText>
      </InfoHeader>
      <SearchBox style={{ marginTop: "10px" }}>
        <SearchTable>{table}</SearchTable>
      </SearchBox>
    </div>
  );
};

export const TableLabel = ({
  label,
  placeholder,
  disabled,
  readonly,
  value,
}) => {
  return (
    <>
      <CreateLabelTd>
        <Label>{label}</Label>
      </CreateLabelTd>
      <SearchTd>
        <Input
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readonly}
          value={value}
        ></Input>
      </SearchTd>
    </>
  );
};

export const TableDivision = ({ num }) => {
  return (
    <>
      <td
        rowSpan={num}
        style={{ width: "20px", borderRight: "1px solid rgb(235, 235, 235)" }}
      />
      <td rowSpan={num} style={{ width: "20px" }} />
    </>
  );
};
