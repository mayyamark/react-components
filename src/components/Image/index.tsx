import React, { ImgHTMLAttributes, useState, useEffect } from 'react';
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
  avatar?: boolean;
}

const StyledImage = styled('img', {
  shouldForwardProp: (prop) => prop !== 'avatar' && prop !== 'size',
})<{ avatar?: boolean; size?: sizes }>(({ avatar, size }) => ({
  borderRadius: avatar === true ? '50%' : '0',
  width: size,
  height: size,
}));

const StyledContainer = styled(Container)({
  backgroundColor: 'grey',
});

async function isAnExistingUrl(url: string) {
  const result = await fetch(url, { method: 'GET' });
  return result.ok;
}

function isValidURL(url: string) {
  let isValid;
  isValid =
    /^(http(s):\/\/.)[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)$/g.test(
      url,
    )
      ? (isValid = true)
      : (isValid = false);

  return isValid;
}

const ImageComponent: React.FC<ImageProps> = ({
  size = sizes.medium,
  avatar,
  src = '',
  ...props
}: ImageProps) => {
  const [exists, setExists] = useState(true);

  useEffect(() => {
    isAnExistingUrl(src)
      .then(() => setExists(true))
      .catch(() => setExists(false));
  }, [src]);

  return src === undefined || !isValidURL(src) || !exists ? (
    <StyledContainer>This image could now be loaded</StyledContainer>
  ) : (
    <StyledImage alt="Image" size={size} avatar={avatar} src={src} {...props} />
  );
};

export default ImageComponent;
