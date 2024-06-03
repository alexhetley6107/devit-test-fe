import { Paper, Stack } from '@mui/material';
import { FC } from 'react';

type Props = {
  items: Array<number | null>;
};

export const Table: FC<Props> = ({ items }) => {
  return (
    <Stack spacing={2} sx={{ height: 'calc(100svh - 40px)', overflow: 'auto', pr: 2 }}>
      {items?.map((num) => (
        <Paper elevation={3} sx={{ p: 1 }}>
          {num ?? 'ERROR'}
        </Paper>
      ))}
    </Stack>
  );
};
