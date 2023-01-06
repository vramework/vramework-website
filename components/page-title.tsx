import Head from 'next/head'
import * as React from 'react'


export const PageTitle: React.FunctionComponent<{ title: string, subTitle: string }> = ({ title, subTitle }) => {
    return <>
    <Head>
          <title>{`Vramework.io: ${title}`}</title>
          <meta name="description" content={subTitle} />
      </Head>
      <h1 className="mt-6 w-full text-5xl leading-tight md:text-5xl font-semibold text-center md:leading-snug">
    {title}
  </h1>
  <h2 className="my-4 w-full text-2xl font-semibold text-center text-gray-400">
   {subTitle}
  </h2></>
}