import footerStyles from '../styles/Footer.module.css';
export default function Footer() {
    return( 
        <footer className={footerStyles.footer}>
            <ul>
                <li>Github: <a target='_blank' href="https://github.com/4127157">github.com/4127157</a></li>
                <li>Discord: <span className="click_to_copy">4127157#0448</span></li>
                <li>Website: <a target='_blank' href="https://malviya.dev/">malviya.dev</a></li>
            </ul>
            <span>Aryansh Malviya &copy; 2022</span>
        </footer>
    );
}
