/* eslint-disable @next/next/no-img-element */
import React from 'react'

import { Layout } from '../../components/layout'
import { promises } from 'fs'
import { GetStaticProps } from 'next'
import { resolve } from 'path'
import { getBlog } from '../../docs'
import { useRouter } from 'next/dist/client/router'
import { format, parse } from 'date-fns'

type BlogSummary = { title: string, description: string, slug: string, svg: string, date: string, formattedDate: string }

export const getStaticProps: GetStaticProps = async (context) => {
    const files = await promises.readdir(`${__dirname}/../../../blog`)
    const blogs: BlogSummary[] = []
    for (const file of files) {
        const { props } = await getBlog(resolve(`${__dirname}/../../../blog/${file}`))
        blogs.push({
            title: props.data.title,
            description: props.data.description,
            svg: props.data.svg,
            slug: file.replace('.md', ''),
            date: file.split('-')[0],
            formattedDate: format(parse(file.split('-')[0], 'yyyyMMdd', new Date()), 'dd MMM yyyy')
        })
    }
    return {
        props: { blogs: blogs.sort((a, b) => a.date.localeCompare(b.date)) }
    }
}


const Page: React.FunctionComponent<{ blogs: BlogSummary[] }> = (props) => {
    const router = useRouter()
    return <Layout>
        <div className="max-w-screen-lg mx-auto my-4">
            <h1 className="w-full text-5xl leading-tight md:text-5xl font-semibold text-center md:leading-snug">
                Vramework Blog
            </h1>
            <h2 className="my-4 w-full text-2xl font-semibold text-center text-gray-400">
                A collection of articles discussing vramework concepts
            </h2>
            <div className="mx-4">
                <ul className="max-w-screen-lg w-full select-none">
                    {props.blogs.map(({ title, slug, description, formattedDate, svg }) => {
                        return <li onClick={() => router.push(`/blog/${slug}`)} key={slug} className="border rounded w-full px-4 my-4 py-2 cursor-pointer hover:bg-gray-100" style={{ height: 'fit-content' }}>
                            <article className="flex flex-col md:flex-row items-center">
                                <img alt={svg} className="w-28 h-28 md:w-16 md:h-16 mt-4 mb-4 md:mt-4 md:mb-0 md:mr-4" src={`/svg/${svg}.svg`} />
                                <div>
                                    <span>{formattedDate}</span>
                                    <h4 className="text-2xl">{title}</h4>
                                    <p className="text-lg">{description}</p>
                                </div>
                            </article>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    </Layout>
}

export default Page