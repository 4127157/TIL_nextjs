import headerStyles from '../styles/Header.module.css';

type Props = {
    title: string,
    date: string,
};

export default function Header({title, date}: Props) {
    //TODO: Have to format date to human readable form with date-fns 
    return (
        <header className={headerStyles.headerClass}>
            <div>
                <h1>TIL - {title}</h1>
                <span className={headerStyles.dateClass}>Published: <time dateTime={date} lang='en'>{date}</time></span>
            </div>
        </header>
    );
}
