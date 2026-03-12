import React, { useState, useCallback, useEffect } from 'react';
import { PERMANENT_IMAGES } from '../utils/permanentImages.ts';

interface AssetImageProps extends React.HTMLAttributes<HTMLDivElement> {
  alt?: string;
}

// Configuración de la Base de Datos (IndexedDB)
const DB_NAME = 'ManualCanaimaDB';
const STORE_NAME = 'images';
const DB_VERSION = 1;

export const dbHelpers = {
  open: (): Promise<IDBDatabase> => {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);
      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME);
        }
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  },
  put: async (key: string, data: string) => {
    const db = await dbHelpers.open();
    return new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      store.put(data, key);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  },
  get: async (key: string): Promise<string | null> => {
    const db = await dbHelpers.open();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const request = store.get(key);
      request.onsuccess = () => resolve(request.result || null);
      request.onerror = () => reject(request.error);
    });
  },
  delete: async (key: string) => {
    const db = await dbHelpers.open();
    return new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      store.delete(key);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  },
  getAll: async (): Promise<Record<string, string>> => {
     const db = await dbHelpers.open();
     return new Promise((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, 'readonly');
        const store = tx.objectStore(STORE_NAME);
        const request = store.openCursor();
        const results: Record<string, string> = {};
        
        request.onsuccess = (event) => {
           const cursor = (event.target as IDBRequest).result;
           if (cursor) {
              results[cursor.key as string] = cursor.value;
              cursor.continue();
           } else {
              resolve(results);
           }
        };
        request.onerror = () => reject(request.error);
     });
  }
};

const AssetImage: React.FC<AssetImageProps> = ({ alt, className, ...props }) => {
  // Generamos una clave única y estable
  const storageKey = `img_${alt?.replace(/[^a-zA-Z0-9]/g, '').toLowerCase() || 'default'}`;
  
  // 1. Revisar si la imagen ya es PERMANENTE (está en el código)
  const isPermanent = !!PERMANENT_IMAGES[storageKey];
  
  const [imageSrc, setImageSrc] = useState<string | null>(isPermanent ? PERMANENT_IMAGES[storageKey] : null);
  const [isDragging, setIsDragging] = useState(false);
  const [loading, setLoading] = useState(!isPermanent);

  // Si no es permanente, cargar desde IndexedDB al iniciar
  useEffect(() => {
    if (isPermanent) return;

    let mounted = true;
    const loadFromDB = async () => {
      try {
        const savedData = await dbHelpers.get(storageKey);
        if (mounted && savedData) {
          setImageSrc(savedData);
        }
      } catch (err) {
        console.error("Error cargando imagen:", err);
      } finally {
        if (mounted) setLoading(false);
      }
    };
    loadFromDB();
    return () => { mounted = false; };
  }, [storageKey, isPermanent]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    if (isPermanent) return; // No permitir arrastrar si ya es permanente
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
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = async (event) => {
        if (event.target?.result) {
          const result = event.target.result as string;
          setImageSrc(result);
          try {
            await dbHelpers.put(storageKey, result);
          } catch (error) {
            console.error("Error guardando en BD:", error);
            alert("Error al guardar imagen temporal.");
          }
        }
      };
      reader.readAsDataURL(file);
    }
  }, [storageKey, isPermanent]);

  const handleDoubleClick = async () => {
    if (isPermanent) {
      alert("Esta imagen ya está guardada permanentemente en el código fuente (utils/permanentImages.ts). Para cambiarla, debes editar ese archivo.");
      return;
    }

    if (imageSrc) {
      if (confirm("¿Quieres eliminar esta imagen temporal?")) {
        setImageSrc(null);
        try {
          await dbHelpers.delete(storageKey);
        } catch (e) {
          console.error("Error borrando imagen", e);
        }
      }
    }
  };

  if (loading) {
    return (
      <div className={`${className} bg-slate-100 flex items-center justify-center animate-pulse`}>
        <span className="text-slate-300 text-xs">Cargando...</span>
      </div>
    );
  }

  if (imageSrc) {
    return (
      <img
        {...props}
        src={imageSrc}
        alt={alt || "Imagen cargada"}
        className={`${className} object-cover transition-opacity ${isPermanent ? '' : 'cursor-pointer hover:opacity-90'}`}
        title={isPermanent ? "Imagen Permanente (Guardada en Código)" : "Doble click para eliminar y cambiar"}
        onDoubleClick={handleDoubleClick}
      />
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
          ? 'border-blue-500 bg-blue-50 text-blue-600 scale-[0.99]' 
          : 'border-slate-200 bg-slate-50 text-slate-400 hover:border-blue-300 hover:bg-white hover:text-blue-400'
        }`}
    >
      <div className={`transition-transform duration-300 ${isDragging ? 'scale-110' : 'group-hover:scale-110'}`}>
        <svg className="w-10 h-10 mb-2 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
      </div>
      <span className="text-[10px] uppercase font-black tracking-widest pointer-events-none relative z-10">
        {isDragging ? 'SUELTA AQUI' : 'ARRASTRA IMAGEN'}
      </span>
      {alt && <span className="text-[8px] mt-1 opacity-50 font-mono pointer-events-none uppercase max-w-full truncate px-2 relative z-10">{alt}</span>}
    </div>
  );
};

export default AssetImage;