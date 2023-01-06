import { Meta } from '@storybook/react';
import React from 'react';
import CustomButton from '../components/Button';

const meta: Meta = {
  title: 'Button',
  component: CustomButton,
};

export default meta;

export function TextVariant() {
  return <CustomButton variant="text">Click me</CustomButton>;
}
export function ContainedVariant() {
  return <CustomButton variant="contained">Click me</CustomButton>;
}
