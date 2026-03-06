import React from 'react';
import AssetImage from '../components/AssetImage.tsx';
import AssetVideo from '../components/AssetVideo.tsx';

const Community: React.FC = () => {
  return (
    <div className="space-y-24 pb-20 animate-in fade-in duration-700">
      <header className="space-y-2">
        <h2 className="text-5xl font-black tracking-tighter uppercase text-slate-900">La Institución</h2>
        <p className="text-lg font-bold text-blue-600 uppercase tracking-widest">Unidad Educativa Estadal "Jorge Semidey"</p>
        <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <div className="border-l-4 border-blue-600 pl-6 space-y-4">
            <h3 className="text-3xl font-black uppercase tracking-tight text-slate-900">Reseña Histórica</h3>
            <p className="text-lg font-bold leading-relaxed text-slate-700">
              Jorge Semidey Illarramendi: Forjador de la Educación en Aragua.
            </p>
          </div>
          
          <div className="space-y-6 text-slate-600 leading-relaxed font-medium">
            <p>
              En 1915, en la ciudad de San Cristóbal, estado Táchira, nace el destacado educador <span className="text-slate-900 font-bold">Jorge Semidey Illarramendi</span>, figura clave dentro del desarrollo pedagógico venezolano y referente para generaciones de estudiantes y docentes. Su vocación por la enseñanza, su disciplina y su rigurosa ética profesional lo convirtieron en un referente nacional.
            </p>
            <p>
              A partir de 1946, Semidey desempeñó un papel fundamental como director y profesor del reconocido <span className="text-slate-900 font-bold">Liceo Agustín Codazzi de Maracay</span>. Paralelamente, impartió clases en diversas instituciones educativas, entre ellas el Colegio Nuestra Señora de la Consolación, el Colegio Valles de Aragua, la Escuela de Agricultura y la Escuela de Demostradoras del Hogar Campesino.
            </p>
            <p>
              Su legado trascendió las aulas, dejando un impacto humano, intelectual y profesional que aún permanece. En honor a su vida y obra, la <span className="text-blue-600 font-bold">U.E.E “Jorge Semidey”</span> lleva con orgullo su nombre, para preservar su memoria y continuar su misión educativa basada en la ética, el compromiso social y la formación integral del ser humano.
            </p>
          </div>

          <div className="bg-slate-100 rounded-3xl p-6 border-2 border-slate-200 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">Video: El Legado de Semidey</h4>
            <div className="aspect-video bg-slate-800 rounded-2xl flex items-center justify-center relative overflow-hidden shadow-lg h-64">
               {/* Espacio Video Historia */}
               <AssetImage className="absolute inset-0 w-full h-full object-cover" alt="VIDEO HISTORIA" />
            </div>
          </div>
        </div>

        <div className="space-y-8">
           <div className="grid grid-cols-2 gap-4 h-48">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-white group h-full">
                {/* Espacio Cultura */}
                <AssetImage className="w-full h-full object-cover" alt="FOTO CULTURA" />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-white group h-full">
                {/* Espacio Educación */}
                <AssetImage className="w-full h-full object-cover" alt="FOTO AULA" />
              </div>
           </div>

           <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white group h-80">
             {/* Espacio Sede */}
             <AssetImage className="w-full h-full object-cover" alt="FOTO SEDE" />
           </div>
        </div>
      </section>

      <section className="space-y-8">
        <h3 className="text-2xl font-black uppercase text-center text-slate-900 tracking-widest">Valores que nos Identifican</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
           {[
             { v: 'SOLIDARIDAD', d: 'Apoyo mutuo en el aprendizaje colectivo.' },
             { v: 'SOBERANÍA', d: 'Dominio de nuestras propias herramientas.' },
             { v: 'ÉTICA', d: 'Manejo honesto de la información pública.' },
             { v: 'DISCIPLINA', d: 'Rigor técnico en cada reparación.' }
           ].map((item, i) => (
             <div key={i} className="bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-white transition-all group overflow-hidden shadow-sm flex flex-col">
                <div className="h-32 w-full">
                   <AssetImage className="w-full h-full object-cover" alt={`VALOR ${item.v}`} />
                </div>
                <div className="p-6">
                  <h4 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-3 border-b border-blue-50 pb-2 group-hover:border-blue-200">{item.v}</h4>
                  <p className="text-xs font-bold text-slate-500 leading-relaxed uppercase opacity-80">{item.d}</p>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* Evidencias Fase III Section */}
      <section className="space-y-12 pt-12 border-t-2 border-slate-100">
        <header className="space-y-4 text-center max-w-4xl mx-auto">
          <div className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-2">Proyecto Socio-Tecnológico</div>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-slate-900 tracking-tighter leading-none">Evidencias <span className="text-blue-600">Fase III</span></h2>
          <p className="text-lg font-medium text-slate-500 max-w-2xl mx-auto">
            Registro visual de las actividades de mantenimiento preventivo y correctivo realizadas en la institución.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Video Evidence 1 */}
          <div className="space-y-4">
             <div className="aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-xl border-4 border-white relative group">
                <AssetVideo className="w-full h-full object-cover" alt="EVIDENCIA VIDEO 1" />
             </div>
             <div className="text-center">
                <h4 className="text-sm font-black uppercase tracking-widest text-slate-800">Video: Diagnóstico Inicial</h4>
                <p className="text-xs text-slate-500 mt-1">Evaluación del estado de los equipos.</p>
             </div>
          </div>

          {/* Video Evidence 2 */}
          <div className="space-y-4">
             <div className="aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-xl border-4 border-white relative group">
                <AssetVideo className="w-full h-full object-cover" alt="EVIDENCIA VIDEO 2" />
             </div>
             <div className="text-center">
                <h4 className="text-sm font-black uppercase tracking-widest text-slate-800">Video: Proceso de Limpieza</h4>
                <p className="text-xs text-slate-500 mt-1">Mantenimiento preventivo aplicado.</p>
             </div>
          </div>

          {/* Video Evidence 3 */}
          <div className="space-y-4">
             <div className="aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-xl border-4 border-white relative group">
                <AssetVideo className="w-full h-full object-cover" alt="EVIDENCIA VIDEO 3" />
             </div>
             <div className="text-center">
                <h4 className="text-sm font-black uppercase tracking-widest text-slate-800">Video: Pruebas Finales</h4>
                <p className="text-xs text-slate-500 mt-1">Verificación de funcionamiento.</p>
             </div>
          </div>
        </div>

        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
           <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden shadow-lg border-4 border-white relative group">
              <AssetImage className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="EVIDENCIA FOTO GRUPAL" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                 <p className="text-white font-bold uppercase text-sm tracking-wider">Equipo de Trabajo</p>
              </div>
           </div>
           
           <div className="rounded-2xl overflow-hidden shadow-md border-2 border-white relative group">
              <AssetImage className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="EVIDENCIA FOTO 1" />
           </div>
           <div className="rounded-2xl overflow-hidden shadow-md border-2 border-white relative group">
              <AssetImage className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="EVIDENCIA FOTO 2" />
           </div>
           <div className="rounded-2xl overflow-hidden shadow-md border-2 border-white relative group">
              <AssetImage className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="EVIDENCIA FOTO 3" />
           </div>
           <div className="rounded-2xl overflow-hidden shadow-md border-2 border-white relative group">
              <AssetImage className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="EVIDENCIA FOTO 4" />
           </div>
        </div>
      </section>
    </div>
  );
};

export default Community;