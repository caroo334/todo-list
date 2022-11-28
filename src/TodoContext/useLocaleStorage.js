import React, { useState, useEffect } from "react";

export function useLocalStorage(itemName, initialValue) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [item, setItem] = useState(initialValue);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 1000);
  });

  const saveItem = (newItems) => {
    // ACA GUARDAMOS EN EL LOCAL STORAGE
    try {
      const stringifiedItems = JSON.stringify(newItems);
      localStorage.setItem(itemName, stringifiedItems);
      setItem(newItems);
    } catch (error) {
      setError(error);
    }
  };

  return { item, saveItem, loading, error };
}
