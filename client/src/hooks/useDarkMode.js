import {useEffect} from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
    const [value, setValue] = useLocalStorage('dark-mode', false);

    useEffect(() => {
        if (value === true) {
            return document.body.classList.add('dark-mode');
        } else {
            return document.body.classList.remove('dark-mode');
        }
    }, [value]);

    const toggleMode = e => {
        e.preventDefault();
        setValue(!value);
    };

    return [value, toggleMode];
}

export default useDarkMode;


