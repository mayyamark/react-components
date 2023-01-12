import React, { ImgHTMLAttributes } from 'react';
import { styled } from '@mui/system';

interface ImageDetails {
  imageCustomise?: ImgHTMLAttributes<HTMLImageElement>;
  size?: 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large';
  avatar: boolean;
}

const sizes = {
  'extra-small': 50,
  small: 100,
  medium: 250,
  large: 400,
  'extra-large': 700,
};

const StyledImage = styled('img')(({ avatar }: ImageDetails) => ({
  borderRadius: avatar ? '50%' : 0,
}));

function ImageComponent({
  imageCustomise,
  size = 'large',
  avatar,
}: ImageDetails) {
  const currentSize = sizes[size];

  return (
    <StyledImage
      alt="Image"
      {...imageCustomise}
      width={currentSize}
      height={currentSize}
      avatar={avatar}
    />
  );
}

export default ImageComponent;
