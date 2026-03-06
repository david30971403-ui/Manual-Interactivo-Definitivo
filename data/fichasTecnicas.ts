export interface TechnicalSheetData {
  id: string;
  fichaNumber: string;
  equipoNumber: string;
  comunidad: string;
  direccion: string;
  telefono: string;
  tipo: 'PC' | 'LAPTOP';
  hardwareInterno: {
    componente: string;
    marca: string;
    modelo: string;
    serial: string;
    capacidad: string;
    estado: string;
  }[];
  hardwarePerifericos: {
    componente: string;
    marca: string;
    modelo: string;
    serial: string;
    estado: string;
  }[];
  software: {
    tipo: string;
    nombre: string;
    version: string;
    licencia: string;
    actualizaciones: string;
  }[];
}

export const FICHAS_TECNICAS: TechnicalSheetData[] = [
  {
    id: '1',
    fichaNumber: '01',
    equipoNumber: '00089040',
    comunidad: 'Unidad Educativa Estatal "JORGE SEMIDEY"',
    direccion: 'Calle Los Próceres del sector Francisco de Miranda. Maracay Edo. Aragua',
    telefono: '0424-3256374',
    tipo: 'LAPTOP',
    hardwareInterno: [
      { componente: 'GABINETE', marca: 'N/A', modelo: 'N/A', serial: 'N/A', capacidad: 'N/A', estado: 'N/A' },
      { componente: 'MEMORIA RAM 1', marca: 'OEM USI', modelo: '64MX8', serial: 'SRX23456785243265', capacidad: '1 GB 667 MHz', estado: 'Bueno' },
      { componente: 'MEMORIA RAM 2', marca: 'N/A', modelo: 'N/A', serial: 'N/A', capacidad: 'N/A', estado: 'N/A' },
      { componente: 'DISCO DURO 1', marca: 'SAMSUNG', modelo: 'HS040HB', serial: 'S0UAJ16S232636', capacidad: '40GB HDD', estado: 'Bueno' },
      { componente: 'DISCO DURO 2', marca: 'N/A', modelo: 'N/A', serial: 'N/A', capacidad: 'N/A', estado: 'N/A' },
      { componente: 'UNIDAD DE CD/DVD', marca: 'N/A', modelo: 'N/A', serial: 'N/A', capacidad: 'N/A', estado: 'N/A' },
      { componente: 'FUENTE DE PODER', marca: 'Delta Electronics, inc', modelo: 'ADP-40MH', serial: '309W8BV0A73', capacidad: '20V - 2A', estado: 'Bueno' },
      { componente: 'PROCESADOR', marca: 'intel', modelo: 'Atom', serial: 'N270', capacidad: '1600MHz', estado: 'Bueno' },
      { componente: 'PUERTOS USB', marca: 'Integrados', modelo: 'Integrados', serial: '2 Integrados', capacidad: 'USB 1.0, 2.0', estado: 'Bueno' },
      { componente: 'PUERTO MINI PCI EXPRESS', marca: 'Integrados', modelo: 'Integrados', serial: 'Integrados', capacidad: 'Integrados', estado: 'Bueno' },
      { componente: 'PUERTOS AUX', marca: 'Integrados', modelo: 'Integrados', serial: 'Integrados', capacidad: 'Integrados', estado: 'Bueno' },
      { componente: 'PUERTO ETHERN', marca: 'Integrados', modelo: 'Integrados', serial: 'Integrados', capacidad: 'Integrados', estado: 'Bueno' },
    ],
    hardwarePerifericos: [
      { componente: 'MONITOR', marca: 'N/A', modelo: 'Integrados', serial: 'N/A', estado: 'Regular' },
      { componente: 'TECLADO', marca: 'N/A', modelo: 'Integrados', serial: 'N/A', estado: 'Bueno' },
      { componente: 'MOUSE', marca: 'N/A', modelo: 'Integrados', serial: 'N/A', estado: 'Bueno' },
      { componente: 'IMPRESORA', marca: 'N/A', modelo: 'N/A', serial: 'N/A', estado: 'N/A' },
      { componente: 'ESCANER', marca: 'N/A', modelo: 'N/A', serial: 'N/A', estado: 'N/A' },
      { componente: 'OTROS', marca: 'N/A', modelo: 'N/A', serial: 'N/A', estado: 'N/A' },
      { componente: 'OTROS', marca: 'N/A', modelo: 'N/A', serial: 'N/A', estado: 'N/A' },
    ],
    software: [
      { tipo: 'SISTEMA OPERATIVO', nombre: 'Windows 7MiniOS', version: 'v26.00', licencia: 'Codigo Abierto', actualizaciones: 'N/A' },
      { tipo: 'SISTEMA OFIMÁTICO', nombre: 'Office', version: '2010', licencia: 'Codigo Cerrado', actualizaciones: 'N/A' },
      { tipo: 'COMPRESOR', nombre: 'N/A', version: 'N/A', licencia: 'N/A', actualizaciones: 'N/A' },
      { tipo: 'ADOBE READER', nombre: 'N/A', version: 'N/A', licencia: 'N/A', actualizaciones: 'N/A' },
      { tipo: 'OTROS', nombre: 'N/A', version: 'N/A', licencia: 'N/A', actualizaciones: 'N/A' },
      { tipo: 'OTROS', nombre: 'N/A', version: 'N/A', licencia: 'N/A', actualizaciones: 'N/A' },
    ]
  },
  {
    id: '2',
    fichaNumber: '02',
    equipoNumber: '00093064',
    comunidad: 'Unidad Educativa Estatal "JORGE SEMIDEY"',
    direccion: 'Calle Los Próceres del sector Francisco de Miranda. Maracay Edo. Aragua',
    telefono: '0424-3256374',
    tipo: 'LAPTOP',
    hardwareInterno: [
      { componente: 'GABINETE', marca: 'N/A', modelo: 'N/A', serial: 'N/A', capacidad: 'N/A', estado: 'N/A' },
      { componente: 'MEMORIA RAM 1', marca: 'OEM USI', modelo: '64MX8', serial: 'SRX23456785282305', capacidad: '1GB 667 MHz', estado: 'Bueno' },
      { componente: 'MEMORIA RAM 2', marca: 'N/A', modelo: 'N/A', serial: 'N/A', capacidad: 'N/A', estado: 'N/A' },
      { componente: 'DISCO DURO 1', marca: 'SAMSUNG', modelo: 'HS040HB', serial: 'S0UAJ16S101110', capacidad: '40GB HDD', estado: 'Bueno' },
      { componente: 'DISCO DURO 2', marca: 'N/A', modelo: 'N/A', serial: 'N/A', capacidad: 'N/A', estado: 'N/A' },
      { componente: 'UNIDAD DE CD/DVD', marca: 'N/A', modelo: 'N/A', serial: 'N/A', capacidad: 'N/A', estado: 'N/A' },
      { componente: 'FUENTE DE PODER', marca: 'LI SHIN INTERNATIONAL ENTERPRISE CORP.', modelo: '0225C2040', serial: 'A30845137818', capacidad: '20V - 2A', estado: 'Bueno' },
      { componente: 'PROCESADOR', marca: 'intel', modelo: 'Atom', serial: 'N270', capacidad: '1600MHz', estado: 'Bueno' },
      { componente: 'PUERTOS USB', marca: 'Integrados', modelo: 'Integrados', serial: '2 Integrados', capacidad: 'USB 1.0, 2.0', estado: 'Bueno' },
      { componente: 'PUERTO MINI PCI EXPRESS', marca: 'Integrados', modelo: 'Integrados', serial: 'Integrados', capacidad: 'Integrados', estado: 'Bueno' },
      { componente: 'PUERTOS AUX', marca: 'Integrados', modelo: 'Integrados', serial: 'Integrados', capacidad: 'Integrados', estado: 'Bueno' },
      { componente: 'PUERTO ETHERN', marca: 'Integrados', modelo: 'Integrados', serial: 'Integrados', capacidad: 'Integrados', estado: 'Bueno' },
    ],
    hardwarePerifericos: [
      { componente: 'MONITOR', marca: 'N/A', modelo: 'Integrados', serial: 'N/A', estado: 'Regular' },
      { componente: 'TECLADO', marca: 'N/A', modelo: 'Integrados', serial: 'N/A', estado: 'Bueno' },
      { componente: 'MOUSE', marca: 'N/A', modelo: 'Integrados', serial: 'N/A', estado: 'Bueno' },
      { componente: 'IMPRESORA', marca: 'N/A', modelo: 'N/A', serial: 'N/A', estado: 'N/A' },
      { componente: 'ESCANER', marca: 'N/A', modelo: 'N/A', serial: 'N/A', estado: 'N/A' },
      { componente: 'OTROS', marca: 'N/A', modelo: 'N/A', serial: 'N/A', estado: 'N/A' },
      { componente: 'OTROS', marca: 'N/A', modelo: 'N/A', serial: 'N/A', estado: 'N/A' },
    ],
    software: [
      { tipo: 'SISTEMA OPERATIVO', nombre: 'Windows 7MiniOS', version: 'v26.00', licencia: 'Codigo Abierto', actualizaciones: 'N/A' },
      { tipo: 'SISTEMA OFIMÁTICO', nombre: 'Office', version: '2010', licencia: 'Codigo Cerrado', actualizaciones: 'N/A' },
      { tipo: 'COMPRESOR', nombre: 'N/A', version: 'N/A', licencia: 'N/A', actualizaciones: 'N/A' },
      { tipo: 'ADOBE READER', nombre: 'N/A', version: 'N/A', licencia: 'N/A', actualizaciones: 'N/A' },
      { tipo: 'OTROS', nombre: 'N/A', version: 'N/A', licencia: 'N/A', actualizaciones: 'N/A' },
      { tipo: 'OTROS', nombre: 'N/A', version: 'N/A', licencia: 'N/A', actualizaciones: 'N/A' },
    ]
  },
  {
    id: '3',
    fichaNumber: '03',
    equipoNumber: '00089239',
    comunidad: 'Unidad Educativa Estatal "JORGE SEMIDEY"',
    direccion: 'Calle Los Próceres del sector Francisco de Miranda. Maracay Edo. Aragua',
    telefono: '0424-3256374',
    tipo: 'LAPTOP',
    hardwareInterno: [
      { componente: 'GABINETE', marca: 'N/A', modelo: 'N/A', serial: 'N/A', capacidad: 'N/A', estado: 'N/A' },
      { componente: 'MEMORIA RAM 1', marca: 'OEM USI', modelo: '64MX8', serial: 'SRX23456785241020', capacidad: '1GB 667 MHz', estado: 'Bueno' },
      { componente: 'MEMORIA RAM 2', marca: 'N/A', modelo: 'N/A', serial: 'N/A', capacidad: 'N/A', estado: 'N/A' },
      { componente: 'DISCO DURO 1', marca: 'SAMSUNG', modelo: 'HS040HB', serial: 'S0UAJ16S232650', capacidad: '40GB HDD', estado: 'Bueno' },
      { componente: 'DISCO DURO 2', marca: 'N/A', modelo: 'N/A', serial: 'N/A', capacidad: 'N/A', estado: 'N/A' },
      { componente: 'UNIDAD DE CD/DVD', marca: 'N/A', modelo: 'N/A', serial: 'N/A', capacidad: 'N/A', estado: 'N/A' },
      { componente: 'FUENTE DE PODER', marca: 'LI SHIN INTERNATIONAL ENTERPRISE CORP.', modelo: '0225C2040', serial: 'A30848046175', capacidad: '20V - 2A', estado: 'Bueno' },
      { componente: 'PROCESADOR', marca: 'intel', modelo: 'Atom', serial: 'N270', capacidad: '1600MHz', estado: 'Bueno' },
      { componente: 'PUERTOS USB', marca: 'Integrados', modelo: 'Integrados', serial: '2 Integrados', capacidad: 'USB 1.0, 2.0', estado: 'Bueno' },
      { componente: 'PUERTO MINI PCI EXPRESS', marca: 'Integrados', modelo: 'Integrados', serial: 'Integrados', capacidad: 'Integrados', estado: 'Bueno' },
      { componente: 'PUERTOS AUX', marca: 'Integrados', modelo: 'Integrados', serial: 'Integrados', capacidad: 'Integrados', estado: 'Bueno' },
      { componente: 'PUERTO ETHERN', marca: 'Integrados', modelo: 'Integrados', serial: 'Integrados', capacidad: 'Integrados', estado: 'Bueno' },
    ],
    hardwarePerifericos: [
      { componente: 'MONITOR', marca: 'N/A', modelo: 'Integrados', serial: 'N/A', estado: 'Regular' },
      { componente: 'TECLADO', marca: 'N/A', modelo: 'Integrados', serial: 'N/A', estado: 'Bueno' },
      { componente: 'MOUSE', marca: 'N/A', modelo: 'Integrados', serial: 'N/A', estado: 'Bueno' },
      { componente: 'IMPRESORA', marca: 'N/A', modelo: 'N/A', serial: 'N/A', estado: 'N/A' },
      { componente: 'ESCANER', marca: 'N/A', modelo: 'N/A', serial: 'N/A', estado: 'N/A' },
      { componente: 'OTROS', marca: 'N/A', modelo: 'N/A', serial: 'N/A', estado: 'N/A' },
      { componente: 'OTROS', marca: 'N/A', modelo: 'N/A', serial: 'N/A', estado: 'N/A' },
    ],
    software: [
      { tipo: 'SISTEMA OPERATIVO', nombre: 'Windows 7MiniOS', version: 'v26.00', licencia: 'Codigo Abierto', actualizaciones: 'N/A' },
      { tipo: 'SISTEMA OFIMÁTICO', nombre: 'Office', version: '2010', licencia: 'Codigo Cerrado', actualizaciones: 'N/A' },
      { tipo: 'COMPRESOR', nombre: 'N/A', version: 'N/A', licencia: 'N/A', actualizaciones: 'N/A' },
      { tipo: 'ADOBE READER', nombre: 'N/A', version: 'N/A', licencia: 'N/A', actualizaciones: 'N/A' },
      { tipo: 'OTROS', nombre: 'N/A', version: 'N/A', licencia: 'N/A', actualizaciones: 'N/A' },
      { tipo: 'OTROS', nombre: 'N/A', version: 'N/A', licencia: 'N/A', actualizaciones: 'N/A' },
    ]
  },
  {
    id: '4',
    fichaNumber: '04',
    equipoNumber: '00088965',
    comunidad: 'Unidad Educativa Estatal "JORGE SEMIDEY"',
    direccion: 'Calle Los Próceres del sector Francisco de Miranda. Maracay Edo. Aragua',
    telefono: '0424-3256374',
    tipo: 'LAPTOP',
    hardwareInterno: [
      { componente: 'GABINETE', marca: 'N/A', modelo: 'N/A', serial: 'N/A', capacidad: 'N/A', estado: 'N/A' },
      { componente: 'MEMORIA RAM 1', marca: 'OEM USI', modelo: '64MX8', serial: 'SRX23456785237871', capacidad: '1GB 667 MHz', estado: 'Bueno' },
      { componente: 'MEMORIA RAM 2', marca: 'N/A', modelo: 'N/A', serial: 'N/A', capacidad: 'N/A', estado: 'N/A' },
      { componente: 'DISCO DURO 1', marca: 'SAMSUNG', modelo: 'HS040HB', serial: 'S0UAJ16S232744', capacidad: '40GB HDD', estado: 'Bueno' },
      { componente: 'DISCO DURO 2', marca: 'N/A', modelo: 'N/A', serial: 'N/A', capacidad: 'N/A', estado: 'N/A' },
      { componente: 'UNIDAD DE CD/DVD', marca: 'N/A', modelo: 'N/A', serial: 'N/A', capacidad: 'N/A', estado: 'N/A' },
      { componente: 'FUENTE DE PODER', marca: 'LI SHIN INTERNATIONAL ENTERPRISE CORP.', modelo: '0225C2040', serial: 'A30849185149', capacidad: '20V - 2A', estado: 'Bueno' },
      { componente: 'PROCESADOR', marca: 'intel', modelo: 'Atom', serial: 'N270', capacidad: '1600MHz', estado: 'Bueno' },
      { componente: 'PUERTOS USB', marca: 'Integrados', modelo: 'Integrados', serial: '2 Integrados', capacidad: 'USB 1.0, 2.0', estado: 'Bueno' },
      { componente: 'PUERTO MINI PCI EXPRESS', marca: 'Integrados', modelo: 'Integrados', serial: 'Integrados', capacidad: 'Integrados', estado: 'Bueno' },
      { componente: 'PUERTOS AUX', marca: 'Integrados', modelo: 'Integrados', serial: 'Integrados', capacidad: 'Integrados', estado: 'Bueno' },
      { componente: 'PUERTO ETHERN', marca: 'Integrados', modelo: 'Integrados', serial: 'Integrados', capacidad: 'Integrados', estado: 'Bueno' },
    ],
    hardwarePerifericos: [
      { componente: 'MONITOR', marca: 'N/A', modelo: 'Integrados', serial: 'N/A', estado: 'Regular' },
      { componente: 'TECLADO', marca: 'N/A', modelo: 'Integrados', serial: 'N/A', estado: 'Bueno' },
      { componente: 'MOUSE', marca: 'N/A', modelo: 'Integrados', serial: 'N/A', estado: 'Bueno' },
      { componente: 'IMPRESORA', marca: 'N/A', modelo: 'N/A', serial: 'N/A', estado: 'N/A' },
      { componente: 'ESCANER', marca: 'N/A', modelo: 'N/A', serial: 'N/A', estado: 'N/A' },
      { componente: 'OTROS', marca: 'N/A', modelo: 'N/A', serial: 'N/A', estado: 'N/A' },
      { componente: 'OTROS', marca: 'N/A', modelo: 'N/A', serial: 'N/A', estado: 'N/A' },
    ],
    software: [
      { tipo: 'SISTEMA OPERATIVO', nombre: 'Windows 7MiniOS', version: 'v26.00', licencia: 'Codigo Abierto', actualizaciones: 'N/A' },
      { tipo: 'SISTEMA OFIMÁTICO', nombre: 'Office', version: '2010', licencia: 'Codigo Cerrado', actualizaciones: 'N/A' },
      { tipo: 'COMPRESOR', nombre: 'N/A', version: 'N/A', licencia: 'N/A', actualizaciones: 'N/A' },
      { tipo: 'ADOBE READER', nombre: 'N/A', version: 'N/A', licencia: 'N/A', actualizaciones: 'N/A' },
      { tipo: 'OTROS', nombre: 'N/A', version: 'N/A', licencia: 'N/A', actualizaciones: 'N/A' },
      { tipo: 'OTROS', nombre: 'N/A', version: 'N/A', licencia: 'N/A', actualizaciones: 'N/A' },
    ]
  },
  {
    id: '5',
    fichaNumber: '05',
    equipoNumber: '00093089',
    comunidad: 'Unidad Educativa Estatal "JORGE SEMIDEY"',
    direccion: 'Calle Los Próceres del sector Francisco de Miranda. Maracay Edo. Aragua',
    telefono: '0424-3256374',
    tipo: 'LAPTOP',
    hardwareInterno: [
      { componente: 'GABINETE', marca: 'N/A', modelo: 'N/A', serial: 'N/A', capacidad: 'N/A', estado: 'N/A' },
      { componente: 'MEMORIA RAM 1', marca: 'OEM USI', modelo: '64MX8', serial: 'SRX23456785224220', capacidad: '1 GB 667 MHz', estado: 'Bueno' },
      { componente: 'MEMORIA RAM 2', marca: 'N/A', modelo: 'N/A', serial: 'N/A', capacidad: 'N/A', estado: 'N/A' },
      { componente: 'DISCO DURO 1', marca: 'SAMSUNG', modelo: 'HS040HB', serial: 'S0UAJ16S232009', capacidad: '40GB HDD', estado: 'Bueno' },
      { componente: 'DISCO DURO 2', marca: 'N/A', modelo: 'N/A', serial: 'N/A', capacidad: 'N/A', estado: 'N/A' },
      { componente: 'UNIDAD DE CD/DVD', marca: 'N/A', modelo: 'N/A', serial: 'N/A', capacidad: 'N/A', estado: 'N/A' },
      { componente: 'FUENTE DE PODER', marca: 'LI SHIN INTERNATIONAL ENTERPRISE CORP.', modelo: '0225C2040', serial: 'A30848069010', capacidad: '20V - 2A', estado: 'Bueno' },
      { componente: 'PROCESADOR', marca: 'intel', modelo: 'Atom', serial: 'N270', capacidad: '1600MHz', estado: 'Bueno' },
      { componente: 'PUERTOS USB', marca: 'Integrados', modelo: 'Integrados', serial: '2 Integrados', capacidad: 'USB 1.0, 2.0', estado: 'Bueno' },
      { componente: 'PUERTO MINI PCI EXPRESS', marca: 'Integrados', modelo: 'Integrados', serial: 'Integrados', capacidad: 'Integrados', estado: 'Bueno' },
      { componente: 'PUERTOS AUX', marca: 'Integrados', modelo: 'Integrados', serial: 'Integrados', capacidad: 'Integrados', estado: 'Bueno' },
      { componente: 'PUERTO ETHERN', marca: 'Integrados', modelo: 'Integrados', serial: 'Integrados', capacidad: 'Integrados', estado: 'Bueno' },
    ],
    hardwarePerifericos: [
      { componente: 'MONITOR', marca: 'N/A', modelo: 'Integrados', serial: 'N/A', estado: 'Regular' },
      { componente: 'TECLADO', marca: 'N/A', modelo: 'Integrados', serial: 'N/A', estado: 'Bueno' },
      { componente: 'MOUSE', marca: 'N/A', modelo: 'Integrados', serial: 'N/A', estado: 'Bueno' },
      { componente: 'IMPRESORA', marca: 'N/A', modelo: 'N/A', serial: 'N/A', estado: 'N/A' },
      { componente: 'ESCANER', marca: 'N/A', modelo: 'N/A', serial: 'N/A', estado: 'N/A' },
      { componente: 'OTROS', marca: 'N/A', modelo: 'N/A', serial: 'N/A', estado: 'N/A' },
      { componente: 'OTROS', marca: 'N/A', modelo: 'N/A', serial: 'N/A', estado: 'N/A' },
    ],
    software: [
      { tipo: 'SISTEMA OPERATIVO', nombre: 'Windows 7MiniOS', version: 'v26.00', licencia: 'Codigo Abierto', actualizaciones: 'N/A' },
      { tipo: 'SISTEMA OFIMÁTICO', nombre: 'Office', version: '2010', licencia: 'Codigo Cerrado', actualizaciones: 'N/A' },
      { tipo: 'COMPRESOR', nombre: 'N/A', version: 'N/A', licencia: 'N/A', actualizaciones: 'N/A' },
      { tipo: 'ADOBE READER', nombre: 'N/A', version: 'N/A', licencia: 'N/A', actualizaciones: 'N/A' },
      { tipo: 'OTROS', nombre: 'N/A', version: 'N/A', licencia: 'N/A', actualizaciones: 'N/A' },
      { tipo: 'OTROS', nombre: 'N/A', version: 'N/A', licencia: 'N/A', actualizaciones: 'N/A' },
    ]
  }
];
