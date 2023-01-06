import React from 'react';
import { Meta } from '@storybook/react';
import CustomCarAutocomplete from '../components/CarAutocomplete';

const meta: Meta = {
  title: 'Car Autocomplete',
  component: CustomCarAutocomplete,
};

export default meta;

export function CarAutocomplete() {
  return <CustomCarAutocomplete />;
}
