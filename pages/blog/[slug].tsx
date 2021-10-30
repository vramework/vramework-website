import React from 'react'

import { Layout } from '../../components/layout'
import { GetStaticProps, GetStaticPaths } from 'next'
import { Doc, getBlog } from '../../docs'

import { promises } from 'fs'
import { resolve } from 'path'
import { PageTitle } from '../../components/page-title'

export const getStaticPaths: GetStaticPaths = async () => {
    const files = await promises.readdir(`${__dirname}/../../../../blog`)
    const paths = files.filter(p => p.endsWith('md')).map(slug => ({
        params: { 
            slug: slug.replace('.md', '')
        }
    }))
    return {
        paths,
        fallback: false
      }
}

export const getStaticProps: GetStaticProps = async (context) => {
    return await getBlog(resolve(`${__dirname}/../../../../blog/${context.params!.slug as string}.md`))
}

const Page: React.FunctionComponent<Doc> = (props) => {
    return <Layout>
        <PageTitle title={props.data.title} subTitle={props.data.description} />
        {props.__html && <article id="doc" className="p-4 w-full max-w-screen-lg mx-auto" dangerouslySetInnerHTML={props} />}
    </Layout>
}

export default Page