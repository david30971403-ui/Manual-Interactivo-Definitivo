export interface HardwareInternoRow {
  componente: string;
  marca: string;
  modelo: string;
  serial: string;
  capacidad: string;
  estado: string;
}

export interface HardwarePerifericoRow {
  componente: string;
  marca: string;
  modelo: string;
  serial: string;
  estado: string;
}

export interface SoftwareRow {
  componente: string;
  nombre: string;
  version: string;
  licencia: string;
  actualizaciones: string;
}

export interface TechnicalSheetData {
  id: string;
  fichaNumber: string;
  equipoNumber: string;
  hardwareInterno: HardwareInternoRow[];
  hardwarePeriferico: HardwarePerifericoRow[];
  software: SoftwareRow[];
}

const createHardwareInterno = (ramSerial: string, hddSerial: string, psuMarca: string, psuSerial: string): HardwareInternoRow[] => [
  { componente: 'GABINETE', marca: 'N/A', modelo: 'N/A', serial: 'N/A', capacidad: 'N/A', estado: 'N/A' },
  { componente: 'MEMORIA RAM 1', marca: 'OEM USI', modelo: '64MX8', serial: ramSerial, capacidad: '1GB 667 MHz', estado: 'Bueno' },
  { componente: 'MEMORIA RAM 2', marca: 'N/A', modelo: 'N/A', serial: 'N/A', capacidad: 'N/A', estado: 'N/A' },
  { componente: 'DISCO DURO 1', marca: 'SAMSUNG', modelo: 'HS040HB', serial: hddSerial, capacidad: '40GB HDD', estado: 'Bueno' },
  { componente: 'DISCO DURO 2', marca: 'N/A', modelo: 'N/A', serial: 'N/A', capacidad: 'N/A', estado: 'N/A' },
  { componente: 'UNIDAD DE CD/DVD', marca: 'N/A', modelo: 'N/A', serial: 'N/A', capacidad: 'N/A', estado: 'N/A' },
  { componente: 'FUENTE DE PODER', marca: psuMarca, modelo: psuMarca === 'Delta Electronics, inc.' ? 'ADP-40MH' : '0225C2040', serial: psuSerial, capacidad: '20V - 2A', estado: 'Bueno' },
  { componente: 'PROCESADOR', marca: 'intel', modelo: 'Atom', serial: 'N270', capacidad: '1600MHz', estado: 'Bueno' },
  { componente: 'PUERTOS USB', marca: 'Integrados', modelo: 'Integrados', serial: '2 Integrados', capacidad: 'USB 1.0, 2.0', estado: 'Bueno' },
  { componente: 'PUERTO MINI PCI EXPRESS', marca: 'Integrados', modelo: 'Integrados', serial: 'Integrados', capacidad: 'Integrados', estado: 'Bueno' },
  { componente: 'PUERTOS AUX', marca: 'Integrados', modelo: 'Integrados', serial: 'Integrados', capacidad: 'Integrados', estado: 'Bueno' },
  { componente: 'PUERTO ETHERNET', marca: 'Integrados', modelo: 'Integrados', serial: 'Integrados', capacidad: 'Integrados', estado: 'Bueno' }
];

const createHardwarePeriferico = (monitorEstado: string): HardwarePerifericoRow[] => [
  { componente: 'MONITOR', marca: 'N/A', modelo: 'Integrados', serial: 'N/A', estado: monitorEstado },
  { componente: 'TECLADO', marca: 'N/A', modelo: 'Integrados', serial: 'N/A', estado: 'Bueno' },
  { componente: 'MOUSE', marca: 'N/A', modelo: 'Integrados', serial: 'N/A', estado: 'Bueno' },
  { componente: 'IMPRESORA', marca: 'N/A', modelo: 'N/A', serial: 'N/A', estado: 'N/A' },
  { componente: 'ESCANER', marca: 'N/A', modelo: 'N/A', serial: 'N/A', estado: 'N/A' },
  { componente: 'OTROS', marca: 'N/A', modelo: 'N/A', serial: 'N/A', estado: 'N/A' },
  { componente: 'OTROS', marca: 'N/A', modelo: 'N/A', serial: 'N/A', estado: 'N/A' }
];

