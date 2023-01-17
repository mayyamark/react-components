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
  shouldForwardProp: (prop) => prop !== 'avatar',
})<{ avatar?: boolean }>(({ avatar }) => ({
  borderRadius: avatar === true ? '50%' : '0',
}));

const StyledContainer = styled(Container)({
  backgroundColor: 'grey',
});

async function isAnExistingUrl(url: any) {
  const result = await fetch(url, { method: 'GET' });
  return result.ok;
}

function isValidURL(url: any) {
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
  ...props
}: ImageProps) => {
  const [exists, setExists] = useState(true);

  useEffect(() => {
    isAnExistingUrl(props.src)
      .then(() => setExists(true))
      .catch(() => setExists(false));
  }, [props.src]);

  return props.src === undefined || !isValidURL(props.src) || !exists ? (
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
