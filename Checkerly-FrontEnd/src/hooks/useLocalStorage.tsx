import { useState, useEffect } from "react";

function useLocalStorage(key: string, initialValue: object) {
  const [value, setvalue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setvalue];
}

export default useLocalStorage;
