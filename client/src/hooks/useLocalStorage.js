import {useState} from 'react';

const useLocalStorage = (key, inititalValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        if (localStorage.getItem(key)) {
            return JSON.parse(localStorage.getItem(key));
        } else {
            localStorage.setItem(key, JSON.stringify(inititalValue));
            return inititalValue;
        }
    })
    const setValue = value => {
        setStoredValue(value);
        localStorage.setItem(key, JSON.stringify(value));
    };
    return [storedValue, setValue];
}

export default useLocalStorage;
