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
  selectedOption: (value: unknown) => void;
  header: HeadersInit;
}

const debounce = (fn: Function, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};

const SearchCarAutocomplete: React.FC<AutocompleteProps> = ({
  textFieldProps,
  selectedOption,
  header,
}: AutocompleteProps) => {
  const { cars, loading, error, search } = useCarSearch(header);

  const handleChange = (value: string) => {
    if (value.length >= 3) {
      search(value);
    }
  };

  const debouncedFunction = debounce(handleChange, 1000);

  return (
    <Autocomplete
      onInputChange={(event, value) => {
        debouncedFunction(value);
      }}
      onChange={(event, value) => selectedOption(value)}
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
          }}
        />
      )}
    />
  );
};

export default SearchCarAutocomplete;
