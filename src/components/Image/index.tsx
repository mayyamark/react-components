import React, { ImgHTMLAttributes } from 'react';
import { styled } from '@mui/system';
import { makeStyles } from '@mui/material';

interface ImageDetails {
  imageCustomise?: ImgHTMLAttributes<HTMLImageElement>;
}

const size = {
  xsmall: {
    height: 50,
    width: 50,
  },
};

const useStyles = makeStyles({
  overrides: {
    height: ({ height }: ImgHTMLAttributes<HTMLImageElement>) =>
      size.xsmall.height,
    width: ({ width }: ImgHTMLAttributes<HTMLImageElement>) =>
      size.xsmall.width,
  },
});

const StyledImage = styled('img')({
  variant: [
    {
      prop: { size: 'xsmall' },
      style: {
        width: '50px',
        height: '50px',
      },
    },
    {
      prop: { size: 'small' },
      style: {
        width: '100px',
        height: '100px',
      },
    },
  ],
});

function ImageComponent({ imageCustomise }: ImageDetails) {
  return <StyledImage {...imageCustomise} alt="Something" />;
}

export default ImageComponent;
