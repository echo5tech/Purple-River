import { readdir, readFile } from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

export type PostMeta = {
  slug: string
  title: string
  dek: string
  date: string
  category: string
  readingTime: string
  featured?: boolean
  pullQuote?: string
}

export type Post = PostMeta & { content: string }

const postsDir = path.join(process.cwd(), 'src', 'content', 'blog')

export async function getAllPostMeta(): Promise<PostMeta[]> {
  const files = await readdir(postsDir)
  const mdxFiles = files.filter((f) => f.endsWith('.mdx'))

  const posts = await Promise.all(
    mdxFiles.map(async (file) => {
      const raw = await readFile(path.join(postsDir, file), 'utf8')
      const { data } = matter(raw)
      return {
        slug: file.replace(/\.mdx$/, ''),
        title: data.title ?? '',
        dek: data.dek ?? '',
        date: data.date ?? '',
        category: data.category ?? 'General',
        readingTime: data.readingTime ?? '3 min read',
        featured: data.featured ?? false,
        pullQuote: data.pullQuote,
      } satisfies PostMeta
    })
  )

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getPost(slug: string): Promise<Post | null> {
  try {
    const raw = await readFile(path.join(postsDir, `${slug}.mdx`), 'utf8')
    const { data, content } = matter(raw)
    return {
      slug,
      title: data.title ?? '',
      dek: data.dek ?? '',
      date: data.date ?? '',
      category: data.category ?? 'General',
      readingTime: data.readingTime ?? '3 min read',
      featured: data.featured ?? false,
      pullQuote: data.pullQuote,
      content,
    }
  } catch {
    return null
  }
}

export async function getAllSlugs(): Promise<string[]> {
  const files = await readdir(postsDir)
  return files.filter((f) => f.endsWith('.mdx')).map((f) => f.replace(/\.mdx$/, ''))
}
