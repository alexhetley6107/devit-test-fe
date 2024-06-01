import { FC } from 'react';
import { TextField, TextFieldProps } from '@mui/material';

export const Input: FC<TextFieldProps> = (props) => {
  return (
    <TextField
      variant="outlined"
      type="number"
      required
      inputProps={{
        min: 1,
        step: 1,
        max: 100,
      }}
      {...props}
    />
  );
};
