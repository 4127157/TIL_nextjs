import { createRef, useContext, useRef } from 'react';
import styles from '../styles/Footer.module.css';
import { ThemeContext } from './ThemeContext';

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
    const emojiRef = createRef<HTMLSpanElement>();
    const discordRef = createRef<HTMLSpanElement>();
    
    const {theme} = useContext(ThemeContext);
    let mainClassName = theme === 'dark' ? styles.footer : `${styles.footer} ${styles.Light}`;
    let linkClass = theme === 'dark' ? styles.LinksDark : '';

    const DELAY_MS = 1500;

    const handleClickCopy = (event: React.MouseEvent) => {
        const elem = event.target as HTMLElement;

        const discordElem = discordRef.current as HTMLSpanElement;
        const emojiElem = emojiRef.current as HTMLSpanElement;

        if(elem.firstChild?.textContent){
            let originalText = discordElem.firstChild!.textContent;
            let originalEmoji = emojiElem.firstChild!.textContent;
            navigator.clipboard.writeText(originalText!)
           .then(
                () => {
                    discordElem.firstChild!.textContent = "Copied!";
                    emojiElem.firstChild!.textContent = ' ✅';
                    setTimeout(() =>{
                        discordElem.firstChild!.textContent = originalText;
                        emojiElem.firstChild!.textContent = originalEmoji;
                    }, 1000);
                }, 
                () => {
                    alert("Clipboard write failed, copy text manually");
                }
           );
        }
    }

    const throttleCopy = throttle((e: React.MouseEvent) => handleClickCopy(e), DELAY_MS);

    return( 
        <footer className={mainClassName}>
            <ul className={styles.List}>
                <li>Github: <a target='_blank' href="https://github.com/4127157" className={linkClass}>github.com/4127157</a></li>
                <li>Discord: <span className={styles.DiscordUsername} onClick={throttleCopy}><span ref={discordRef}>4127157#0448<span ref={emojiRef} className={styles.Emoji}> 📋</span></span></span></li>
                <li>Website: <a target='_blank' href="https://malviya.dev/" className={linkClass}>malviya.dev</a></li>
            </ul>
            <span>Aryansh Malviya &copy; 2022</span>
        </footer>
    );
}
