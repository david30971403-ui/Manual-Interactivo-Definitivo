import React, { useState, useCallback, useEffect } from 'react';
import { dbHelpers } from './AssetImage';
import { PERMANENT_IMAGES } from '../utils/permanentImages';

interface AssetVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  alt?: string;
}

const AssetVideo: React.FC<AssetVideoProps> = ({ alt, className, ...props }) => {
  const storageKey = `vid_${alt?.replace(/[^a-zA-Z0-9]/g, '').toLowerCase() || 'default'}`;
  const isPermanent = !!PERMANENT_IMAGES[storageKey];
  
  const [videoSrc, setVideoSrc] = useState<string | null>(isPermanent ? PERMANENT_IMAGES[storageKey] : null);
  const [isDragging, setIsDragging] = useState(false);
  const [loading, setLoading] = useState(!isPermanent);

  useEffect(() => {
    if (isPermanent) return;
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
  }, [storageKey, isPermanent]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    if (isPermanent) return;
    e.preventDefault();
    setIsDragging(true);
  }, [isPermanent]);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    if (isPermanent) return;
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('video/')) {
      setLoading(true);
      const reader = new FileReader();
      reader.onload = async (event) => {
        if (event.target?.result) {
          const result = event.target.result as string;
          setVideoSrc(result);
          try {
            await dbHelpers.put(storageKey, result);
          } catch (error) {
            console.error("Error guardando en BD:", error);
            alert("Error al guardar video temporal. Puede que sea muy pesado.");
          } finally {
            setLoading(false);
          }
        }
      };
      reader.readAsDataURL(file);
    } else {
      alert("Por favor, sube un archivo de video válido (mp4, webm, etc).");
    }
  }, [storageKey, isPermanent]);

  const handleDoubleClick = async () => {
    if (isPermanent) {
      alert("Este video ya está guardado permanentemente en el código fuente. Para cambiarlo, debes editar el archivo permanentImages.ts.");
      return;
    }

    if (videoSrc) {
      if (confirm("¿Quieres eliminar este video temporal?")) {
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
        <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Cargando Video...</span>
      </div>
    );
  }

  if (videoSrc) {
    return (
      <video
        {...props}
        src={videoSrc}
        className={`${className} object-cover ${isPermanent ? '' : 'cursor-pointer hover:opacity-90'} transition-opacity`}
        title={isPermanent ? "Video Permanente" : "Doble click para eliminar y cambiar"}
        onDoubleClick={handleDoubleClick}
        controls
      />
    );
  }

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`${className} flex flex-col items-center justify-center text-center border-4 border-dashed transition-all cursor-pointer p-4 group relative overflow-hidden select-none
        ${isDragging 
          ? 'border-blue-500 bg-blue-50 text-blue-600 scale-[0.99]' 
          : 'border-slate-200 bg-slate-50 text-slate-400 hover:border-blue-300 hover:bg-white hover:text-blue-400'
        }`}
    >
      <div className={`transition-transform duration-300 ${isDragging ? 'scale-110' : 'group-hover:scale-110'}`}>
        <svg className="w-10 h-10 mb-2 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
        </svg>
      </div>
      <span className="text-[10px] uppercase font-black tracking-widest pointer-events-none relative z-10">
        {isDragging ? 'SUELTA EL VIDEO AQUI' : 'ARRASTRA UN VIDEO'}
      </span>
      {alt && <span className="text-[8px] mt-1 opacity-50 font-mono pointer-events-none uppercase max-w-full truncate px-2 relative z-10">{alt}</span>}
    </div>
  );
};

export default AssetVideo;
