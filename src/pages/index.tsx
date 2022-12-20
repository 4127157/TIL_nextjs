import { GetStaticProps } from "next";
import NavComp from "../components/NavComp";
import { getLatestPost, getPrevNext } from '../lib/posts';

export default function Home({ latestPost, prevLink, nextLink }: 
{
    latestPost: {
        title: string,
        date: string,
        contentHtml: string
    },
    prevLink: string,
    nextLink: string,
})
    {
        return (
            <>
                <div dangerouslySetInnerHTML={{__html: latestPost.contentHtml}} />
                <NavComp prev={prevLink} next={nextLink}/>
            </>
        );
}

//Make function in lib

export const getStaticProps: GetStaticProps = async () => {
    let latestPost = await getLatestPost();
    const { prevLink, nextLink } = getPrevNext('/');
    return {
        props: {
            latestPost,
            prevLink,
            nextLink
        },
    };
    
}
