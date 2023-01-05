import styles from '../styles/ThemeSwitch.module.css';
import { Sun, Moon } from 'lucide-react';
import { useContext, useMemo, useState } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeSwitch = () => {
    const {theme, setTheme} = useContext(ThemeContext);
    
    const [className, setClassName] = useState(`${styles.Switch}`);

    const iconRet = () =>{
        if(theme === 'dark'){
            return <Sun
                        color='#FAFAFA'
                        strokeWidth={2}/>;
        } else {
            return <Moon
                        color='#212121'
                        strokeWidth={2} />;
        }
    }

    const changeTheme = () => {
        if(theme === 'dark') {
            setTheme('light');
            window.localStorage.setItem('theme', 'light');
        } else if(theme === 'light') {
            setTheme('dark');
            window.localStorage.setItem('theme', 'dark');
        }
    }

    useMemo(() => {
        if(theme === 'dark'){
            setClassName(`${styles.Switch}`);
        } else if (theme === 'light'){
            setClassName(`${className} ${styles.dark}`);
        }
    }, [theme]);

    return (
        <>
            <button className={className} onClick={changeTheme} aria-hidden>
                <div className={styles.iconContainer}>
                    {iconRet()}
                </div>
            </button>
        </>
    );
}

export default ThemeSwitch;
