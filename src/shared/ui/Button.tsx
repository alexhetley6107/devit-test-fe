import { CircularProgress } from '@mui/material';
import MuiButton, { ButtonProps } from '@mui/material/Button';
import { FC } from 'react';

interface Props extends ButtonProps {
  loading: boolean;
}

export const Button: FC<Props> = ({ loading, ...props }) => {
  return (
    <MuiButton {...props} variant="contained">
      {loading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'START'}
    </MuiButton>
  );
};
