import React, { ImgHTMLAttributes, useState } from 'react';
import { styled } from '@mui/system';
import { Container } from '@mui/material';

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
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

const StyledImage = styled('img')(({ avatar }: ImageProps) => ({
  borderRadius: avatar ? '50%' : 0,
}));

const StyledContainer = styled(Container)({
  backgroundColor: 'grey',
});

async function isAnExistingUrl(src: any) {
  const result = await fetch(src, { method: 'GET' });
  return result.ok;
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

const ImageComponent: React.FC<ImageProps> = ({
  size = 'large',
  avatar,
  ...props
}: ImageProps) => {
  const [valid, setValid] = useState(false);
  const currentSize = sizes[size];
  const url = props.src;

  isAnExistingUrl(url)
    .then(() => setValid(true))
    .catch(() => setValid(false));

  return props.src === undefined || !isValidURL(url) || !valid ? (
    <StyledContainer>This image could now be loaded</StyledContainer>
  ) : (
    <StyledImage
      alt="Image"
      width={currentSize}
      height={currentSize}
      avatar={avatar}
      {...props}
    />
  );
};

export default ImageComponent;
