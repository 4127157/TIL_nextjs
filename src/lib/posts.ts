import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDir = path.join(process.cwd(), 'src/posts');

function fileFetcher(str: string){
    const fileNames = fs.readdirSync(postsDir);

    if(str === 'latest'){
        return getLatestPostNum().toString();
    } else {
        let tempArr = fileNames.map(fileName => {
            return {
                params: {
                    id: fileName.replace(/\.md$/, '')
                }
            };
        });
        return tempArr;
    }
}

export function getLatestPost(){
    return getPostData(fileFetcher('latest') as string);
}

export function getLatestPostNum(){
    let files = fs.readdirSync(postsDir);

    let latestVal = files
    .map(fileName => parseInt(fileName.replace(/\.md$/, '')))
    .reduce((prev, curr) => { return prev = curr > prev ? curr : prev });
    return latestVal;
}

export function getOldestPostNum(){}

export function getAllPostsPaths(){
    return fileFetcher('');
}

export function getPrevNext(postId: string){
    
    let files = fs.readdirSync(postsDir);

    let filesNumArr = files
    .map(fileName => parseInt(fileName.replace(/\.md$/, '')));

    let latestPostNum = getLatestPostNum();

    let oldestPostNum = filesNumArr
    .reduce((prev, curr) => prev = curr < prev ? curr : prev);

    let postIdNum: null | number = null;

    postId != '/' ? 
        postIdNum = parseInt(postId) :
        postIdNum = latestPostNum;

    if(postIdNum === latestPostNum){
        return {
            prevLink: (latestPostNum - 1).toString(),
            nextLink: '',
        };
    }

    if(postIdNum === oldestPostNum){
        return {
            prevLink: '',
            nextLink: (oldestPostNum + 1).toString(),
        };
    }

    return {
        prevLink: (postIdNum - 1).toString(),
        nextLink: (postIdNum + 1).toString(),
    }

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

//Throttle function for future use 
export function throttle<F extends (...args: any[]) => any>(fn: F, delay: number): F{
    let lastCall = 0;
    return function(this: any, ...args: any[]) {
        const currentTime = new Date().getTime();
        if(currentTime - lastCall >= delay){
            lastCall = currentTime;
            fn.apply(this, args);
        }
    } as F;
} 

