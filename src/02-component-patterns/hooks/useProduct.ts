import { useState, useEffect, useRef } from 'react';
import { InitialValues, onChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
};

export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
  }, []);


  useEffect(() => {
    if (!isMounted.current) return;

    setCounter(initialValues?.count || value);
  }, [value]);

  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0);
    if (initialValues?.maxCount && newValue > initialValues.maxCount) return;

    setCounter(newValue);
    onChange && onChange({ count: newValue, product });
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
    onChange && onChange({ count: 0, product });
  };

  return {
    counter,
    isMaxCountReached: !!initialValues?.maxCount && counter >= initialValues.maxCount,
    maxCount: initialValues?.maxCount,

    increaseBy,
    reset,
  }
};
