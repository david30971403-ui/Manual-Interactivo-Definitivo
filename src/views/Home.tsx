import React from 'react';
import { Link } from 'react-router-dom';
import AssetImage from '../components/AssetImage';

const Home: React.FC = () => {
  return (
    <div className="space-y-24 animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-3/5 space-y-8">
          <div className="space-y-2">
            <h2 className="text-7xl font-black leading-none tracking-tighter uppercase text-slate-900">Mantenimiento<br/><span className="text-blue-600">Integral.</span></h2>
            <div className="h-2 w-32 bg-blue-600 rounded-full"></div>
          </div>
          <p className="text-2xl font-bold leading-tight text-slate-700">
            GUÍA DEFINITIVA PARA LA OPTIMIZACIÓN DE HARDWARE Y SOFTWARE EDUCATIVO CANAIMA.
          </p>
          <p className="text-lg font-medium text-slate-500 max-w-2xl leading-relaxed">
            Este manual técnico interactivo ha sido diseñado por estudiantes de la <span className="font-bold text-slate-800">UPT Aragua</span> para servir como recurso maestro en la <span className="underline decoration-4 decoration-blue-600 text-slate-800 font-bold">U.E.E "Jorge Semidey"</span>.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/introduccion" className="bg-blue-600 text-white px-10 py-4 font-black text-sm hover:bg-slate-900 transition-all uppercase tracking-widest rounded-lg shadow-lg shadow-blue-200">Iniciar Protocolo</Link>
            <Link to="/componentes" className="bg-white border-2 border-slate-200 text-slate-700 px-10 py-4 font-black text-sm hover:bg-slate-50 transition-all uppercase tracking-widest rounded-lg">Inventario</Link>
          </div>
        </div>
        <div className="lg:w-2/5 w-full">
          <div className="relative h-[400px] w-full">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-50 rounded-full -z-10 animate-pulse"></div>
            {/* Espacio para imagen principal */}
            <AssetImage className="w-full h-full rounded-2xl shadow-2xl border-4 border-white object-cover bg-white" alt="PORTADA PRINCIPAL" />
          </div>
        </div>
      </section>

      {/* Video Support Section */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <h3 className="text-3xl font-black uppercase text-slate-900 tracking-tight">Instituciones</h3>
          <div className="flex-grow h-[1px] bg-slate-200"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative group cursor-pointer overflow-hidden rounded-3xl bg-slate-900 border-4 border-slate-200 shadow-xl h-80">
             {/* Espacio Institucion 1 */}
             <AssetImage className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-all" alt="INSTITUCION 1" />
          </div>
          <div className="relative group cursor-pointer overflow-hidden rounded-3xl bg-slate-900 border-4 border-slate-200 shadow-xl h-80">
             {/* Espacio Institucion 2 */}
             <AssetImage className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-all" alt="INSTITUCION 2" />
          </div>
        </div>
      </section>

      {/* Grid of Procedures */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { t: 'Limpieza Profunda', d: 'Protocolos de remoción de óxido y polvo mediante solventes dieléctricos.', icon: '🛠️', link: '/introduccion' },
          { t: 'Herramientas Necesarias', d: 'Catálogo completo de instrumentación para el mantenimiento preventivo y correctivo.', icon: '🧰', link: '/herramientas' },
          { t: 'Términos Utilizados', d: 'Diccionario técnico de conceptos fundamentales sobre hardware y software Canaima.', icon: '📖', link: '/glosario' }
        ].map((item, i) => (
          <Link to={item.link} key={i} className="bg-white p-6 space-y-4 rounded-2xl border border-slate-200 hover:border-blue-600 transition-all group shadow-sm flex flex-col cursor-pointer hover:shadow-xl hover:-translate-y-1">
            <div className="rounded-xl overflow-hidden mb-4 h-40">
              <AssetImage className="w-full h-full object-cover" alt={item.t} />
            </div>
            <div className="text-3xl">{item.icon}</div>
            <h4 className="text-xl font-black uppercase tracking-tight text-slate-800 group-hover:text-blue-600 transition-colors">{item.t}</h4>
            <p className="text-sm font-medium text-slate-500 leading-relaxed">{item.d}</p>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Home;