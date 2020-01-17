import {useState} from 'react';

const useLocalStorage = (player, inititalValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        if (localStorage.getItem(player)) {
            return JSON.parse(localStorage.getItem(player));
        } else {
            localStorage.setItem(player, JSON.stringify(inititalValue));
            return inititalValue;
        }
    })
    const setValue = value => {
        setStoredValue(value);
        localStorage.setItem(player, JSON.stringify(value));
    };
    return [storedValue, setValue];
}

export default useLocalStorage;
