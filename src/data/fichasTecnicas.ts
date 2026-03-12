export interface TechnicalSheetData {
  id: string;
  name: string;
  description: string;
  specs: Record<string, string>;
  fichaNumber: string;
  equipoNumber: string;
}

export const FICHAS_TECNICAS: TechnicalSheetData[] = [
  {
    id: 'canaima-1',
    name: 'Canaima 1',
    description: 'Primera versión de la computadora Canaima.',
    fichaNumber: '001',
    equipoNumber: 'C-01',
    specs: {
      'Procesador': 'Intel Atom',
      'RAM': '1GB',
      'Almacenamiento': '160GB HDD'
    }
  }
];
