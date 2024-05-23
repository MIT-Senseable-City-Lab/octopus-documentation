import React from 'react';

function ResizableImage({ src, alt, width, height }) {
  return (
    <span>
      {' '}
      <img src={src} alt={alt} style={{ width: width, height: height }} />
    </span>
  );
}

export default ResizableImage;
