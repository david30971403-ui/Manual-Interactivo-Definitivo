import React, { useState } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './views/Home.tsx';
import Community from './views/Community.tsx';
import Introduction from './views/Introduction.tsx';
import Components from './views/Components.tsx';
import Tools from './views/Tools.tsx';
import Glossary from './views/Glossary.tsx';
import Credits from './views/Credits.tsx';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { path: '/', label: 'INICIO' },
    { path: '/comunidad', label: 'COMUNIDAD' },
    { path: '/introduccion', label: 'INTRODUCCIÓN' },
    { path: '/componentes', label: 'HARDWARE' },
    { path: '/herramientas', label: 'HERRAMIENTAS' },
    { path: '/glosario', label: 'GLOSARIO' },
    { path: '/creditos', label: 'CRÉDITOS' },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Sidebar de Índice */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-white border-r border-slate-200 z-[5000] transition-transform duration-500 p-10 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full shadow-2xl'}`}>
        <div className="flex justify-between items-center mb-12 border-b border-slate-100 pb-4">
          <h2 className="text-xl font-black uppercase tracking-tight text-blue-600">Índice General</h2>
          <button onClick={() => setIsMenuOpen(false)} className="text-3xl font-light hover:text-blue-600 transition-colors">×</button>
        </div>
        <nav className="flex flex-col gap-4">
          {menuItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path} 
              className={`text-base font-bold hover:text-blue-600 transition-all py-2 px-4 rounded-lg ${location.pathname === item.path ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-[4999]" onClick={() => setIsMenuOpen(false)} />
      )}

      {/* Cabecera Profesional */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b-2 border-blue-600 py-4 px-10 shadow-sm">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button className="text-2xl p-2 hover:bg-slate-100 rounded-lg transition-colors" onClick={() => setIsMenuOpen(true)}>
              ☰
            </button>
            <div className="hidden md:block h-8 w-[1px] bg-slate-200"></div>
            <div>
              <h1 className="text-lg font-black tracking-tight uppercase text-slate-800">MANUAL <span className="text-blue-600">INTERACTIVO</span></h1>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">U.E.E Jorge Semidey | PNF Informática</div>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-6">
            {menuItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path} 
                className={`text-[11px] font-extrabold uppercase tracking-wider transition-colors hover:text-blue-600 ${location.pathname === item.path ? 'text-blue-600' : 'text-slate-500'}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto py-12 px-6 md:px-12 bg-white my-8 border border-slate-200 shadow-sm rounded-xl min-h-screen">
        {children}
      </main>

      <footer className="bg-white border-t border-slate-100 py-12 px-10">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-[11px] font-bold uppercase tracking-widest text-slate-400">
           <div>
             <p className="mb-1 text-blue-600 font-black">Sede Institucional</p>
             <p className="text-slate-600">U.E.E "Jorge Semidey" - Maracay</p>
           </div>
           <div className="md:text-center">
             <p className="mb-1 text-blue-600 font-black">Proyecto Académico</p>
             <p className="text-slate-600">UPT Aragua "Federico Brito Figueroa"</p>
           </div>
           <div className="md:text-right">
             <p className="mb-1 text-blue-600 font-black">Copyright</p>
             <p className="text-slate-600">© 2025 Soberanía Tecnológica</p>
           </div>
        </div>
      </footer>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comunidad" element={<Community />} />
          <Route path="/introduccion" element={<Introduction />} />
          <Route path="/componentes" element={<Components />} />
          <Route path="/herramientas" element={<Tools />} />
          <Route path="/glosario" element={<Glossary />} />
          <Route path="/creditos" element={<Credits />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;