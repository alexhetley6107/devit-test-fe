import { useState } from 'react';
import { REQUEST_AMOUNT } from '../constants';
import { axiosBase } from '../axios';

export const useStartSend = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState<number[]>([]);

  const onSend = async (limit: number) => {
    setIsLoading(true);

    try {
      const promises = [];
      console.log(limit);

      for (let i = 1; i <= REQUEST_AMOUNT; i++) {
        const promise = axiosBase.get(`/api?itemRef=${i}`);
        promises.push(promise);
      }

      const responses = await Promise.all(promises);
      if (responses) {
        const reses = responses.map((r) => r.data as number);

        setItems(reses);
      }

      console.log('responses', responses);
    } catch (error) {
      console.log('error', error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, onSend, items };
};
