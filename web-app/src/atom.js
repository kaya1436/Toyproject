import { atom, selector } from "recoil";

//vehicle page
export const vehicleDataState = atom({
  key: "vehicleDataState",
  default: [],
});

export const vinState = atom({
  key: "vinState",
  default: "",
});

export const vehicleNumberState = atom({
  key: "vehicleNumberState",
  default: "",
});

export const contractorState = atom({
  key: "contractorState",
  default: "",
});

export const multiSelectState = atom({
  key: "multiSelectState",
  default: [],
});

export const vehicleRowState = selector({
  key: "vehicleRowState",
  get: ({ get }) => {
    const data = get(vehicleDataState);
    const selectRow = data.map((value) => ({
      Number: value.name,
      "VIN No.": value.nativeName,
      "Vehicle No.": value.capital,
      "E-mobility Subs. Plan": value.flag,
      "Subscription Date": value.region,
      "End Date": value.population,
      "Current location": value.numericCode,
    }));
    return selectRow;
  },
});

//vehicle model page
export const vehicleModelDataState = atom({
  key: "vehicleModelDataState",
  default: [],
});

export const vehicleNameState = atom({
  key: "vehicleName",
  default: "",
});

export const brandState = atom({
  key: "brand",
  default: [],
});

export const vehicleModelRowState = selector({
  key: "vehicleModelRowState",
  get: ({ get }) => {
    const data = get(vehicleModelDataState);
    const selectRow = data.map((value) => ({
      Number: value.id,
    }));
    return selectRow;
  },
});
