import React, { ImgHTMLAttributes } from 'react';
import { styled } from '@mui/system';
import { Container } from '@mui/material';

export enum sizes {
  xsmall = 50,
  small = 100,
  medium = 250,
  large = 400,
  xlarge = 700,
}

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  size?: sizes;
  avatar: boolean;
}

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
  size = sizes.medium,
  avatar,
  ...props
}: ImageProps) => {
  const url = props.src;
  const exists = true;

  isAnExistingUrl(url)
    .then(() => ({
      exists,
    }))
    .catch(() => ({
      exists: false,
    }));

  return props.src === undefined || !isValidURL(url) || !exists ? (
    <StyledContainer>This image could now be loaded</StyledContainer>
  ) : (
    <StyledImage
      alt="Image"
      width={size}
      height={size}
      avatar={avatar}
      {...props}
    />
  );
};

export default ImageComponent;
