import { useState, useCallback, useEffect } from "react";

type DebounceFunction = (...args: any[]) => void;

const useDebounceCallback = (func: DebounceFunction, delay: number, deps: any[]) => {
  const [timerId, setTimerId] = useState<ReturnType<typeof setTimeout> | null>(null);

  const debounceCallback = useCallback(() => {
    if (!delay) return;
    if (timerId) {
      clearTimeout(timerId);
    }

    const newTimerId = setTimeout(() => {
      func();
    }, delay);

    setTimerId(newTimerId);
  }, [delay, func, timerId, ...deps]);

  const clearTimer = () => {
    if (timerId) {
      clearTimeout(timerId);
    }
  };

  useEffect(() => {
    debounceCallback();

    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [delay, ...deps]);

  return {
    debounceCallback,
    clearTimer,
  };
};

export default useDebounceCallback;
