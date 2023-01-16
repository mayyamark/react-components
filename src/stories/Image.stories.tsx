import React from 'react';
import { Meta } from '@storybook/react';
import ImageComponent from '../components/Image';

const meta: Meta = {
  title: 'Image component',
  component: ImageComponent,
};

export default meta;
export function Image() {
  return (
    <ImageComponent
      avatar={false}
      size="small"
      imageCustomise={{
        alt: 'A picture',
        src: 'https://th.bing.com/th/id/OIP.D4-WzVpB1I_0WnUSDcnGEAHaFm?pid=ImgDet&rs=1',
      }}
    />
  );
}

export function AvatarImage() {
  return (
    <ImageComponent
      avatar
      imageCustomise={{
        alt: 'A picture',
        src: 'https://th.bing.com/th/id/OIP.D4-WzVpB1I_0WnUSDcnGEAHaFm?pid=ImgDet&rs=1',
      }}
    />
  );
}

export function InvalidURL() {
  return (
    <ImageComponent
      avatar={false}
      imageCustomise={{
        alt: 'A picture',
        src: 'th.bing.com/th/id/OIP.D4-WzVpB1I_0WnUSDcnGEAHaFm?pid=ImgDet&rs=1',
      }}
    />
  );
}

export function NoURL() {
  return (
    <ImageComponent
      avatar={false}
      imageCustomise={{
        alt: 'A picture',
      }}
    />
  );
}
