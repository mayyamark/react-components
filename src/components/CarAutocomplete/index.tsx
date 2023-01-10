import React from 'react';
import {
  TextField,
  CircularProgress,
  Autocomplete,
  InputAdornment,
  TextFieldProps,
} from '@mui/material';
import useCarSearch from '../../hooks/useCarSearch';

interface AutocompleteProps {
  textFieldProps?: TextFieldProps;
  onChangeCallback?: (value: unknown) => void;
  headers: HeadersInit;
}

const debounce = (fn: Function, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: unknown, ...args: unknown[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};

const SearchCarAutocomplete: React.FC<AutocompleteProps> = ({
  textFieldProps,
  onChangeCallback,
  headers,
}: AutocompleteProps) => {
  const { cars, loading, error, search } = useCarSearch(headers);

  const handleChange = (value: string) => {
    if (value.length >= 3) {
      search(value);
    }
  };

  const debouncedFunction = debounce(handleChange, 1000);

  return (
    <Autocomplete
      onInputChange={(event, value, reason) => {
        if (reason === 'input') {
          debouncedFunction(value);
        }
      }}
      onChange={(event, value) => {
        if (onChangeCallback !== undefined) {
          onChangeCallback(value);
        }
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      options={cars}
      getOptionLabel={(option) =>
        `${option.make} ${option.model} ${option.year}`
      }
      renderInput={(option) => (
        <TextField
          {...textFieldProps}
          helperText={error ? 'An error' : textFieldProps?.helperText ?? ''}
          error={error}
          {...option}
          InputProps={{
            ...option.InputProps,
            endAdornment: (
              <InputAdornment position="end">
                {loading && <CircularProgress />}
                {option.InputProps.endAdornment}
              </InputAdornment>
            ),
            ...textFieldProps?.InputProps,
          }}
        />
      )}
    />
  );
};

export default SearchCarAutocomplete;
