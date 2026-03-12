import React from 'react';
import { TechnicalSheetData } from '../data/fichasTecnicas';

interface TechnicalSheetModalProps {
  data: TechnicalSheetData;
  onClose: () => void;
}

const TechnicalSheetModal: React.FC<TechnicalSheetModalProps> = ({ data, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[6000] p-4 overflow-y-auto">
      <div className="bg-white rounded-xl max-w-5xl w-full my-8 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="flex justify-between items-center p-4 border-b bg-slate-50 sticky top-0 z-10">
          <h2 className="text-xl font-black uppercase tracking-widest text-slate-800">Ficha Técnica Nº {data.fichaNumber}</h2>
          <button onClick={onClose} className="text-3xl leading-none hover:text-red-600 transition-colors">&times;</button>
        </div>
        
        <div className="p-6 overflow-y-auto">
          {/* Header Table */}
          <div className="border-2 border-slate-800 mb-6 text-xs md:text-sm">
            <div className="border-b-2 border-slate-800 p-2 text-center font-black uppercase tracking-widest text-lg">
              FICHA TÉCNICA
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 border-b border-slate-800">
              <div className="p-2 font-bold border-r border-slate-800 md:col-span-1">NOMBRE DE LA COMUNIDAD:</div>
              <div className="p-2 md:col-span-3">Unidad Educativa Estadal "JORGE SEMIDEY"</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 border-b border-slate-800">
              <div className="p-2 font-bold border-r border-slate-800 md:col-span-1">DIRECCIÓN:</div>
              <div className="p-2 md:col-span-3">Calle Los Próceres del sector Francisco de Miranda. Maracay Edo. Aragua</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 border-b border-slate-800">
              <div className="p-2 font-bold border-r border-slate-800 md:col-span-1">TELF:</div>
              <div className="p-2 md:col-span-3">0424-3256374</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4">
              <div className="p-2 font-bold border-r border-slate-800 md:col-span-1 flex items-center">TIPO DE COMPUTADOR:</div>
              <div className="p-2 border-r border-slate-800 md:col-span-1 flex flex-col justify-center gap-2">
                <div className="flex items-center justify-between">
                  <span>PC:</span>
                  <div className="w-5 h-5 border-2 border-slate-800"></div>
                </div>
                <div className="flex items-center justify-between">
                  <span>LAPTOP:</span>
                  <div className="w-5 h-5 border-2 border-slate-800 flex items-center justify-center font-bold text-lg">✓</div>
                </div>
              </div>
              <div className="p-2 border-r border-slate-800 md:col-span-1 flex items-center gap-2">
                <span className="font-bold">Nº DE FICHA:</span>
                <span>{data.fichaNumber}</span>
              </div>
              <div className="p-2 md:col-span-1 flex items-center gap-2">
                <span className="font-bold">Nº DE EQUIPO:</span>
                <span>{data.equipoNumber}</span>
              </div>
            </div>
          </div>

          <h3 className="text-center font-black text-lg uppercase tracking-widest mb-2">ESPECIFICACIONES DEL PC</h3>

          {/* Hardware Interno Table */}
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-xs md:text-sm border-collapse border-2 border-slate-800">
              <thead>
                <tr className="bg-[#00b0f0] text-black text-center font-bold">
                  <th className="border border-slate-800 p-2 w-1/5">HARDWARE<br/>(COMPONENTES INTERNOS).</th>
                  <th className="border border-slate-800 p-2">MARCA</th>
                  <th className="border border-slate-800 p-2">MODELO</th>
                  <th className="border border-slate-800 p-2">REF/CÓDIGO/SERIAL</th>
                  <th className="border border-slate-800 p-2">CAPACIDAD<br/>VELOCIDAD</th>
                  <th className="border border-slate-800 p-2">ESTADO<br/>(M-R-B)</th>
                </tr>
              </thead>
              <tbody>
                {data.hardwareInterno.map((row, idx) => (
                  <tr key={idx} className="text-center">
                    <td className="border border-slate-800 p-1 font-bold text-left">{row.componente}</td>
                    <td className="border border-slate-800 p-1">{row.marca}</td>
                    <td className="border border-slate-800 p-1">{row.modelo}</td>
                    <td className="border border-slate-800 p-1">{row.serial}</td>
                    <td className="border border-slate-800 p-1">{row.capacidad}</td>
                    <td className="border border-slate-800 p-1">{row.estado}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Hardware Periferico Table */}
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-xs md:text-sm border-collapse border-2 border-slate-800">
              <thead>
                <tr className="bg-[#92d050] text-black text-center font-bold">
                  <th className="border border-slate-800 p-2 w-1/5">HARDWARE<br/>(PERIFÉRICOS).</th>
                  <th className="border border-slate-800 p-2">MARCA</th>
                  <th className="border border-slate-800 p-2">MODELO</th>
                  <th className="border border-slate-800 p-2" colSpan={2}>REF/CÓDIGO<br/>SERIAL</th>
                  <th className="border border-slate-800 p-2">ESTADO<br/>(M-R-B)</th>
                </tr>
              </thead>
              <tbody>
                {data.hardwarePeriferico.map((row, idx) => (
                  <tr key={idx} className="text-center">
                    <td className="border border-slate-800 p-1 font-bold text-left">{row.componente}</td>
                    <td className="border border-slate-800 p-1">{row.marca}</td>
                    <td className="border border-slate-800 p-1">{row.modelo}</td>
                    <td className="border border-slate-800 p-1" colSpan={2}>{row.serial}</td>
                    <td className="border border-slate-800 p-1">{row.estado}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Software Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-xs md:text-sm border-collapse border-2 border-slate-800">
              <thead>
                <tr className="bg-[#e6b8b7] text-black text-center font-bold">
                  <th className="border border-slate-800 p-2 w-1/5">SOFTWARE</th>
                  <th className="border border-slate-800 p-2">NOMBRE</th>
                  <th className="border border-slate-800 p-2">VERSIÓN</th>
                  <th className="border border-slate-800 p-2" colSpan={2}>LICENCIA</th>
                  <th className="border border-slate-800 p-2">ACTUALIZACIONES</th>
                </tr>
              </thead>
              <tbody>
                {data.software.map((row, idx) => (
                  <tr key={idx} className="text-center">
                    <td className="border border-slate-800 p-1 font-bold text-left">{row.componente}</td>
                    <td className="border border-slate-800 p-1">{row.nombre}</td>
                    <td className="border border-slate-800 p-1">{row.version}</td>
                    <td className="border border-slate-800 p-1" colSpan={2}>{row.licencia}</td>
                    <td className="border border-slate-800 p-1">{row.actualizaciones}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TechnicalSheetModal;
