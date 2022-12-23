import { useRef } from 'react';
import styles from '../styles/Footer.module.css';

function throttle<F extends (...args: any[]) => any>(fn: F, delay: number): F{
    let lastCall = 0;
    return function(this: any, ...args: any[]) {
        const currentTime = new Date().getTime();
        if(currentTime - lastCall >= delay){
            lastCall = currentTime;
            fn.apply(this, args);
        }
    } as F;
} 


export default function Footer() {

    const DELAY_FOR_CLICK = 2000;

    const handleClickCopy = (event: React.MouseEvent) => {
        const elem = event.target as HTMLElement;
        if(elem.firstChild?.textContent){
            let originalText = elem.firstChild!.textContent;
            navigator.clipboard.writeText(elem.firstChild.textContent)
           .then(
                () => {
                    elem.firstChild!.textContent = "Copied!";
                    setTimeout(() => elem.firstChild!.textContent = originalText, 1000);
                }, 
                () => {
                    alert("Clipboard write failed, copy text manually");
                }
           );
        }
    }

    const throttleCopy = throttle((e: React.MouseEvent) => handleClickCopy(e), DELAY_FOR_CLICK);

    return( 
        <footer className={styles.footer}>
            <ul className={styles.List}>
                <li>Github: <a target='_blank' href="https://github.com/4127157">github.com/4127157</a></li>
                <li>Discord: <span className={styles.DiscordUsername} onClick={throttleCopy}>4127157#0448<span className={styles.Emoji}>📋</span></span></li>
                <li>Website: <a target='_blank' href="https://malviya.dev/">malviya.dev</a></li>
            </ul>
            <span>Aryansh Malviya &copy; 2022</span>
        </footer>
    );
}
