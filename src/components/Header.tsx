import styles from '../styles/Header.module.css';
import { parseISO, format } from 'date-fns';
import ThemeSwitch from './ThemeSwitch';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

type Props = {
    title: string,
    date: string,
};

export default function Header({title, date}: Props) {
    const {theme} = useContext(ThemeContext);
    let className = theme === 'dark' ? styles.headerClass : `${styles.headerClass} ${styles.light}`;

    const humanDate = format(parseISO(date), 'MMMM d, yyyy');
    return (
        <header className={className}>
            <div>
                <h1>TIL - {title}</h1>
                <span className={styles.dateClass}>Published: <time dateTime={date} lang='en'>{humanDate}</time></span>
            </div>
            <div className={styles.themeBtnContainer} aria-hidden>
                <ThemeSwitch />
            </div>
            <div className={styles.fallbackThemeBtnContainer} aria-hidden>
                <ThemeSwitch />
            </div>
        </header>
    );
}
