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

export interface IDrug {
  id: number;
  name: number;
  description: number;
  doses: number;
  state: number;
  count: number;
  werehouse: number;
  category: number;
}