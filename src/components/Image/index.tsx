import React from 'react';

interface ImageDetails {
  imageCustomise?: React.ImgHTMLAttributes<HTMLImageElement>;
}

export function ImageComponent(ImageStyles: ImageDetails) {
  return <div>Hi</div>;
}
