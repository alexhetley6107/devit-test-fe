import { Stack } from '@mui/material';
import { FC } from 'react';
import { Item } from './Item';

type Props = {
  items: number[];
};

export const Table: FC<Props> = ({ items }) => {
  return (
    <Stack
      spacing={2}
      sx={{
        height: 'calc(100svh - 40px)',
        overflow: 'auto',
        pr: 2,
      }}
    >
      {items?.map((v) => (
        <Item number={v} />
      ))}
    </Stack>
  );
};
