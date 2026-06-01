import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export async function getPageContent(pageName: string) {
    const fullPath = path.join(contentDirectory, 'pages', `${pageName}.md`);

    if (!fs.existsSync(fullPath)) {
        console.error(`Content file not found: ${fullPath}`);
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return data;
}

export type BlogPost = {
    title: string;
    slug: string;
    date: string;
    author: string;
    excerpt: string;
    readTime: string;
    coverImage: string;
    sections: { heading: string; content: string }[];
};

export async function getBlogPosts(): Promise<BlogPost[]> {
    const blogDir = path.join(contentDirectory, 'blog');
    if (!fs.existsSync(blogDir)) return [];

    const files = fs.readdirSync(blogDir).filter((f) => f.endsWith('.md'));

    return files
        .map((file) => {
            const fullPath = path.join(blogDir, file);
            const { data } = matter(fs.readFileSync(fullPath, 'utf8'));
            return {
                title: data.title ?? '',
                slug: data.slug ?? file.replace('.md', ''),
                date: data.date ?? '',
                author: data.author ?? '',
                excerpt: data.excerpt ?? '',
                readTime: data.readTime ?? '',
                coverImage: data.coverImage ?? '',
                sections: data.sections ?? [],
            } as BlogPost;
        })
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
    const fullPath = path.join(contentDirectory, 'blog', `${slug}.md`);
    if (!fs.existsSync(fullPath)) return null;

    const { data } = matter(fs.readFileSync(fullPath, 'utf8'));
    return {
        title: data.title ?? '',
        slug: data.slug ?? slug,
        date: data.date ?? '',
        author: data.author ?? '',
        excerpt: data.excerpt ?? '',
        readTime: data.readTime ?? '',
        coverImage: data.coverImage ?? '',
        sections: data.sections ?? [],
    };
}
