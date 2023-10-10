import { useEffect, useState, useRef } from "react";

const useThrottle = <T>(value: T, delay: number): T => {
  const [throttledValue, setThrottledValue] = useState<T>(value);
  const lastValueRef = useRef<T>(value);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (value !== lastValueRef.current) {
      lastValueRef.current = value;
      if (!timeoutRef.current) {
        const timeout = setTimeout(() => {
          setThrottledValue(value);
          timeoutRef.current = null;
        }, delay);
        timeoutRef.current = timeout;
      }
    }
  }, [value, delay]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return throttledValue;
};

export default useThrottle;
