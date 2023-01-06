import { Meta } from '@storybook/react';
import React from 'react';
import CustomButtonUnderlined from '../components/ButtonUnderlined';

const meta: Meta = {
  title: 'Button Underlined',
  component: CustomButtonUnderlined,
};

export default meta;

export function ButtonUnderlined() {
  return <CustomButtonUnderlined>Search</CustomButtonUnderlined>;
}
