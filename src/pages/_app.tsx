import '../styles/globals.css';
import Layout from '../components/Layout';

import { AppProps } from "next/app";
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps){
    const { prevLink, nextLink } = pageProps;
    const { title, date } = pageProps.postData;
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Layout prevLink={prevLink} nextLink={nextLink} pageTitle={title} postDate={date}>
                <Component {...pageProps}/>
            </Layout>
        </>
    );
}