const createSoftware = (soNombre: string, soVersion: string, ofiNombre: string, ofiVersion: string, ofiLicencia: string): SoftwareRow[] => [
  { componente: 'SISTEMA OPERATIVO', nombre: soNombre, version: soVersion, licencia: 'Codigo Abierto', actualizaciones: 'N/A' },
  { componente: 'SISTEMA OFIMÁTICO', nombre: ofiNombre, version: ofiVersion, licencia: ofiLicencia, actualizaciones: 'N/A' },
  { componente: 'COMPRESOR', nombre: 'N/A', version: 'N/A', licencia: 'N/A', actualizaciones: 'N/A' },
  { componente: 'ADOBE READER', nombre: 'N/A', version: 'N/A', licencia: 'N/A', actualizaciones: 'N/A' },
  { componente: 'OTROS', nombre: 'N/A', version: 'N/A', licencia: 'N/A', actualizaciones: 'N/A' },
  { componente: 'OTROS', nombre: 'N/A', version: 'N/A', licencia: 'N/A', actualizaciones: 'N/A' }
];

export const FICHAS_TECNICAS: TechnicalSheetData[] = [
  {
    id: 'ficha-01',
    fichaNumber: '01',
    equipoNumber: '00089040',
    hardwareInterno: createHardwareInterno('SRX23456785243265', 'S0UAJ16S232636', 'Delta Electronics, inc.', '309W8BV0A73'),
    hardwarePeriferico: createHardwarePeriferico('Regular'),
    software: createSoftware('Canaima GNU/Linux', 'GNU/Linux 2.0.3', 'LibreOffice', '1.0', 'Codigo Abierto')
  },
  {
    id: 'ficha-02',
    fichaNumber: '02',
    equipoNumber: '00093064',
    hardwareInterno: createHardwareInterno('SRX23456785282305', 'S0UAJ16S101110', 'LI SHIN INTERNATIONAL ENTERPRISE CORP.', 'A30845137818'),
    hardwarePeriferico: createHardwarePeriferico('Regular'),
    software: createSoftware('Windows 7MiniOS', 'v26.00', 'Office', '2010', 'Codigo Cerrado')
  },
  {
    id: 'ficha-03',
    fichaNumber: '03',
    equipoNumber: '00089239',
    hardwareInterno: createHardwareInterno('SRX23456785241020', 'S0UAJ16S232650', 'LI SHIN INTERNATIONAL ENTERPRISE CORP.', 'A30848046175'),
    hardwarePeriferico: createHardwarePeriferico('Regular'),
    software: createSoftware('Windows 7MiniOS', 'v26.00', 'Office', '2010', 'Codigo Cerrado')
  },
  {
    id: 'ficha-04',
    fichaNumber: '04',
    equipoNumber: '00088965',
    hardwareInterno: createHardwareInterno('SRX23456785237871', 'S0UAJ16S232744', 'LI SHIN INTERNATIONAL ENTERPRISE CORP.', 'A30849185149'),
    hardwarePeriferico: createHardwarePeriferico('Bueno'),
    software: createSoftware('Windows 7MiniOS', 'v26.00', 'Office', '2010', 'Codigo Cerrado')
  },
  {
    id: 'ficha-05',
    fichaNumber: '05',
    equipoNumber: '00093089',
    hardwareInterno: createHardwareInterno('SRX23456785224220', 'S0UAJ16S232009', 'LI SHIN INTERNATIONAL ENTERPRISE CORP.', 'A30848069010'),
    hardwarePeriferico: createHardwarePeriferico('Regular'),
    software: createSoftware('Windows 7MiniOS', 'v26.00', 'Office', '2010', 'Codigo Cerrado')
  }
];
