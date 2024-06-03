import { PropsWithChildren } from 'react';
import { Container, CssBaseline, Stack } from '@mui/material';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <CssBaseline />
      <Container>
        <Stack direction="row" p="20px" spacing={2} alignItems={'flex-start'}>
          {children}
        </Stack>
      </Container>
    </>
  );
};
