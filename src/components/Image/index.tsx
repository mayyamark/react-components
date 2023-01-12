import React, { ImgHTMLAttributes } from 'react';
import { styled } from '@mui/system';

interface ImageDetails {
  imageCustomise?: ImgHTMLAttributes<HTMLImageElement>;
  size?: 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large';
}

const sizes = {
  'extra-small': 50,
  small: 100,
  medium: 250,
  large: 400,
  'extra-large': 700,
};

const StyledImage = styled('img')({});

function ImageComponent({ imageCustomise, size = 'large' }: ImageDetails) {
  const currentSize = sizes[size];

  return (
    <StyledImage
      alt="Image"
      {...imageCustomise}
      width={currentSize}
      height={currentSize}
    />
  );
}

export default ImageComponent;
