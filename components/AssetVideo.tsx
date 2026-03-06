import React, { useState, useCallback, useEffect } from 'react';
import { dbHelpers } from './AssetImage';

interface AssetVideoProps extends React.HTMLAttributes<HTMLDivElement> {
  alt?: string;
}

const AssetVideo: React.FC<AssetVideoProps> = ({ alt, className, ...props }) => {
  // Generamos una clave única y estable para videos
  const storageKey = `vid_${alt?.replace(/[^a-zA-Z0-9]/g, '').toLowerCase() || 'default'}`;
  
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [loading, setLoading] = useState(true);

  // Cargar desde IndexedDB al iniciar
  useEffect(() => {
    let mounted = true;
    const loadFromDB = async () => {
      try {
        const savedData = await dbHelpers.get(storageKey);
        if (mounted && savedData) {
          setVideoSrc(savedData);
        }
      } catch (err) {
        console.error("Error cargando video:", err);
      } finally {
        if (mounted) setLoading(false);
      }
    };
    loadFromDB();
    return () => { mounted = false; };
  }, [storageKey]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('video/')) {
      // Advertencia de tamaño
      if (file.size > 50 * 1024 * 1024) { // 50MB limit warning
         if (!confirm("El video es grande (>50MB) y podría ralentizar el navegador. ¿Deseas continuar?")) return;
      }

      const reader = new FileReader();
      reader.onload = async (event) => {
        if (event.target?.result) {
          const result = event.target.result as string;
          setVideoSrc(result);
          try {
            await dbHelpers.put(storageKey, result);
          } catch (error) {
            console.error("Error guardando video en BD:", error);
            alert("Error al guardar video. Puede ser demasiado grande para el almacenamiento local.");
          }
        }
      };
      reader.readAsDataURL(file);
    } else {
      alert("Por favor arrastra un archivo de video válido.");
    }
  }, [storageKey]);

  const handleDoubleClick = async () => {
    if (videoSrc) {
      if (confirm("¿Quieres eliminar este video?")) {
        setVideoSrc(null);
        try {
          await dbHelpers.delete(storageKey);
        } catch (e) {
          console.error("Error borrando video", e);
        }
      }
    }
  };

  if (loading) {
    return (
      <div className={`${className} bg-slate-100 flex items-center justify-center animate-pulse`}>
        <span className="text-slate-300 text-xs">Cargando Video...</span>
      </div>
    );
  }

  if (videoSrc) {
    return (
      <div className={`${className} relative group`}>
        <video
          src={videoSrc}
          controls
          className="w-full h-full object-cover rounded-lg"
          title="Doble click en el contenedor para eliminar"
        />
        <div 
            className="absolute top-2 right-2 bg-red-600 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity"
            onClick={handleDoubleClick}
        >
            ELIMINAR
        </div>
      </div>
    );
  }

  return (
    <div
      {...props}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`${className} flex flex-col items-center justify-center text-center border-4 border-dashed transition-all cursor-pointer p-4 group relative overflow-hidden select-none
        ${isDragging 
          ? 'border-red-500 bg-red-50 text-red-600 scale-[0.99]' 
          : 'border-slate-200 bg-slate-50 text-slate-400 hover:border-red-300 hover:bg-white hover:text-red-400'
        }`}
    >
      <div className={`transition-transform duration-300 ${isDragging ? 'scale-110' : 'group-hover:scale-110'}`}>
        <svg className="w-10 h-10 mb-2 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
        </svg>
      </div>
      <span className="text-[10px] uppercase font-black tracking-widest pointer-events-none relative z-10">
        {isDragging ? 'SUELTA VIDEO' : 'ARRASTRA VIDEO'}
      </span>
      {alt && <span className="text-[8px] mt-1 opacity-50 font-mono pointer-events-none uppercase max-w-full truncate px-2 relative z-10">{alt}</span>}
    </div>
  );
};

export default AssetVideo;
