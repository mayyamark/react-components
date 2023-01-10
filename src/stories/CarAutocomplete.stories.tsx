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

const header = {
  'X-RapidAPI-Key': '59f0db3649msh4cb00124f5c8564p191a6cjsnc468d27648d7',
  'X-RapidAPI-Host': 'car-data.p.rapidapi.com',
};

export function CarAutocomplete() {
  return (
    <CustomCarAutocomplete
      selectedOption={selectedValue}
      textFieldProps={{ label: 'Cars' }}
      header={header}
    />
  );
}
