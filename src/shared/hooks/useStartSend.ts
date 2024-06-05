import { useState } from 'react';
import { MAX_REQUEST_AMOUNT, ONE_SEC } from '../constants';
import { axiosBase } from '../axios';

export const useStartSend = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState<Array<number | null>>([]);

  const onSend = async (limit: number) => {
    setItems([]);
    setIsLoading(true);

    const iterationsLength = Math.ceil(MAX_REQUEST_AMOUNT / limit);
    const lastIterationRequestsAmount = MAX_REQUEST_AMOUNT % limit;

    let requestIndex = 0;

    for (let i = 1; i <= iterationsLength; i++) {
      const amount = lastIterationRequestsAmount && i === iterationsLength ? lastIterationRequestsAmount : limit;

      const promises = [];

      for (let j = 1; j <= amount; j++) {
        requestIndex += 1;

        const promise = axiosBase
          .get<number>(`/api?itemRef=${requestIndex}`)
          .then((data) => setItems((prev) => [data.data, ...prev]))
          .catch(() => setItems((prev) => [null, ...prev]));
        promises.push(promise);
      }

      const startTime = Date.now();

      await Promise.allSettled(promises);

      const finishTime = Date.now();
      const difference = finishTime - startTime;

      if (difference < ONE_SEC) {
        await new Promise((resolve) => {
          setTimeout(() => resolve('done'), difference);
        });
      }
    }

    setIsLoading(false);
  };

  return { isLoading, onSend, items };
};
