import { Paper, Stack } from '@mui/material';
import { Layout, Input, Button, Table } from '../shared/ui';
import { ChangeEvent, useState } from 'react';
import { useStartSend } from '../shared/hooks';

function App() {
  const [inputValue, setInputValue] = useState(1);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setInputValue(+e.target.value);

  const { isLoading, onSend, items } = useStartSend();

  const handleStart = async () => {
    let limit = inputValue;
    if (limit < 1) limit = 1;
    if (limit > 100) limit = 100;
    setInputValue(limit);

    await onSend(limit);
  };

  console.log({ items });

  return (
    <Layout>
      <Paper elevation={3}>
        <Stack width="300px" spacing={2} m={2}>
          <Input value={inputValue} onChange={handleChange} disabled={isLoading} />
          <Button loading={isLoading} disabled={isLoading} onClick={handleStart} />
        </Stack>
      </Paper>

      <Stack flexGrow={1}>
        <Table items={items} />
      </Stack>
    </Layout>
  );
}

export default App;
