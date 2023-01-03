import layoutStyles from '../styles/Layout.module.css';
// import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import NavComp from './NavComp';
import { ThemeContext } from './ThemeContext';
import { useState } from 'react';

type Props = {
    children: React.ReactNode,
    prevLink: string,
    nextLink: string,
    pageTitle: string,
    postDate: string,
}


export default function Layout({ children, prevLink, nextLink, pageTitle, postDate }: Props){
    const [theme, setTheme]: ["dark", Function] = useState('dark');
    console.log(`[Layout]: ${theme}`);
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
