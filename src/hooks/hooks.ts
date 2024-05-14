import { useEffect, useState } from "react";

// Debounce function
const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set debouncedValue to value (passed in) after the specified delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup function to clear the timeout
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // Only re-call effect if value or delay changes

  return debouncedValue;
}


// Local storage custom hook
const useLocalStorage = (key: string, initialValue: SelectedProduct[] | []) => {
  const [value, setValue] = useState(() => {
    if(typeof window === 'undefined') return initialValue;

    try {
      const storedValue = window.localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() => { 
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);


  return [value, setValue];
}

export {useDebounce , useLocalStorage};
