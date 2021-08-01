import React, { useEffect } from 'react'
import prism from "prismjs"
import 'prismjs/components/prism-typescript'

import { Layout } from '../components/layout'
import { DetailSection } from '../components/detail-section'

import { codeDetails, designDetails, runDetails } from '../details'
import Link from 'next/link'

const Page: React.FunctionComponent = () => {    
  useEffect(() => {
    prism.highlightAll()
  }, [])

  return <Layout>
    <div className="flex flex-col w-full">
    <div className="max-w-screen-lg w-full mx-auto">
      <pre className="m-0 ">
        <code className="language-typescript">{`
// Creating this file and running generateRoutes will automatically add this API endpoint to
// express or/and serverless.
import { APIFunction, APIPermission, APIRoutes } from "../api"
import { UserNotFoundError } from "../errors"
import * as DB from '../../generated/db-types'

/**
 * The IN data type to validate against
 */
export interface SendGreetingCard {
  toUserId: string,
  emailText: string
}

/**
 * The resulting data type
 */
export interface SendGreetingCardResult {
  message: string
}

/**
 * The API function. This will be invoked with the services, incoming data
 * and session
 */
const sendGreetingCard: APIFunction<SendGreetingCard, SendGreetingCardResult> =
  async (services, { toUserId, emailText }, { userId }) => {
    // This line can be any database driver
    const [fromUser, toUser] = await Promise.all([
      services.database.crudGet<DB.User>('user', ['email'], { userId }, new UserNotFoundError()),
      services.database.crudGet<DB.User>('user', ['email'], { userId: toUserId }, new UserNotFoundError())
    ])

    // Assuming you have en email service hooked up!
    await services.email.sendEmail({
      template: 'getting',
      from: fromUser.email,
      to: toUser.email,
      body: emailText
    })

    return {
      message: 'Email sent!'
    }
  }

/*
* A Permission function, returns true/false to allow/dissallow access to the API Function
*/
const isBelowEmailLimit: APIPermission<SendGreetingCard> = async (services, data, session) => {
  const { emailsSent } = await services.database.crudGet<DB.User>('user', ['emailsSent'], { userId: session.userId }, new UserNotFoundError())
  return emailsSent <= 100
}

/*
* A Permission function, returns true/false to allow/dissallow access to the API Function
*/
const isPaidMember: APIPermission<SendGreetingCard> = async (services, data, session) => {
  return session.isPaidMember
}

export const routes: APIRoutes = [{
  // The TYPE of HTTP Message
  type: 'post',
  // The HTTP Route (supports query and path params)
  route: 'v1/send-greeting-card',
  // The function to execute
  func: sendGreetingCard,
  // The JSON schema to generate from typescript and validate against
  schema: 'SendGreetingCard',
  // A set of permissions to check against, at least one has to be valid
  permissions: {
    // Either a collection of permissions to be anded
    canSendCard: [isBelowEmailLimit],
    // Or a single one
    isPaidMember
  }
}]
        `}</code>
      </pre>
      <div className="text-center text-xl my-4 uppercase hover:text-gray-500">
      <Link href="https://github.com/vramework/vramework-example">Checkout the github example repo</Link>
      </div>
      </div>
      <DetailSection className="pb-8" {...designDetails} />
      <DetailSection className="pb-8 border-b" {...codeDetails} />
      <DetailSection className="pb-8 border-b" {...runDetails} />
    </div>
  </Layout>
}

export default Page