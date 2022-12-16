import { GetStaticProps } from "next";

export default function Home({ latestPost }: 
    {
        latestPost: {
            title: string,
            date: string,
            contentHtml: string
        }
    })
    {
        return <h1>Example Heading</h1>;
}

export const getStaticProps: GetStaticProps = async () => {
    let latestPost = {
        title: "title",
        date: "date",
        contentHtml: "contentHtml",
    };
    return {
        props: {
            latestPost
        },
    };
}
