import { GetStaticProps } from "next";
import { getPostData } from "../lib/posts";
import { getAllPostsPaths } from "../lib/posts";

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
    const postData = await getPostData(params?.id as string);
    return {
        props: {
            postData,
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
