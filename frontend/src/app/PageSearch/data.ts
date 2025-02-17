export interface IVaccine {
  _id: string;
  vaccineName: string;
  hospitalName: string;
  address?: string;
  day?: string;
  hour?: string;
}


export const FakeVaccines = [
  {
    _id: "1",
    vaccineName: "Febre amarela",
    hospitalName: "Hospital municipal de marabá",
    address: "Marabá, Nova marabá, Fl. 18, Qd. 40, Lote 11",
    day: '04/10/2025',
    hour: '08:00 - 18:00 ',
  },
  {
    _id: "2",
    vaccineName: "Febre amarela",
    hospitalName: "Hospital municipal de marabá",
    address: "Marabá, Nova marabá, Fl. 18, Qd. 40, Lote 11",
    day: '04/10/2025',
    hour: '08:00 - 18:00 ',
  },
  {
    _id: "3",
    vaccineName: "Febre amarela",
    hospitalName: "Hospital municipal de marabá",
    address: "Marabá, Nova marabá, Fl. 18, Qd. 40, Lote 11",
    day: '04/10/2025',
    hour: '08:00 - 18:00 ',
  },
];
