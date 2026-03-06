import React, { useState } from 'react';
import AssetImage from '../components/AssetImage.tsx';

const Introduction: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const safetyRules = [
    "Trabajar con las manos limpias y libres de grasa.",
    "Evitar usar ropa suelta o accesorios peligrosos.",
    "Desconectar el equipo antes de abrirlo.",
    "Utilizar herramientas aisladas y en buen estado.",
    "Utilizar guantes antiestáticos obligatoriamente.",
    "Mantener el área de trabajo limpia y organizada.",
    "No forzar piezas: cada parte tiene su mecanismo.",
    "Descargar electricidad estática antes de intervenir."
  ];

  const steps = [
    {
      title: 'Preparación del área de trabajo',
      desc: 'Asegúrate de trabajar sobre una mesa firme, limpia y libre de humedad. Ten a mano todas las herramientas necesarias.',
      details: 'Un entorno ordenado previene la pérdida de tornillos y componentes. Se recomienda el uso de un tapete antiestático.'
    },
    {
      title: 'Apagar y desconectar la laptop',
      desc: 'La laptop debe estar completamente apagada, desconectada del cargador y sin dispositivos externos.',
      details: 'Drena la energía residual manteniendo el botón de encendido presionado por 10 segundos tras desconectar todo.'
    },
    {
      title: 'Retirar la batería',
      desc: 'En los modelos Canaima desmontables, libera el seguro y extrae la batería para evitar riesgos eléctricos.',
      details: 'Paso crítico de seguridad para evitar cortocircuitos accidentales en la placa base.'
    },
    {
      title: 'Abrir la carcasa',
      desc: 'Utiliza un destornillador adecuado para retirar los tornillos del chasis y accede a los componentes internos.',
      details: 'Retira todos los tornillos del panel inferior. Ten especial cuidado con los componentes sensibles.'
    },
    {
      title: 'Limpieza interna general',
      desc: 'Usa aire comprimido para remover el polvo acumulado en el ventilador y las zonas de difícil acceso.',
      details: 'La acumulación de polvo es la principal causa de sobrecalentamiento.'
    },
    {
      title: 'Verificar estado de componentes',
      desc: 'Observar detenidamente el estado de la placa madre en busca de anomalías.',
      details: 'Busca signos de corrosión, componentes quemados o pasta térmica seca.'
    },
    {
      title: 'Cambio de pasta térmica',
      desc: 'Aplica una pequeña cantidad de pasta térmica nueva sobre el procesador.',
      details: 'Limpia la superficie con alcohol isopropílico antes de aplicar la nueva capa.'
    },
    {
      title: 'Limpieza del teclado y pantalla',
      desc: 'Utiliza una brocha de cerdas suaves para remover residuos entre las teclas.',
      details: 'La limpieza externa previene fallos mecánicos en las teclas.'
    },
    {
      title: 'Ensamblaje final',
      desc: 'Vuelve a colocar los componentes internos y asegura todos los tornillos.',
      details: 'Asegúrate de que todos los cables flex estén correctamente conectados.'
    },
    {
      title: 'Pruebas de funcionamiento',
      desc: 'Enciende la laptop y verifica que el sistema operativo inicie correctamente.',
      details: 'Comprueba el teclado, el sonido y la carga de la batería.'
    }
  ];

  return (
    <div className="space-y-16 animate-in fade-in duration-500">
      <header className="space-y-2">
        <h2 className="text-5xl font-black tracking-tighter uppercase text-slate-900">Guía de mantenimiento completo</h2>
        <p className="text-lg font-bold text-blue-600 uppercase tracking-widest">Procedimiento profesional para Laptop Canaima</p>
        <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h3 className="text-3xl font-black uppercase text-slate-900 border-l-4 border-blue-600 pl-4">¿Qué es el mantenimiento?</h3>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 space-y-4 shadow-sm">
            <p className="text-base font-medium text-slate-700 leading-relaxed">
              El mantenimiento es un conjunto de acciones técnicas planificadas que permiten conservar equipos en un estado óptimo de funcionamiento.
            </p>
          </div>
        </div>
        <div className="bg-slate-900 rounded-3xl p-4 shadow-2xl overflow-hidden group aspect-video relative">
           {/* Espacio Video Seguridad */}
           <AssetImage className="absolute inset-0 w-full h-full object-cover" alt="VIDEO SEGURIDAD" />
        </div>
      </section>

      <section className="space-y-6">
        <h3 className="text-2xl font-black uppercase text-slate-900">Normas de Seguridad</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           <div className="lg:col-span-2 bg-blue-50 p-8 rounded-2xl border-2 border-blue-100 h-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
                {safetyRules.map((rule, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-blue-600 rounded-md flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0 mt-0.5">✓</div>
                    <p className="text-xs font-bold text-slate-700 uppercase leading-relaxed">{rule}</p>
                  </div>
                ))}
              </div>
           </div>
           <div className="rounded-2xl overflow-hidden border-2 border-slate-100 shadow-lg min-h-[200px]">
              {/* Espacio Foto Seguridad */}
              <AssetImage className="w-full h-full object-cover" alt="FOTO SEGURIDAD" />
           </div>
        </div>
      </section>

      <section className="space-y-8 pt-8 border-t border-slate-100">
        <div className="text-center space-y-2">
          <h3 className="text-4xl font-black uppercase text-slate-900 tracking-tight">Manual Paso a Paso</h3>
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Protocolo Técnico Canaima Realizado por el Equipo</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <div 
              key={i}
              className={`p-6 rounded-2xl border-2 transition-all cursor-pointer group ${activeStep === i ? 'border-blue-600 bg-white shadow-xl shadow-blue-50' : 'border-slate-100 hover:border-blue-200 bg-white'}`}
              onClick={() => setActiveStep(activeStep === i ? null : i)}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-4">
                  <span className={`text-4xl font-black ${activeStep === i ? 'text-blue-600' : 'text-slate-200'}`}>0{i+1}</span>
                  <h4 className="text-lg font-black uppercase tracking-tight text-slate-800">{step.title}</h4>
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0 ${activeStep === i ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400'}`}>
                  {activeStep === i ? '−' : '+'}
                </div>
              </div>
              <p className="text-xs font-bold text-slate-500 mb-2 leading-relaxed uppercase">{step.desc}</p>
              
              <div className={`mt-4 overflow-hidden transition-all duration-500 ${activeStep === i ? 'max-h-[600px] opacity-100 pt-4 border-t border-slate-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-xs font-medium text-slate-600 leading-relaxed italic mb-6">
                  {step.details}
                </p>
                <div className="rounded-xl overflow-hidden shadow-inner border border-slate-200 bg-slate-50 h-64">
                  {/* Espacio para la foto del paso */}
                  <AssetImage className="w-full h-full object-contain bg-white" alt={`PASO ${i+1}`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Introduction;