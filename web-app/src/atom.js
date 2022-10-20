import { atom, selector } from "recoil";

//vehicle info page
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
export const contractorNameState = atom({
  key: "contractorNameState",
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

//vehicle create page
export const licenseNumberState = atom({
  key: "licenseNumberState",
  default: "",
});

export const modelYearState = atom({
  key: "modelYearState",
  default: "",
});
export const batteryState = atom({
  key: "batteryState",
  default: "",
});
export const outPutState = atom({
  key: "outPutState",
  default: "",
});
export const imageState = atom({
  key: "imageState",
  default: "",
});
export const fuelState = atom({
  key: "fuelState",
  default: "",
});
export const transmissionState = atom({
  key: "transmissionState",
  default: "",
});
export const gradeState = atom({
  key: "gradeState",
  default: "",
});

export const modelSelectState = selector({
  key: "modelSelectState",
  get: ({ get }) => {
    const data = get(vehicleDataState);
    const selectRow = data.map((value) => ({
      vehicle_name: value.name,
      battery_type: value.nativeName,
      max_output: value.capital,
      vehicle_image: value.flag,
      fuel_type: value.region,
      transmission_type: value.population,
      grade: value.numericCode,
      brand: value.subregion,
    }));
    const name = selectRow.map((value) => value.vehicle_name);
    const battery = selectRow.map((value) => value.battery_type);
    const output = selectRow.map((value) => value.max_output);
    const image = selectRow.map((value) => value.vehicle_image);
    const fuel = selectRow.map((value) => value.fuel_type);
    const transmission = selectRow.map((value) => value.transmission_type);
    const grade = selectRow.map((value) => value.grade);
    const brand = selectRow.map((value) => value.brand);
    return { name, battery, output, image, fuel, transmission, grade, brand };
  },
});

export const licenseDisabledState = atom({
  key: "licenseDisabledState",
  default: false,
});
export const vinDisabledState = atom({
  key: "vinDisabledState",
  default: false,
});

//contractor data
export const contractorDataState = atom({
  key: "contractorDateState",
  default: [],
});
export const contractorIdState = atom({
  key: "contractorIdState",
  default: "",
});
export const mobileNumberState = atom({
  key: "mobileNumberState",
  default: "",
});
export const individualState = atom({
  key: "individualState",
  default: "",
});
export const birthDateState = atom({
  key: "birthDateState",
  default: "",
});

export const contractorSelectState = selector({
  key: "constractorSelectState",
  get: ({ get }) => {
    const data = get(contractorDataState);
    const selectRow = data.map((value) => ({
      contractorId: value.country,
      contractorName: value.athlete,
      phoneNumber: value.year,
      individual: value.sport,
      birthDate: value.date,
    }));
    const id = selectRow.map((value) => value.contractorId);
    const name = selectRow.map((value) => value.contractorName);
    const phone = selectRow.map((value) => value.phoneNumber);
    const individual = selectRow.map((value) => value.individual);
    const birth = selectRow.map((value) => value.birthDate);
    return { id, name, phone, individual, birth };
  },
});
