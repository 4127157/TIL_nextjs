import { GetStaticProps } from "next";
import { getLatestPost, getPrevNext } from '../lib/posts';

export default function Home({ postData}: 
{
    postData: {
        title: string,
        date: string,
        contentHtml: string
    }
})
    {
        return (
            <>
                <div dangerouslySetInnerHTML={{__html: postData.contentHtml}} />
            </>
        );
}

export const getStaticProps: GetStaticProps = async () => {
    let postData = await getLatestPost();
    const { prevLink, nextLink } = getPrevNext('/');
    return {
        props: {
            postData,
            prevLink,
            nextLink
        },
    };
    
}
