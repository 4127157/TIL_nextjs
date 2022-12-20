import Link from 'next/link';
import styles from '../styles/NavButton.module.css';

type Props = {
    to: string,
    text: "Previous" | "Next" | "Home" 
};

const NavButton = ({to, text}: Props) => {
    return (
        <Link href={to} passHref>
            <button>{text}</button>
        </Link>
    );
}

export default NavButton;
