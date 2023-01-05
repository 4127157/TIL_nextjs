import layoutStyles from '../styles/Layout.module.css';
// import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import NavComp from './NavComp';
import { ThemeContext } from './ThemeContext';
import { useEffect, useState, useMemo } from 'react';

type Props = {
    children: React.ReactNode,
    prevLink: string,
    nextLink: string,
    pageTitle: string,
    postDate: string,
}


export default function Layout({ children, prevLink, nextLink, pageTitle, postDate }: Props){
    const [theme, setTheme]: ["dark" | "light", Function] = useState('dark');
    
    useEffect(() => setTheme(setThemeExists()), []);
    
    function setThemeExists(){
        let themeItem = window.localStorage.getItem('theme');

        if(themeItem === 'dark' || themeItem === 'light'){
            return themeItem;
        }

        return 'dark';
    }

    // function clearLocalStorage() {
    //     console.log(`[Layout]: [clearLocalStorage]: Theme in localStorage ${window.localStorage.getItem('theme')}`);

    //     window.localStorage.removeItem('theme');

    //     console.log(`[Layout]: Local Storage Cleared`);
    //     console.log(`[Layout]: [clearLocalStorage]: Theme in localStorage ${window.localStorage.getItem('theme')}`);
    // }

    let contentClass = theme === 'dark' ? layoutStyles.mainContent : `${layoutStyles.mainContent} ${layoutStyles.Light}`;
        return ( 
            <div className={contentClass}>
                <ThemeContext.Provider value={{theme, setTheme}}>
                    <Header title={pageTitle} date={postDate}/>
                    <main className={layoutStyles.articleContent}>
                            {children}
                    </main>
                    <NavComp prev={prevLink} next={nextLink}/>
                    <Footer/>
                </ThemeContext.Provider>
            </div>  
            
        );
}
