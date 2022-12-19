import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDir = path.join(process.cwd(), 'src/posts');

function fileFetcher(str: string){
    const fileNames = fs.readdirSync(postsDir);

    if(str === 'latest'){
        let latestVal = fileNames
        .map(fileName => parseInt(fileName.replace(/\.md$/, '')))
        .reduce((prev, curr) => { return prev = curr > prev ? curr : prev });
        return latestVal.toString();
    } else {
        return fileNames.map(fileName => {
            return {
                params: {
                    id: fileName.replace(/\.md$/, '')
                }
            };
        });
    }
}

export function getLatestPost(){
    return getPostData(fileFetcher('latest') as string);
}

export function getAllPostsPaths(){
    return fileFetcher('');
}

export async function getPostData(id: string){
    const fullPath = path.join(postsDir, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    //Metadata within files 
    const matterResult = matter(fileContents);

    //Converting markdown into HTML string 
    const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

    const contentHtml = processedContent.toString();

    // Return metadata and content 
    return {
        id,
        contentHtml,
        ...(matterResult.data as { date: string, title: string})
    };
}
