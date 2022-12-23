import headerStyles from '../styles/Header.module.css';
import { parseISO, format } from 'date-fns';

type Props = {
    title: string,
    date: string,
};

export default function Header({title, date}: Props) {
    const humanDate = format(parseISO(date), 'MMMM d, yyyy');
    return (
        <header className={headerStyles.headerClass}>
            <div>
                <h1>TIL - {title}</h1>
                <span className={headerStyles.dateClass}>Published: <time dateTime={date} lang='en'>{humanDate}</time></span>
            </div>
        </header>
    );
}
