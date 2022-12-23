import { useEffect } from 'react';

type dependencyType = [value: any, delay?: number];

const useDebounce = (cb: () => void, [value, delay = 500]: dependencyType) => {
  useEffect(() => {
    const handler = setTimeout(() => {
      cb();
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [cb, value, delay]);
};
export default useDebounce;
