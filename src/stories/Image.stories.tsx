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
      imageCustomise={{
        alt: 'A picture',
        src: 'https://th.bing.com/th/id/OIP.D4-WzVpB1I_0WnUSDcnGEAHaFm?pid=ImgDet&rs=1',
      }}
    />
  );
}
