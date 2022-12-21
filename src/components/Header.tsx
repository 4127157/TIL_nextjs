
type Props = {
    title: string,
    date: string,
};

export default function Header({title, date}: Props) {
    //TODO: Have to format date to human readable form with date-fns 
    return (
        <header>
            <h1>{title} - Aryansh Malviya's TIL</h1>
            <span>Published: <time dateTime={date} lang='en'>{date}</time></span>
        </header>
    );
}
