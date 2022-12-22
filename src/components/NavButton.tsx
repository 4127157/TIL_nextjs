import Link from 'next/link';
import styles from '../styles/NavButton.module.css';

type Props = {
    align: 'right' | 'left',
    to: string,
    text: "Previous" | "Next" | "Home" 
};

const NavButton = ({align, to, text}: Props) => {
    let className = styles.navButton;
    if(align === 'right') {
        className = `${className} ${styles.textAligner}`;
    }

    return (
        <Link className={className} href={to} passHref>
            {text}
        </Link>
    );
}

export default NavButton;
