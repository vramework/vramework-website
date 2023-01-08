import prism from 'remark-prism'
import { unified } from 'unified'
import html from 'remark-html'
import gfm from 'remark-gfm'
import slug from 'remark-slug'
import frontmatter from 'remark-frontmatter'
import extract from 'remark-extract-frontmatter'
import externalLinks from 'remark-external-links'
import parser from 'remark-parse'
import stringify from 'remark-stringify'
import { parse as parseYaml } from 'yaml'
import { promises } from 'fs'
const { readFile } = promises

export interface Doc {
  __html: string,
  data: {
    title: string,
    description: string
  }
}

export const getDoc = async (filename: string) => {
  const markdown = await readFile(`${__dirname}/../../../content/${filename}.md`, 'utf-8')
  const result = await unified()
    .use(parser)
    .use(gfm)
    .use(slug)
    .use(stringify)
    .use(frontmatter, ['yaml'])
    .use(extract, { yaml: parseYaml })
    .use(externalLinks, { protocols: ['http', 'https', 'mailto', 'tel'] })
    .use(prism)
    .use(html)
    .process(markdown)

  return {
    props: {
      __html: String(result),
      data: {
        title: result.data.title,
        description: result.data.description
      }
    }
  }
}

export const getBlog = async (path: string) => {
  const markdown = await readFile(path, 'utf-8')
  const result: any = await unified()
    .use(parser)
    .use(gfm)
    .use(slug)
    .use(stringify)
    .use(frontmatter, ['yaml'])
    .use(extract, { yaml: parseYaml })
    .use(externalLinks, { protocols: ['http', 'https', 'mailto', 'tel'] })
    .use(prism, {
      
    })
    .use(html)
    .process(markdown)

  return {
    props: {
      __html: String(result),
      data: {
        title: result.data.title,
        description: result.data.description,
        svg: result.data.svg
      }
    }
  }
}