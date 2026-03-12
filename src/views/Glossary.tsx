import React, { useState } from 'react';

const Glossary: React.FC = () => {
  const [search, setSearch] = useState('');
  const [activeLetter, setActiveLetter] = useState<string | null>(null);

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const terms = [
    { t: 'ACPI', d: 'Advanced Configuration and Power Interface. Estándar industrial para la gestión de energía.' },
    { t: 'ADAPTADOR', d: 'Dispositivo que permite conectar elementos con interfaces diferentes.' },
    { t: 'ALGORITMO', d: 'Conjunto ordenado de operaciones sistemáticas que permite hallar la solución de un problema.' },
    { t: 'AMPERAJE', d: 'Intensidad de corriente eléctrica que circula por un conductor. Crucial en fuentes de poder.' },
    { t: 'BACKUP', d: 'Copia de seguridad de los datos originales para evitar pérdidas en caso de fallo.' },
    { t: 'BIOS', d: 'Basic Input/Output System. Programa básico grabado en el chip CMOS que inicia el hardware.' },
    { t: 'BOOT', d: 'Secuencia de arranque del ordenador que carga el sistema operativo.' },
    { t: 'BUS', d: 'Canal de comunicación que transfiere datos entre componentes internos.' },
    { t: 'CACHE', d: 'Memoria de acceso ultrarrápido integrada en el procesador para datos frecuentes.' },
    { t: 'CAPACITOR', d: 'Componente electrónico pasivo capaz de almacenar energía. Vital en la regulación de voltaje.' },
    { t: 'CHIPSET', d: 'Conjunto de circuitos integrados diseñados para gestionar la comunicación entre CPU, memoria y periféricos.' },
    { t: 'CMOS', d: 'Tecnología de semiconductores que almacena la configuración del BIOS y la hora del sistema.' },
    { t: 'CONECTOR', d: 'Elemento electromecánico que permite unir circuitos eléctricos.' },
    { t: 'CORRIENTE ALTERNA (AC)', d: 'Corriente eléctrica en la que la magnitud y el sentido varían cíclicamente (Enchufes).' },
    { t: 'CORRIENTE CONTINUA (DC)', d: 'Corriente eléctrica que fluye de forma constante en una dirección (Baterías).' },
    { t: 'CPU', d: 'Central Processing Unit. El cerebro del computador que procesa todas las instrucciones.' },
    { t: 'DDR2', d: 'Double Data Rate 2. Estándar de memoria RAM utilizado en las arquitecturas Canaima clásicas.' },
    { t: 'DEBIAN', d: 'Sistema operativo libre y universal, base sólida sobre la cual se construye Canaima GNU/Linux.' },
    { t: 'DIAGNÓSTICO', d: 'Proceso de análisis para identificar la naturaleza y causa de un fallo en el sistema.' },
    { t: 'DISIPADOR', d: 'Estructura metálica (aluminio/cobre) diseñada para evacuar el calor del procesador.' },
    { t: 'DRIVER', d: 'Controlador. Software que permite al sistema operativo interactuar con un hardware específico.' },
    { t: 'ESD', d: 'Electrostatic Discharge. Descarga eléctrica repentina que puede dañar componentes sensibles.' },
    { t: 'ETHERNET', d: 'Estándar de tecnología para redes de área local (LAN) cableadas.' },
    { t: 'EXT4', d: 'Sistema de archivos transaccional estándar en Linux, conocido por su fiabilidad.' },
    { t: 'FIRMWARE', d: 'Software de bajo nivel que controla los circuitos electrónicos de un dispositivo.' },
    { t: 'FLEX', d: 'Cable plano y flexible usado para conectar partes móviles como pantallas de laptops.' },
    { t: 'FSB', d: 'Front Side Bus. Bus frontal que conecta el microprocesador con el Northbridge.' },
    { t: 'GNU', d: 'Proyecto colaborativo de software libre. Provee las herramientas esenciales del sistema operativo.' },
    { t: 'GRUB', d: 'Grand Unified Bootloader. Gestor de arranque que permite elegir qué sistema operativo iniciar.' },
    { t: 'HDD', d: 'Hard Disk Drive. Disco duro mecánico de almacenamiento magnético no volátil.' },
    { t: 'HERTZ (Hz)', d: 'Unidad de frecuencia. Medida de velocidad de reloj de procesadores y refresco de pantallas.' },
    { t: 'IDE/PATA', d: 'Interfaz antigua de conexión paralela para discos duros y unidades ópticas.' },
    { t: 'INTERFAZ', d: 'Punto de interacción y comunicación entre dos sistemas o dispositivos.' },
    { t: 'KERNEL', d: 'El núcleo de un sistema operativo. Gestiona el acceso seguro al hardware.' },
    { t: 'LAN', d: 'Local Area Network. Red de computadoras que abarca un área reducida como una escuela.' },
    { t: 'LATENCIA', d: 'Tiempo de retardo entre una petición de datos y el inicio de su transferencia.' },
    { t: 'LED', d: 'Diodo Emisor de Luz. Usado frecuentemente como indicador de estado en equipos.' },
    { t: 'LINUX', d: 'Núcleo (kernel) de sistema operativo libre tipo Unix. Corazón de Canaima.' },
    { t: 'MALWARE', d: 'Software malicioso (virus, troyanos) diseñado para infiltrarse o dañar una computadora.' },
    { t: 'MOTHERBOARD', d: 'Tarjeta madre. Placa principal que interconecta todos los componentes del sistema.' },
    { t: 'NORTHBRIDGE', d: 'Puente Norte. Chip encargado de gestionar el tráfico de alta velocidad (RAM, Video).' },
    { t: 'NÚCLEO (CORE)', d: 'Unidad de procesamiento independiente dentro de una CPU moderna.' },
    { t: 'OHM', d: 'Unidad de medida de la resistencia eléctrica.' },
    { t: 'PARTICIÓN', d: 'División lógica de una unidad de almacenamiento que funciona como una unidad independiente.' },
    { t: 'PASTA TÉRMICA', d: 'Compuesto conductor de calor que se aplica entre el procesador y el disipador.' },
    { t: 'PERIFÉRICO', d: 'Dispositivo auxiliar conectado a la CPU (teclado, ratón, impresora).' },
    { t: 'PIXEL', d: 'La unidad más pequeña y diminuta de una imagen digital o pantalla.' },
    { t: 'PUERTO', d: 'Interfaz física o virtual a través de la cual se pueden enviar y recibir datos.' },
    { t: 'RAM', d: 'Random Access Memory. Memoria de trabajo temporal y volátil del sistema.' },
    { t: 'RESOLUCIÓN', d: 'Número de píxeles que pueden ser mostrados en la pantalla (Ancho x Alto).' },
    { t: 'RJ-45', d: 'Conector estándar utilizado para cables de red Ethernet.' },
    { t: 'ROOT', d: 'Superusuario o administrador con privilegios totales en sistemas tipo Unix/Linux.' },
    { t: 'SATA', d: 'Serial ATA. Interfaz moderna de transferencia de datos para almacenamiento.' },
    { t: 'SISTEMA OPERATIVO', d: 'Software principal que gestiona los recursos de hardware y provee servicios a los programas.' },
    { t: 'SLOT', d: 'Ranura de expansión en la placa base para insertar tarjetas adicionales.' },
    { t: 'SMD', d: 'Surface Mount Device. Tecnología de montaje superficial de componentes electrónicos.' },
    { t: 'SOFTWARE LIBRE', d: 'Software que respeta la libertad de los usuarios para ejecutar, copiar, estudiar y mejorar el software.' },
    { t: 'SOUTHBRIDGE', d: 'Puente Sur. Chipset que gestiona periféricos más lentos (USB, Audio, BIOS).' },
    { t: 'SSD', d: 'Solid State Drive. Unidad de estado sólido. Almacenamiento rápido basado en chips.' },
    { t: 'SWAP', d: 'Espacio de intercambio en disco utilizado como extensión de la memoria RAM.' },
    { t: 'TERMINAL', d: 'Interfaz de línea de comandos para interactuar directamente con el sistema operativo.' },
    { t: 'USB', d: 'Universal Serial Bus. Estándar industrial para la conexión de periféricos y alimentación.' },
    { t: 'VGA', d: 'Video Graphics Array. Estándar analógico de visualización gráfica.' },
    { t: 'VOLTAJE', d: 'Potencial eléctrico, expresado en voltios. Fuerza que impulsa los electrones.' },
    { t: 'WATT', d: 'Vatio. Unidad de potencia eléctrica producida o consumida.' }
  ].sort((a, b) => a.t.localeCompare(b.t));

  const filtered = terms.filter(item => {
    const matchesSearch = item.t.toLowerCase().includes(search.toLowerCase());
    const matchesLetter = activeLetter ? item.t.startsWith(activeLetter) : true;
    return matchesSearch && matchesLetter;
  });

  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      <header className="space-y-2">
        <h2 className="text-4xl font-black uppercase text-slate-900 tracking-tight">Glosario Técnico</h2>
        <p className="text-sm font-bold text-blue-600 uppercase tracking-widest">Enciclopedia de Soporte Canaima.</p>
      </header>

      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-8">
        {/* Selector Alfabético */}
        <nav className="flex flex-wrap gap-1 justify-center">
           <button 
            onClick={() => setActiveLetter(null)}
            className={`px-4 py-2 text-[10px] font-black uppercase rounded-lg transition-all ${activeLetter === null ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-slate-400 hover:bg-slate-100 border border-slate-100'}`}
           >
             Ver Todo
           </button>
           {alphabet.map(letter => {
             const hasTerms = terms.some(t => t.t.startsWith(letter));
             return (
               <button 
                key={letter}
                disabled={!hasTerms}
                onClick={() => setActiveLetter(letter)}
                className={`w-9 h-9 text-[11px] font-black uppercase rounded-lg transition-all ${!hasTerms ? 'opacity-20 cursor-not-allowed' : activeLetter === letter ? 'bg-blue-600 text-white scale-110 shadow-lg' : 'bg-white text-slate-500 hover:border-blue-300 border border-slate-100 shadow-sm'}`}
               >
                 {letter}
               </button>
             );
           })}
        </nav>

        {/* Buscador */}
        <div className="relative max-w-xl mx-auto">
           <input 
            type="text" 
            placeholder="Escriba aquí para buscar un término..." 
            className="w-full bg-white border-2 border-slate-100 px-8 py-4 rounded-xl font-bold text-slate-700 outline-none focus:border-blue-600 transition-all text-center text-lg shadow-sm"
            onChange={(e) => setSearch(e.target.value)}
           />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {filtered.map((item, i) => (
           <div key={i} className="p-6 bg-white rounded-2xl border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-50/50 transition-all group">
              <h4 className="text-xl font-black text-blue-600 uppercase tracking-tighter mb-2 group-hover:scale-105 transition-transform origin-left">{item.t}</h4>
              <p className="text-sm font-medium text-slate-500 leading-relaxed">
                {item.d}
              </p>
           </div>
         ))}
      </div>
    </div>
  );
};

export default Glossary;
