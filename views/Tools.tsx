import React, { useState } from 'react';
import AssetImage from '../components/AssetImage.tsx';

const Tools: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toolCategories = [
    {
      cat: "1. Herramientas para cortar y sujetar",
      items: [
        { n: "Pinzas de corte (alicates de corte)", d: "Herramienta diseñada para seccionar cables finos, patas de componentes electrónicos y pequeños terminales metálicos." },
        { n: "Mini alicate de punta", d: "Alicate de precisión con puntas delgadas, ideal para sujetar piezas pequeñas en espacios reducidos." }
      ]
    },
    {
      cat: "2. Herramientas para atornillar",
      items: [
        { n: "Destornillador de trinquete", d: "Mecanismo de ratchet que permite girar sin reposicionar la mano constantemente." },
        { n: "Puntas intercambiables", d: "Juego de puntas modulares: plano, Phillips, Torx y hexagonal para diferentes tipos de tornillos." },
        { n: "Destornilladores de precisión", d: "Especializados para tornillería milimétrica presente en placas electrónicas y dispositivos móviles." },
        { n: "Destornilladores grandes", d: "Herramientas robustas para tornillos de mayor tamaño en carcasas o fuentes de poder." }
      ]
    },
    {
      cat: "3. Corte, apertura y manipulación fina",
      items: [
        { n: "Cutter de precisión", d: "Cuchilla extremadamente afilada para cortes limpios en cables, cintas y materiales aislantes." },
        { n: "Herramientas tipo spudger", d: "Palancas de plástico o metal suave diseñadas para abrir carcasas sin generar daños estéticos." },
        { n: "Extractor DIP", d: "Pinza especializada para extraer circuitos integrados de sus zócalos de forma segura." }
      ]
    },
    {
      cat: "4. Herramientas de soldadura",
      items: [
        { n: "Soldador eléctrico", d: "Dispositivo térmico para fundir estaño y realizar uniones eléctricas permanentes." },
        { n: "Rollo de estaño", d: "Aleación metálica de alta conductividad utilizada como aporte en la soldadura electrónica." },
        { n: "Bomba desoldadora", d: "Herramienta de vacío por succión para retirar el estaño derretido en reparaciones." },
        { n: "Jeringa de flux", d: "Agente químico que facilita la adherencia del estaño y mejora la calidad de la soldadura." }
      ]
    },
    {
      cat: "5. Herramientas para cables y conectores",
      items: [
        { n: "Crimpeadora / Pelacables", d: "Herramienta multifunción para retirar aislante y fijar terminales a conductores eléctricos." },
        { n: "Ponchadora RJ45/RJ11", d: "Diseñada para instalar conectores de red y telefonía mediante presión controlada." }
      ]
    },
    {
      cat: "6. Herramientas generales",
      items: [
        { n: "Llave inglesa", d: "Llave con boca regulable para ajustar tuercas y pernos de diversos tamaños en soportes mecánicos." }
      ]
    },
    {
      cat: "7. Prueba y diagnóstico",
      items: [
        { n: "Multímetro Digital", d: "Instrumento versátil para medir voltajes, resistencias y continuidad en circuitos electrónicos." },
        { n: "Probador de red", d: "Dispositivo que analiza la continuidad y el mapa de hilos en cables UTP para redes LAN." },
        { n: "Probador de fuente de poder", d: "Verifica rápidamente si los voltajes de una fuente ATX están dentro de los rangos seguros." }
      ]
    },
    {
      cat: "8. Equipos auxiliares",
      items: [
        { n: "Sopladora", d: "Herramienta de flujo de aire a presión para remover el polvo acumulado en disipadores y ventiladores." },
        { n: "Pulsera antiestática", d: "Accesorio de seguridad que conecta al técnico a tierra para evitar descargas electrostáticas (ESD) fatales." }
      ]
    }
  ];

  return (
    <div className="space-y-20 animate-in fade-in duration-700 pb-20">
      <header className="flex flex-col md:flex-row justify-between items-center gap-10 border-b-8 border-slate-900 pb-8">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-center md:text-left text-slate-900">KIT DE<br/>HERRAMIENTAS.</h2>
        
        <div className="relative w-full md:w-auto min-w-[320px]">
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full bg-white border-2 border-slate-200 px-8 py-5 font-black uppercase flex items-center justify-between hover:border-blue-600 hover:text-blue-600 transition-all shadow-sm rounded-xl"
          >
            <span className="tracking-tight">{selectedCategory !== null ? toolCategories[selectedCategory].cat : 'Seleccionar Categoría'}</span>
            <svg className={`w-6 h-6 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>

          {isDropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-slate-100 z-[100] shadow-xl rounded-xl overflow-hidden animate-in slide-in-from-top-2 duration-200">
              <button 
                onClick={() => { setSelectedCategory(null); setIsDropdownOpen(false); }}
                className="w-full text-left px-8 py-4 font-bold uppercase tracking-tight hover:bg-slate-50 border-b border-slate-100"
              >
                Ver Todas las Herramientas
              </button>
              {toolCategories.map((category, idx) => (
                <button 
                  key={idx}
                  onClick={() => { setSelectedCategory(idx); setIsDropdownOpen(false); }}
                  className={`w-full text-left px-8 py-4 font-bold uppercase tracking-tight hover:bg-blue-50 transition-colors border-b border-slate-100 last:border-b-0 ${selectedCategory === idx ? 'bg-blue-50 text-blue-600' : 'text-slate-600'}`}
                >
                  {category.cat}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      <div className="space-y-24">
        {toolCategories.map((category, i) => {
          if (selectedCategory !== null && selectedCategory !== i) return null;

          return (
            <div key={i} className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
               <h3 className="text-3xl md:text-4xl font-black border-b-4 border-slate-900 pb-4 uppercase tracking-tight text-blue-600">
                 {category.cat}
               </h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {category.items.map((tool, idx) => (
                    <div key={idx} className="flex flex-col group border border-slate-100 p-6 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-50/50 transition-all bg-white rounded-2xl relative overflow-hidden h-full">
                       <div className="overflow-hidden rounded-xl mb-6 shadow-sm bg-slate-100 h-48">
                          {/* Espacio Herramienta */}
                          <AssetImage className="w-full h-full object-cover" alt={tool.n} />
                       </div>
                       <h4 className="text-xl font-black text-blue-600 uppercase tracking-tighter leading-tight mb-2 group-hover:scale-105 transition-transform origin-left">
                         {tool.n}
                       </h4>
                       <p className="text-sm font-medium text-slate-500 leading-relaxed flex-grow">
                         {tool.d}
                       </p>
                    </div>
                  ))}
               </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tools;