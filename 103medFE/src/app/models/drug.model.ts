enum DrugStateType {
  Unknown = 'Unknown',
  Tablet = 'Tablet',
  Injection = 'Injection',
}
enum WerehouseType {
  Unknown = 'Unknown',
  Rai = 'Rai',
  Yurkivka = 'Yurkivka',
  Dimitrovka = 'Dimitrovka',
}
enum CategoryType {
  Unknown = 'Unknown',
  Cardio = 'Cardio',
  Shkt = 'Shkt',
  Phyho = 'Phyho',
}

export interface IDrugs {
  drugs: IDrug[];
}

export interface IDrug {
  id: number;
  name: String;
  description: String;
  doses: String;
  state: String;
  count: String;
  werehouse: String;
  category: String;
}