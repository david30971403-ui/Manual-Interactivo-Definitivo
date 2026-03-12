import React from 'react';
import { TechnicalSheetData } from '../data/fichasTecnicas';

interface TechnicalSheetModalProps {
  data: TechnicalSheetData;
  onClose: () => void;
}

const TechnicalSheetModal: React.FC<TechnicalSheetModalProps> = ({ data, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[6000]">
      <div className="bg-white p-6 rounded-xl max-w-lg w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{data.name}</h2>
          <button onClick={onClose} className="text-xl">&times;</button>
        </div>
        <p className="mb-4">{data.description}</p>
        <div className="space-y-2">
          {Object.entries(data.specs).map(([key, value]) => (
            <div key={key} className="flex justify-between border-b pb-1">
              <span className="font-semibold">{key}</span>
              <span>{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnicalSheetModal;
