import styles from '../styles/ThemeSwitch.module.css';
import { Sun, Moon } from 'lucide-react';
import { useState } from 'react';

const ThemeSwitch = () => {
    const [icon, setIcon] = useState('sun');
    const [className, setClassName] = useState(`${styles.Switch}`);
    const iconRet = () =>{
        if(icon === 'sun'){
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
        if(icon === 'sun') { 
            setClassName(`${className} ${styles.dark}`)
            setIcon('moon');
        }
        else { 
            setClassName(`${styles.Switch}`);
            setIcon('sun');
        }
    }

    return (
        <>
            <button className={className} onClick={changeTheme} aria-hidden>
                {iconRet()}
            </button>
        </>
    );
}

export default ThemeSwitch;
