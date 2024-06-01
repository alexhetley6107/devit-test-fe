import { Paper, Stack } from '@mui/material';
import { Layout, Input, Button, Item } from '../shared/ui';
import { ChangeEvent, useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState(1);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setInputValue(+e.target.value);

  return (
    <Layout>
      <Paper elevation={3}>
        <Stack width="300px" spacing={2} m={2}>
          <Input value={inputValue} onChange={handleChange} />
          <Button loading={false} disabled={false} />
        </Stack>
      </Paper>

      <Stack flexGrow={1} spacing={2}>
        <Item number={1} />
        <Item number={1} />
        <Item number={1} />
        <Item number={1} />
        <Item number={1} />
        <Item number={1} />
      </Stack>
    </Layout>
  );
}

export default App;
