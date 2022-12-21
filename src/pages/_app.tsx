import '../styles/globals.css';
import Layout from '../components/Layout';

import { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps){
    const { prevLink, nextLink } = pageProps;
    const { title, date } = pageProps.postData;
    return (
        <Layout prevLink={prevLink} nextLink={nextLink} pageTitle={title} postDate={date}>
            <Component {...pageProps}/>
        </Layout>
    );
}
