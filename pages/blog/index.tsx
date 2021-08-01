import React from 'react'

import { Layout } from '../../components/layout'
import { promises } from 'fs'
import { GetStaticProps } from 'next'
import { resolve } from 'path'
import { getBlog } from '../../docs'
import { useRouter } from 'next/dist/client/router'
import { format, parse } from 'date-fns'

type BlogSummary = { title: string, description: string, slug: string, date: string, formattedDate: string }

export const getStaticProps: GetStaticProps = async (context) => {
    const files = await promises.readdir(`${__dirname}/../../../blog`)
    const blogs: BlogSummary[] = []
    for (const file of files) {
        const { props } = await getBlog(resolve(`${__dirname}/../../../blog/${file}`))
        blogs.push({
            title: props.data.title,
            description: props.data.description,
            slug: file.replace('.md', ''),
            date: file.split('-')[0],
            formattedDate: format(parse(file.split('-')[0], 'yyyyMMdd', new Date()), 'dd MMM yyyy')
        })
    }
    return {
        props: { blogs: blogs.sort((a, b) => a.date.localeCompare(b.date) ) }
    }
}


const Page: React.FunctionComponent<{ blogs: BlogSummary[] }> = (props) => {
    console.log(props)
    const router = useRouter()
    return <Layout>
        <ul className="max-w-screen-lg mx-4 lg:mx-auto w-full  select-none">
            {props.blogs.map(({ title, slug, description, formattedDate }) => {
                return <li onClick={() => router.push(`/blog/${slug}`)} key={slug} className="border rounded w-full px-4 my-4 py-2 cursor-pointer hover:bg-gray-100" style={{ height: 'fit-content' }}>
                    <span>{formattedDate}</span>
                    <h4 className="text-2xl">{title}</h4>
                    <p className="text-lg">{description}</p>
                </li>
            })}
        </ul>
    </Layout>
}

export default Page