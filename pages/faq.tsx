import React from 'react'
import docStyles from '../doc.module.css'

import { Layout } from '../components/layout'
import { GetStaticProps } from 'next'
import { getDoc, Doc } from '../docs'
import { PageTitle } from '../components/page-title'

export const getStaticProps: GetStaticProps = async (context) => {
    return getDoc('faq')    
}

const Page: React.FunctionComponent<Doc> = (props) => {
    return <Layout>
        <PageTitle title={props.data.title} subTitle={props.data.description} />
        <article id="doc" className="p-4 w-full max-w-screen-lg mx-auto" dangerouslySetInnerHTML={props} />
    </Layout>
}

export default Page