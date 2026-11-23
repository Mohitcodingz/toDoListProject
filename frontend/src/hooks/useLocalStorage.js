import React, { useEffect, useState } from 'react'

export default function useLocalStorage(key, initialValue) {
    const [storedValue, SetStoredValue] = useState(
        () => {
            try {
                const item = window.localStorage.getItem(key);
                return item ? JSON.parse(item) : initialValue;
            }
            catch (error) {
                console.error('The error is ', error);
                return initialValue
            }
        }
    )

    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(storedValue))
        }
        catch (error) {
            console.error('the error is', error);

        }
    }, [key, storedValue])
    return [storedValue, SetStoredValue]
}
