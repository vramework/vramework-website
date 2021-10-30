import React from 'react'

import { Layout } from '../components/layout'
import { DetailSection } from '../components/detail-section'

import { codeDetails, designDetails, runDetails } from '../details'
import { Hero } from '../components/hero'

const Page: React.FunctionComponent = () => {    
  return <Layout>
    <div className="w-full">
      <Hero />
      <DetailSection className="pb-8" {...designDetails} />
      <DetailSection className="pb-8 border-b" {...codeDetails} />
      <DetailSection className="pb-8 border-b" {...runDetails} />
    </div>
  </Layout>
}

export default Page