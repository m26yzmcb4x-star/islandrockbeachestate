import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export async function getPageContent(pageName: string) {
    const fullPath = path.join(contentDirectory, 'pages', `${pageName}.md`);

    // Check if file exists
    if (!fs.existsSync(fullPath)) {
        console.error(`Content file not found: ${fullPath}`);
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return data;
}
