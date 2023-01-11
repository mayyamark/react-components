import React, { ImgHTMLAttributes } from 'react';
import { styled } from '@mui/material';

interface ImageDetails {
  imageCustomise?: ImgHTMLAttributes<HTMLImageElement>;
}

const StyledImage = styled('img')({
  variants: {
    sizes: {
      prop: 'size',
      variants: {
        xsmall: {
          style: {
            width: 50,
            height: 50,
          },
        },
        small: {
          width: 100,
          height: 100,
        },
      },
    },
  },
});

function ImageComponent({ imageCustomise }: ImageDetails) {
  return <StyledImage {...imageCustomise} alt="Something" />;
}

export default ImageComponent;
