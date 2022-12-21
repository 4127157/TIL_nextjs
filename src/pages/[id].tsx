import { GetStaticProps } from "next";
import { getLatestPost, getPostData } from "../lib/posts";
import { getAllPostsPaths } from "../lib/posts";
import { getPrevNext } from '../lib/posts';

export default function Post({
    postData
}: {
    postData: {
        title: string,
        date: string, 
        contentHtml: string,
    } 
}){
    return (
    <>
        <div dangerouslySetInnerHTML={{__html: postData.contentHtml}} />
    </>
    );
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    if(params?.id){
        const postData = await getPostData(params.id as string);
        const { prevLink, nextLink } = getPrevNext(params?.id as string);
        return {
            props: {
                postData,
                prevLink,
                nextLink,
            },
        };
    } else {
        const postData = await getLatestPost();
        const { prevLink, nextLink } = getPrevNext('/');
        return {
            props: {
                postData,
                prevLink,
                nextLink,
            },
        };
    }
}

export async function getStaticPaths() {
    const paths = getAllPostsPaths();
    return {
        paths,
        fallback: false,
    };
}
