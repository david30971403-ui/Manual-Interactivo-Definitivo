import React from 'react';
import { TechnicalSheetData } from '../data/fichasTecnicas';

interface TechnicalSheetModalProps {
  data: TechnicalSheetData;
  onClose: () => void;
}

const TechnicalSheetModal: React.FC<TechnicalSheetModalProps> = ({ data, onClose }) => {
  return (
    <div className="fixed inset-0 z-[6000] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white w-full max-w-5xl rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header Modal */}
        <div className="flex justify-between items-center p-4 border-b border-slate-200 bg-slate-50">
          <h3 className="text-lg font-black uppercase text-slate-800">Ficha Técnica Nº {data.fichaNumber}</h3>
          <button 
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 hover:bg-red-500 hover:text-white transition-colors font-bold"
          >
            ✕
          </button>
        </div>

        {/* Content - Scrollable */}
        <div className="overflow-y-auto p-6 md:p-10 bg-white">
          <div className="border-2 border-black text-xs md:text-sm font-sans text-black">
            
            {/* Title */}
            <div className="text-center font-bold border-b border-black py-1 uppercase">
              FICHA TÉCNICA
            </div>

            {/* Header Info Grid */}
            <div className="grid grid-cols-[200px_1fr] border-b border-black">
              <div className="p-2 font-bold border-r border-black flex items-center">NOMBRE DE LA COMUNIDAD:</div>
              <div className="p-2 flex items-center">{data.comunidad}</div>
            </div>
            <div className="grid grid-cols-[200px_1fr] border-b border-black">
              <div className="p-2 font-bold border-r border-black flex items-center">DIRECCIÓN:</div>
              <div className="p-2 flex items-center">{data.direccion}</div>
            </div>
            <div className="grid grid-cols-[200px_1fr] border-b border-black">
              <div className="p-2 font-bold border-r border-black flex items-center">TELF:</div>
              <div className="p-2 flex items-center">{data.telefono}</div>
            </div>

            {/* Checkboxes Section */}
            <div className="grid grid-cols-[150px_150px_1fr_1fr] border-b border-black">
              <div className="p-2 font-bold border-r border-black flex flex-col justify-center">
                TIPO DE COMPUTADOR:
              </div>
              <div className="border-r border-black">
                <div className="border-b border-black p-2 flex justify-between items-center">
                  <span>PC:</span>
                  <div className={`w-6 h-6 border border-black flex items-center justify-center ${data.tipo === 'PC' ? 'bg-black text-white' : ''}`}>
                    {data.tipo === 'PC' && '✓'}
                  </div>
                </div>
                <div className="p-2 flex justify-between items-center">
                  <span>LAPTOP:</span>
                  <div className={`w-6 h-6 border border-black flex items-center justify-center ${data.tipo === 'LAPTOP' ? 'bg-black text-white' : ''}`}>
                    {data.tipo === 'LAPTOP' && '✓'}
                  </div>
                </div>
              </div>
              <div className="border-r border-black p-2 flex items-center gap-2">
                <span className="font-bold">Nº DE FICHA:</span>
                <span className="font-mono text-lg">{data.fichaNumber}</span>
              </div>
              <div className="p-2 flex items-center gap-2">
                <span className="font-bold">Nº DE EQUIPO:</span>
                <span className="font-mono text-lg">{data.equipoNumber}</span>
              </div>
            </div>

            {/* Hardware Specs Title */}
            <div className="text-center font-bold border-b border-black py-1 uppercase bg-cyan-400">
              ESPECIFICACIONES DEL PC
            </div>

            {/* Hardware Table Header */}
            <div className="grid grid-cols-[200px_1fr_1fr_1fr_1fr_100px] bg-cyan-400 border-b border-black text-center font-bold text-[10px] md:text-xs">
              <div className="p-1 border-r border-black flex items-center justify-center">HARDWARE<br/>(COMPONENTES INTERNOS)</div>
              <div className="p-1 border-r border-black flex items-center justify-center">MARCA</div>
              <div className="p-1 border-r border-black flex items-center justify-center">MODELO</div>
              <div className="p-1 border-r border-black flex items-center justify-center">REF/CÓDIGO/SERIAL</div>
              <div className="p-1 border-r border-black flex items-center justify-center">CAPACIDAD VELOCIDAD</div>
              <div className="p-1 flex items-center justify-center">ESTADO<br/>(M-R-B)</div>
            </div>

            {/* Hardware Rows */}
            {data.hardwareInterno.map((item, idx) => (
              <div key={idx} className="grid grid-cols-[200px_1fr_1fr_1fr_1fr_100px] border-b border-black text-[10px] md:text-xs">
                <div className="p-1 border-r border-black font-bold bg-gray-50 uppercase">{item.componente}</div>
                <div className="p-1 border-r border-black text-center font-bold underline">{item.marca}</div>
                <div className="p-1 border-r border-black text-center font-bold underline">{item.modelo}</div>
                <div className="p-1 border-r border-black text-center font-bold underline">{item.serial}</div>
                <div className="p-1 border-r border-black text-center font-bold underline">{item.capacidad}</div>
                <div className="p-1 text-center font-bold underline">{item.estado}</div>
              </div>
            ))}

            {/* Peripherals Header */}
            <div className="grid grid-cols-[200px_1fr_1fr_1fr_100px] bg-lime-400 border-b border-black text-center font-bold text-[10px] md:text-xs">
              <div className="p-1 border-r border-black flex items-center justify-center">HARDWARE<br/>(PERIFÉRICOS)</div>
              <div className="p-1 border-r border-black flex items-center justify-center">MARCA</div>
              <div className="p-1 border-r border-black flex items-center justify-center">MODELO</div>
              <div className="p-1 border-r border-black flex items-center justify-center">REF/CÓDIGO SERIAL</div>
              <div className="p-1 flex items-center justify-center">ESTADO<br/>(M-R-B)</div>
            </div>

            {/* Peripherals Rows */}
            {data.hardwarePerifericos.map((item, idx) => (
              <div key={idx} className="grid grid-cols-[200px_1fr_1fr_1fr_100px] border-b border-black text-[10px] md:text-xs">
                <div className="p-1 border-r border-black font-bold bg-gray-50 uppercase">{item.componente}</div>
                <div className="p-1 border-r border-black text-center font-bold underline">{item.marca}</div>
                <div className="p-1 border-r border-black text-center font-bold underline">{item.modelo}</div>
                <div className="p-1 border-r border-black text-center font-bold underline">{item.serial}</div>
                <div className="p-1 text-center font-bold underline">{item.estado}</div>
              </div>
            ))}

            {/* Software Header */}
            <div className="grid grid-cols-[200px_1fr_1fr_1fr_1fr] bg-red-300 border-b border-black text-center font-bold text-[10px] md:text-xs">
              <div className="p-1 border-r border-black flex items-center justify-center">SOFTWARE</div>
              <div className="p-1 border-r border-black flex items-center justify-center">NOMBRE</div>
              <div className="p-1 border-r border-black flex items-center justify-center">VERSIÓN</div>
              <div className="p-1 border-r border-black flex items-center justify-center">LICENCIA</div>
              <div className="p-1 flex items-center justify-center">ACTUALIZACIONES</div>
            </div>

            {/* Software Rows */}
            {data.software.map((item, idx) => (
              <div key={idx} className={`grid grid-cols-[200px_1fr_1fr_1fr_1fr] ${idx === data.software.length - 1 ? '' : 'border-b border-black'} text-[10px] md:text-xs`}>
                <div className="p-1 border-r border-black font-bold bg-gray-50 uppercase">{item.tipo}</div>
                <div className="p-1 border-r border-black text-center font-bold underline">{item.nombre}</div>
                <div className="p-1 border-r border-black text-center font-bold underline">{item.version}</div>
                <div className="p-1 border-r border-black text-center font-bold underline">{item.licencia}</div>
                <div className="p-1 text-center font-bold underline">{item.actualizaciones}</div>
              </div>
            ))}

          </div>
        </div>
        
        {/* Footer Modal */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
             <button 
               onClick={() => window.print()} 
               className="mr-4 px-4 py-2 bg-slate-200 text-slate-700 font-bold rounded hover:bg-slate-300 transition-colors uppercase text-xs"
             >
               Imprimir
             </button>
             <button 
               onClick={onClose} 
               className="px-6 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition-colors uppercase text-xs"
             >
               Cerrar
             </button>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSheetModal;
