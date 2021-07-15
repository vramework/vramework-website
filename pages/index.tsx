import React, { useEffect } from 'react'
import prism from "prismjs"
import 'prismjs/components/prism-typescript'

import { Layout } from '../components/layout'
import { DetailSection } from '../components/detail-section'

import { codeDetails, designDetails, runDetails } from '../details'

const Page: React.FunctionComponent = () => {    
  useEffect(() => {
    prism.highlightAll()
  }, [])

  return <Layout>
    <div className="flex flex-col w-full">
      <DetailSection className="pb-8" {...designDetails} />
      <DetailSection className="pb-8 border-b" {...codeDetails} />
      <DetailSection className="pb-8 border-b" {...runDetails} />
      <pre className="m-0">
        <code className="language-typescript">{`

// Lets look at code!
// Creating this file and running the generateRoutes will automatically add this API endpoint to
// express or/and serverless.

interface SendGreedingCard {
  toUser: string,
  emailText: string
}

interface SendGreedingCardResult {
  message: string
}

const sendGreetingCard: APIFunction<SendGreedingCard, SendGreedingCardResult> = (services, data, session) => {
  // This line can be any database driver
  const [fromUser, toUser] = await Promise.all(
    services.database.getCrud('user', ['email'], { userId: session.userId }, new UserNotFoundError())
    services.database.getCrud('user', ['email'], { userId: data.toUser }, new UserNotFoundError())
  )
  // Assuming you have en email service hooked up!
  await services.email.sendGreetingEmail({
    fromEmail: fromUser.email,
    toUser: toUser.email,
    body: data.emailText
  })
  return {
    message: 'Email sent!'
  }
}

const isBelowEmailLimit: APIPermission = async (services, data, session) => {
  // Assuming you have your limits set in a cache TTL record
  const limit = services.cache.getUserGreetingCardLimit(session.userId)
  return limit < 300
}

export const routes: APIRoutes = [{
  // The TYPE of HTTP Message
  type: 'post',
  // The HTTP Route (supports query and path params)
  route: 'v1/send-greeting-card',
  // The function to execute
  func: sendGreetingCard,
  // The JSON schema to generate from typescript and validate against
  schema: 'SendGreedingCard',
  // A set of permissions to check against, at least one has to be valid
  permissions: { 
    // Either a collection of permissions to be anded
    canSendCard: [isFreeMember, isBelowEmailLimit],
    // Or a single one
    isPaidMember
  }
}]
        `}</code>
      </pre>
    </div>
  </Layout>
}

export default Page