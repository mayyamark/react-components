import React, { ImgHTMLAttributes } from 'react';
import { styled } from '@mui/system';
import { Container } from '@mui/material';

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

const StyledContainer = styled(Container)({
  backgroundColor: 'grey',
});

function ImageComponent({
  imageCustomise,
  size = 'large',
  avatar,
}: ImageDetails) {
  const currentSize = sizes[size];
  const url = imageCustomise?.src;

  async function exists(url: any) {
    let valid;
    const result = await fetch(url, { method: 'HEAD' });
    if (result.status === 200) {
      valid = true;
    } else {
      valid = false;
    }
    return valid;
  }

  function isValidURL(url: any) {
    let isValid: boolean;
    if (
      /^(http(s):\/\/.)[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)$/g.test(
        url,
      )
    ) {
      isValid = true;
    } else {
      isValid = false;
    }
    return isValid;
  }

  return imageCustomise?.src === undefined ||
    !isValidURL(url) ||
    !exists(url) ? (
    <StyledContainer>This image could now be loaded</StyledContainer>
  ) : (
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
