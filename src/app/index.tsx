import { Paper, Stack } from '@mui/material';
import { Layout, Input, Button, Item } from '../shared/ui';
import { ChangeEvent, useState } from 'react';
import { axiosBase } from '../shared/axios';
import { REQUEST_AMOUNT } from '../shared/constants';

function App() {
  const [inputValue, setInputValue] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setInputValue(+e.target.value);

  const handleStart = async () => {
    setIsLoading(true);
    try {
      const promises = [];

      for (let i = 1; i <= REQUEST_AMOUNT; i++) {
        const promise = axiosBase.get(`/api?itemRef=${i}`);
        promises.push(promise);
      }

      const responses = await Promise.all(promises);

      console.log('responses', responses);
    } catch (error) {
      console.log('error', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <Paper elevation={3}>
        <Stack width="300px" spacing={2} m={2}>
          <Input value={inputValue} onChange={handleChange} disabled={isLoading} />
          <Button loading={isLoading} disabled={isLoading} onClick={handleStart} />
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
