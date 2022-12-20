import { GetStaticProps } from "next";
import NavComp from "../components/NavComp";
import { getPostData } from "../lib/posts";
import { getAllPostsPaths } from "../lib/posts";
import { getPrevNext } from '../lib/posts';

export default function Post({
    postData,
    prevLink,
    nextLink
}: {
    postData: {
        title: string,
        date: string, 
        contentHtml: string,
    }, 
    prevLink: string, 
    nextLink: string
}){
    return (
    <>
        <div dangerouslySetInnerHTML={{__html: postData.contentHtml}} />
        <NavComp prev={prevLink} next={nextLink} />
    </>
    );
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const postData = await getPostData(params?.id as string);
    const { prevLink, nextLink } = getPrevNext(params?.id as string);
    return {
        props: {
            postData,
            prevLink,
            nextLink,
        },
    };
}

export async function getStaticPaths() {
    const paths = getAllPostsPaths();
    return {
        paths,
        fallback: false,
    };
}
