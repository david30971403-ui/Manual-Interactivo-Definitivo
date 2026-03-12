import React from 'react';

interface AssetVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  alt?: string;
}

const AssetVideo: React.FC<AssetVideoProps> = ({ alt, className, ...props }) => {
  // Placeholder implementation
  return (
    <div className={`bg-slate-200 flex items-center justify-center text-slate-500 ${className || ''}`} style={{ width: props.width || '100%', height: props.height || '100%' }}>
      Video: {alt || 'Video Placeholder'}
    </div>
  );
};

export default AssetVideo;
