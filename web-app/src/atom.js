import { atom, selector } from "recoil";

export const dataState = atom({
  key: "dataState",
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

export const selectRowState = selector({
  key: "selectRowState",
  get: ({ get }) => {
    const data = get(dataState);
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
