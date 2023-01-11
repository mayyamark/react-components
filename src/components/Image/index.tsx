import React from 'react';
import Box from '@mui/material/Box/Box';

interface ImageDetails {
  imageCustomise?: React.ImgHTMLAttributes<HTMLImageElement>;
}

function ImageComponent(imageCustomise: ImageDetails) {
  return (
    <Box
      component="img"
      src="https://pix.avax.news/avaxnews/12/e4/0000e412.jpeg"
      {...imageCustomise}
    />
  );
}

export default ImageComponent;
