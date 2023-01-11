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
      imageCustomise={{
        src: 'https://pix.avax.news/avaxnews/12/e4/0000e412.jpeg',
        alt: 'A picture ',
      }}
    />
  );
}
