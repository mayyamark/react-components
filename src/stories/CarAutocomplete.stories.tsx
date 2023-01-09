import React from 'react';
import { Meta } from '@storybook/react';
import CustomCarAutocomplete from '../components/CarAutocomplete';

const meta: Meta = {
  title: 'Car Autocomplete',
  component: CustomCarAutocomplete,
};

export default meta;

const selectedValue = (value: unknown) => {
  console.log(value);
};

export function CarAutocomplete() {
  return (
    <CustomCarAutocomplete
      selectedOption={selectedValue}
      textFieldProps={{ label: 'Cars' }}
    />
  );
}
