import React from 'react';

const Credits: React.FC = () => {
  const team = [
    { name: 'Victor', lastName: 'Alvarez', id: '30.971.473', role: 'Trayecto 1 Seccion 5' },
    { name: 'Juan', lastName: 'Gudiño', id: '32.016.726', role: 'Trayecto 1 Seccion 5' },
    { name: 'Endry', lastName: 'Carrillo', id: '31.092.361', role: 'Trayecto 1 Seccion 5' },
  ];

  const acknowledgments = [
    {
      role: "Profesora de Proyecto",
      name: "Prof. Elizabeth Duarte",
      desc: "Por su guía y apoyo constante en la realización de este manual."
    },
    {
      role: "Profesor Tutor",
      name: "Prof. Vicente Cifuentes",
      desc: "Por su ayuda invaluable con las correcciones técnicas del proyecto."
    },
    {
      role: "Herramientas y Estructura",
      name: "Prof. Anger Martinez y Kervin Licett",
      desc: "Por enseñarnos las herramientas a usar y la estructura del manual."
    }
  ];

  return (
    <div className="space-y-32 pb-32 animate-in fade-in duration-700">
      <header className="border-b-8 border-slate-900 pb-8">
        <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none text-slate-900">AUTORÍA Y<br/><span className="text-blue-600">CRÉDITOS.</span></h2>
        <p className="text-xl font-bold mt-4 text-slate-400 uppercase tracking-widest">Reconocimiento Académico e Institucional.</p>
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-24">
         <div className="space-y-8">
            <h4 className="text-4xl font-black uppercase tracking-tight text-slate-900 border-l-8 border-blue-600 pl-8">AGRADECIMIENTOS</h4>
            <div className="space-y-6 text-lg leading-relaxed text-slate-600 font-medium text-justify">
              <p>
                Agradecemos enormemente a Dios por llevarnos por el camino del bien y lograr nuestros sueños de graduarnos con todo lo que nos proponemos en este futuro.
              </p>
              <p>
                También agradecemos a las personas más valiosas de nuestras vidas, que son nuestros padres y maestros, quienes nos han ayudado y apoyado en todo momento, moral y emocionalmente a cada uno de nosotros, y por darnos la oportunidad de vivir y conocer nuevas etapas inolvidables para todos nosotros como el grupo de Informática, trayecto 1, sección 5.
              </p>
            </div>
         </div>
         <div className="space-y-12">
            <h4 className="text-2xl font-black uppercase tracking-widest text-blue-600">MENCIONES ESPECIALES</h4>
            <ul className="space-y-10">
               {acknowledgments.map((ack, idx) => (
                 <li key={idx} className="border-b-2 border-slate-100 pb-6 last:border-0">
                    <p className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] mb-1">{ack.role}</p>
                    <p className="text-2xl font-black uppercase tracking-tighter text-slate-900 mb-2">{ack.name}</p>
                    <p className="text-sm font-bold text-slate-500 italic">"{ack.desc}"</p>
                 </li>
               ))}
            </ul>
         </div>
      </section>

      <section className="space-y-20 border-t-8 border-slate-900 pt-20">
        <div className="text-center space-y-4">
           <h3 className="text-5xl font-black uppercase tracking-tighter text-slate-900">INTEGRANTES DEL PROYECTO</h3>
           <div className="h-2 w-32 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((m, i) => (
            <div key={i} className="text-center space-y-8 p-12 bg-white border border-slate-100 rounded-3xl hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-50/50 transition-all group relative overflow-hidden">
               <div className="relative inline-block w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl">
                 {/* Espacio Foto Integrante */}
                 <img src={`https://picsum.photos/seed/team${i}/400/400`} className="w-full h-full object-cover" alt={m.name} referrerPolicy="no-referrer" />
               </div>
               <div className="space-y-3">
                 <h4 className="text-3xl font-black uppercase tracking-tighter leading-none text-slate-900 group-hover:text-blue-600 transition-colors">
                   {m.name}<br/>{m.lastName}
                 </h4>
                 <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">C.I: {m.id}</p>
               </div>
               <p className="text-xs font-bold uppercase tracking-widest text-slate-500">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center opacity-30 font-black uppercase text-[10px] tracking-[0.5em] pt-20">
        UPT Aragua - PNF Informática - Maracay 2025
      </footer>
    </div>
  );
};

export default Credits;