import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import NavComp from './NavComp';

type Props = {
    children: React.ReactNode,
    prevLink: string,
    nextLink: string,
    pageTitle: string,
    postDate: string,
}

export default function Layout({ children, prevLink, nextLink, pageTitle, postDate }: Props){
        return ( 
            <>
                <Head>
                    <title>{pageTitle}</title>
                </Head>
                <Header title={pageTitle} date={postDate}/>
                <main>{children}</main>
                <NavComp prev={prevLink} next={nextLink}/>
                <Footer/>
            </>
        );
}
