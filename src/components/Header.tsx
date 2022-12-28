import styles from '../styles/Header.module.css';
import { parseISO, format } from 'date-fns';
import ThemeSwitch from './ThemeSwitch';

type Props = {
    title: string,
    date: string,
};

export default function Header({title, date}: Props) {
    const humanDate = format(parseISO(date), 'MMMM d, yyyy');
    return (
        <header className={styles.headerClass}>
            <div>
                <h1>TIL - {title}</h1>
                <span className={styles.dateClass}>Published: <time dateTime={date} lang='en'>{humanDate}</time></span>
            </div>
            <div className={styles.themeBtnContainer} aria-hidden>
                <ThemeSwitch />
            </div>
        </header>
    );
}
