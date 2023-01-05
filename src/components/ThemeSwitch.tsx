import styles from '../styles/ThemeSwitch.module.css';
import { Sun, Moon } from 'lucide-react';
import { useContext, useState } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeSwitch = () => {
    const {theme, setTheme} = useContext(ThemeContext);
    console.log(`[ThemSwitch]: ${theme}`);
    
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
            setClassName(`${className} ${styles.dark}`);
            setTheme('light');
        } else { 
            setClassName(`${styles.Switch}`);
            setTheme('dark');
        }
    }

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
