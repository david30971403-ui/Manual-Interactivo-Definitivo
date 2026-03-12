import React, { useState } from 'react';
import AssetImage from '../components/AssetImage.tsx';
import { FICHAS_TECNICAS, TechnicalSheetData } from '../data/fichasTecnicas.ts';
import TechnicalSheetModal from '../components/TechnicalSheetModal.tsx';

const Components: React.FC = () => {
  const [selectedSheet, setSelectedSheet] = useState<TechnicalSheetData | null>(null);

  const hardwareItems = [
    { 
      t: 'Procesador', 
      v: 'Intel Atom N270 (1.6 GHz)', 
      d: 'Microprocesador de bajo consumo diseñado para equipos portátiles educativos. Su arquitectura permite ejecutar aplicaciones básicas, navegadores, programas escolares y sistemas Linux livianos.'
    },
    { 
      t: 'Chipset', 
      v: 'Intel 945GSE', 
      d: 'Controlador principal que gestiona la comunicación entre CPU, memoria RAM, video integrado y dispositivos periféricos. Incluye gráficos integrados Intel GMA 950.'
    },
    { 
      t: 'Memoria RAM', 
      v: '1GB DDR2 667 MHz', 
      d: 'Memoria de acceso rápido que almacena información temporal. Crucial para el rendimiento al abrir programas, navegar o ejecutar aplicaciones educativas.'
    },
    { 
      t: 'Disco Duro', 
      v: '40GB PATA 1.8"', 
      d: 'Almacena el sistema operativo, documentos, configuraciones y programas escolares. Es una unidad mecánica pequeña diseñada para equipos compactos.'
    },
    { 
      t: 'Pantalla', 
      v: 'TFT de 8"', 
      d: 'Panel compacto diseñado para bajo consumo. Adecuado para lectura, tareas básicas y uso escolar continuo.'
    },
    { 
      t: 'Resolución Máxima', 
      v: '1024x600', 
      d: 'Ofrece calidad estándar para equipos portátiles educativos, suficiente para textos, aplicaciones escolares y navegación web.'
    },
    { 
      t: 'Cámara Web', 
      v: '0.37 MP', 
      d: 'Diseñada para videollamadas básicas en plataformas educativas. Su resolución limitada permite uso funcional en condiciones de buena iluminación.'
    },
    { 
      t: 'Tarjeta Wi-Fi', 
      v: 'RT73 USB Wireless LAN', 
      d: 'Permite conexión inalámbrica estable bajo los estándares 802.11 b/g. Adecuada para navegación escolar y plataformas educativas.'
    }
  ];

  const softwareItems = [
    { 
      t: 'Sistema Operativo', 
      v: 'Canaima GNU/Linux', 
      d: 'Basado en Debian. Incluye herramientas educativas, aplicaciones de productividad y entornos livianos que optimizan el rendimiento del equipo.'
    },
    { 
      t: 'Controladores', 
      v: 'Drivers del Sistema', 
      d: 'Incluyen drivers para Wi-Fi, gráficos Intel, audio, cámara web y puertos internos. Esenciales para reconocer el hardware.'
    },
    { 
      t: 'Aplicaciones', 
      v: 'Software Educativo', 
      d: 'Programas preinstalados para lectura, matemática, actividades interactivas, navegación y escritura.'
    },
    { 
      t: 'Firmware', 
      v: 'BIOS', 
      d: 'Permite la comunicación entre hardware y software. Controla el arranque del sistema y la configuración primaria del equipo.'
    }
  ];

  return (
    <div className="space-y-24 animate-in fade-in duration-700 pb-20">
      <header className="border-b-8 border-slate-900 pb-8">
        <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none text-slate-900">HARDWARE<br/>Y <span className="text-blue-600">SOFTWARE.</span></h2>
        <p className="text-xl font-bold mt-4 text-slate-500 uppercase tracking-widest">Especificaciones Técnicas Detalladas.</p>
      </header>

      {/* Hardware Section */}
      <section className="space-y-12">
        <div className="flex items-center gap-4">
          <h3 className="text-3xl font-black uppercase text-slate-900 tracking-tight">Componentes de Hardware</h3>
          <div className="flex-grow h-[1px] bg-slate-200"></div>
        </div>
        <p className="text-lg font-medium text-slate-500 max-w-3xl">Elementos físicos que conforman la estructura de la Canaima.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {hardwareItems.map((item, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-6 p-6 bg-white border-2 border-slate-100 rounded-3xl hover:border-blue-200 transition-all group shadow-sm">
               <div className="w-full md:w-32 h-32 flex-shrink-0 overflow-hidden rounded-2xl bg-slate-50">
                  <AssetImage className="w-full h-full object-cover" alt={item.t} />
               </div>
               <div className="space-y-2">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-blue-600 tracking-widest uppercase mb-1">{item.t}</span>
                    <h4 className="text-xl font-black tracking-tighter text-slate-900 uppercase">{item.v}</h4>
                  </div>
                  <p className="text-xs font-bold text-slate-500 leading-relaxed uppercase opacity-80">{item.d}</p>
               </div>
            </div>
          ))}
        </div>

        {/* Quick Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 space-y-2">
              <h5 className="text-[10px] font-black text-slate-400 tracking-widest uppercase">Interfaces y Puertos</h5>
              <ul className="text-xs font-black text-slate-700 space-y-1 uppercase">
                 <li>• 2 puertos USB (1.0 / 2.0)</li>
                 <li>• 1 puerto VGA externo</li>
                 <li>• 1 puerto Ethernet RJ-45</li>
                 <li>• 1 lector de tarjetas SD</li>
              </ul>
           </div>
           <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 space-y-2">
              <h5 className="text-[10px] font-black text-slate-400 tracking-widest uppercase">Batería y Peso</h5>
              <ul className="text-xs font-black text-slate-700 space-y-1 uppercase">
                 <li>• Ion-litio (2 celdas)</li>
                 <li>• Autonomía: 3 - 3.5 horas</li>
                 <li>• Peso: 1.4 kg (Ligera)</li>
              </ul>
           </div>
           <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 space-y-2">
              <h5 className="text-[10px] font-black text-slate-400 tracking-widest uppercase">Audio y Multimedia</h5>
              <ul className="text-xs font-black text-slate-700 space-y-1 uppercase">
                 <li>• Altavoces Internos</li>
                 <li>• Micrófono 3.5 mm</li>
                 <li>• Salida Audio 3.5 mm</li>
              </ul>
           </div>
        </div>
      </section>

      {/* Software Section */}
      <section className="space-y-12">
        <div className="flex items-center gap-4">
          <h3 className="text-3xl font-black uppercase text-slate-900 tracking-tight">Componentes de Software</h3>
          <div className="flex-grow h-[1px] bg-slate-200"></div>
        </div>
        <p className="text-lg font-medium text-slate-500 max-w-3xl">Programas, controladores y sistemas que permiten el funcionamiento de la Canaima.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           {softwareItems.map((item, i) => (
             <div key={i} className="bg-blue-600 p-6 rounded-3xl text-white group hover:bg-slate-900 transition-all shadow-xl shadow-blue-100 flex flex-col sm:flex-row gap-6 items-center sm:items-start relative overflow-hidden">
                <div className="w-24 h-24 rounded-2xl bg-white/10 overflow-hidden flex-shrink-0 border-2 border-white/20">
                   <AssetImage className="w-full h-full object-cover bg-white/20" alt={item.t} />
                </div>
                <div className="space-y-4 relative z-10">
                    <div className="flex justify-between items-start">
                       <h4 className="text-2xl font-black tracking-tighter uppercase leading-none">{item.t}<br/><span className="text-blue-200 group-hover:text-blue-400">{item.v}</span></h4>
                       <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold text-sm">0{i+1}</div>
                    </div>
                    <p className="text-sm font-bold opacity-80 uppercase leading-relaxed tracking-wide">
                      {item.d}
                    </p>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* Fichas Técnicas Section */}
      <section className="space-y-12">
        <div className="flex items-center gap-4">
          <h3 className="text-3xl font-black uppercase text-slate-900 tracking-tight">Fichas Técnicas de Equipos</h3>
          <div className="flex-grow h-[1px] bg-slate-200"></div>
        </div>
        <p className="text-lg font-medium text-slate-500 max-w-3xl">Registro detallado de las especificaciones técnicas de los equipos de la institución.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {FICHAS_TECNICAS.map((ficha) => (
            <button
              key={ficha.id}
              onClick={() => setSelectedSheet(ficha)}
              className="group relative bg-white border-2 border-slate-100 hover:border-blue-600 rounded-2xl p-6 transition-all hover:shadow-xl hover:-translate-y-1 text-left"
            >
              <div className="absolute top-4 right-4 text-slate-200 group-hover:text-blue-100 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="relative z-10">
                <span className="text-[10px] font-black text-blue-600 tracking-widest uppercase mb-1 block">FICHA Nº {ficha.fichaNumber}</span>
                <h4 className="text-xl font-black text-slate-900 mb-2">EQUIPO<br/>{ficha.equipoNumber}</h4>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider group-hover:text-blue-600 transition-colors">
                  Ver Detalles →
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Technical Diagram Placeholder Visual */}
      <section className="relative h-96 bg-slate-900 rounded-[3rem] overflow-hidden flex items-center justify-center group shadow-2xl">
         {/* Espacio Fondo PCB */}
         <AssetImage className="absolute inset-0 w-full h-full object-cover opacity-50" alt="FONDO PCB" />
         <div className="relative z-10 text-center space-y-6 px-6 pointer-events-none">
            <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">Soberanía Tecnológica</h3>
            <p className="text-blue-400 font-bold uppercase tracking-widest text-sm max-w-xl mx-auto">
              Cada componente ha sido integrado para garantizar el libre acceso a la educación mediante software libre y hardware reparable.
            </p>
            <div className="pt-4 flex justify-center gap-4">
               <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
               <div className="w-12 h-1 bg-white rounded-full opacity-20"></div>
               <div className="w-12 h-1 bg-white rounded-full opacity-20"></div>
            </div>
         </div>
      </section>

      {selectedSheet && (
        <TechnicalSheetModal 
          data={selectedSheet} 
          onClose={() => setSelectedSheet(null)} 
        />
      )}
    </div>
  );
};

export default Components;