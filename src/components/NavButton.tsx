import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import styles from '../styles/NavButton.module.css';
import { ThemeContext } from './ThemeContext';

type Props = {
    align: 'right' | 'left',
    to: string,
    text: "Previous" | "Next" | "Home" 
};

const NavButton = ({align, to, text}: Props) => {
    if(to !== '/'){
        to = '/'+to;
    }
    console.log(`[NavButton]: 'to' ${to}`);
    const {theme} = useContext(ThemeContext);
    let className = styles.navButton;
    
    if(theme === 'light'){
        className = `${styles.navButton} ${styles.Light}`;
    }

    if(align === 'right') {
        className = `${styles.navButton} ${styles.textAligner}`;
        if(theme === 'light'){
            className = `${styles.navButton} ${styles.textAligner} ${styles.Light}`;
        }
    }

    return (
        <a className={className} href={`.${to}`}>
            {text}
        </a>
    );
}

export default NavButton;
