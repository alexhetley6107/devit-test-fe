import { Paper } from '@mui/material';
import { FC } from 'react';

interface Props {
  number: number;
}

export const Item: FC<Props> = ({ number }) => {
  return (
    <Paper elevation={3} sx={{ p: 1 }}>
      {number}
    </Paper>
  );
};
