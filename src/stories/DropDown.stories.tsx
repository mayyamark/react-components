import React from 'react';
import { Meta } from '@storybook/react';
import CustomDropdown from '../components/Dropdown';

const meta: Meta = {
  title: 'Dropdown',
  component: CustomDropdown,
};

export default meta;

const optionList = [
  { id: 1, option: 'Red' },
  { id: 2, option: 'Blue' },
  { id: 3, option: 'Green' },
  { id: 4, option: 'Black' },
  { id: 5, option: 'White' },
];

export function Dropdown() {
  return <CustomDropdown label="Colors" dropDownOptions={optionList} />;
}
