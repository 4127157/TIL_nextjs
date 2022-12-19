import { GetStaticProps } from "next";
import { getLatestPost } from '../lib/posts';

export default function Home({ latestPost }: 
{
    latestPost: {
        title: string,
        date: string,
        contentHtml: string
    }
})
    {
        return (
            <>
                <div dangerouslySetInnerHTML={{__html: latestPost.contentHtml}} />
            </>
        );
}

//Make function in lib

export const getStaticProps: GetStaticProps = async () => {
    let latestPost = await getLatestPost();
    return {
        props: {
            latestPost
        },
    };
    
}
