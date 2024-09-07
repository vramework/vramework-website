import React from "react"
import CodeBlock from '@theme/CodeBlock';
import Heading from '@theme/Heading';
import Link from "@docusaurus/Link";

const code = `import { APIFunction, APIPermission, APIRoutes } from "../api"
import { NotFoundError } from "../errors"

/**
 * The IN data type to validate against
 */
interface SendGreetingCard {
  toUserId: string
  emailText: string
}

/**
 * The OUT data type
 */
interface SendGreetingCardResult {
  message: string
}

export const routes: APIRoutes = [route<SendGreetingCard, SendGreetingCardResult>({
  // The TYPE of HTTP Message
  type: 'post',
  // The HTTP Route (supports query and path params)
  route: 'v1/send-greeting-card',
  // The JSON schema to generate from typescript and validate against.
  // TODO: Get this to be generated from the typescript types
  schema: 'SendGreetingCard',
  // The function to execute
  func: async (services, data, session) => {
    const { database, email } = services
    const { toUserId, emailText } = data
    const { userId } = session

    // This line can be any database driver
    const [fromUser, toUser] = await Promise.all([
        database.crudGet('user', ['email'], { userId }, new UserNotFoundError()),
        database.crudGet('user', ['email'], { userId: toUserId }, new UserNotFoundError())
    ])

    // Assuming you have en email service hooked up!
    await email.sendEmail({
        template: 'getting',
        from: fromUser.email,
        to: toUser.email,
        body: emailText
    })

    return {
        message: 'Email sent!'
    }
  },
  // A set of permissions to check against, at least one has to be valid
  permissions: {
    canSendCard: async (services, data, session) => {
        const { emailsSent } = await services.database.crudGet<DB.User>(
            'user', ['emailsSent'], { userId: session.userId }, new UserNotFoundError()
        )
        return emailsSent <= 100
    },
    isPaidMember: async (services, data, session) => {
        return session.isPaidMember
    }
  })
}]`

export default function CodeExample(): JSX.Element {
    return <div className="max-w-screen-lg mx-auto">
        <Heading as="h2" className="text-4xl text-center">Example Code</Heading>
        <p className="text-lg text-center font-medium">
            A snippet of a simple API function that sends an email*
        </p>
        <div className="flex flex-col justify-center items-center">
            <p className="italic">
                *There's a little bit more to it, take a look at  <Link
                    to="/docs/intro">
                    the documentation
                </Link> to see the full example.
            </p>
        </div>
        <CodeBlock language="typescript">
            {code}
        </CodeBlock>
    </div>
}