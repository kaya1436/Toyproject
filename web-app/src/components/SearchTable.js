import {
  InfoHeader,
  InfoHeaderText,
  Input,
  Label,
  LabelTd,
  SearchBox,
  SearchTable,
  SearchTd,
  TableDivLeft,
  TableDivRight,
} from "./TableStyle";

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

export const TableLabel = ({ label, placeholder, disabled, readonly }) => {
  return (
    <>
      <LabelTd>
        <Label>{label}</Label>
      </LabelTd>
      <SearchTd>
        <Input
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readonly}
        ></Input>
      </SearchTd>
    </>
  );
};

export const TableDivision = ({ num }) => {
  return (
    <>
      <TableDivLeft rowSpan={num} />
      <TableDivRight rowSpan={num} />
    </>
  );
};
