import Link from 'next/link'
import cx from 'classnames'
import prism from "prismjs"
import "prismjs/plugins/line-numbers/prism-line-numbers"
import 'prismjs/components/prism-typescript'
import { useEffect, useState } from 'react'

const Button: React.FunctionComponent<{ href?: string, onClick?: VoidFunction, type: 'primary' | 'secondary' }> = ({ href, type, children, onClick }) => {
  const content =  <span onClick={onClick }className={cx("select-none py-2 px-4 rounded cursor-pointer", { 'text-white bg-red-500': type === 'primary', 'text-black bg-white': type === 'secondary' })}>
    {children}
    </span>  

  if (href) {
      return <Link href={href} passHref={true}>
          {content}
      </Link>
  }

  return content
}


const CodeExample = () => {
  useEffect(() => {
      setTimeout(() => {
        prism.highlightAll()

      }, 0)
  }, [])

  return <pre className="rounded line-numbers" style={{ whiteSpace: 'pre-wrap' }}>
            <code className="language-typescript">
{`// Creating this file and running generateRoutes will 
// automatically add this API endpoint to
// express or/and serverless.
import { APIFunction, APIPermission, APIRoutes } from "../api"
import { UserNotFoundError } from "../errors"

/**
 * The IN data type to validate against
 */
export interface SendGreetingCard {
  toUserId: string
  emailText: string
}

/**
 * The OUT data type
 */
export interface SendGreetingCardResult {
  message: string
}

/**
 * The API function. This will be invoked with the services, incoming data and session
 */
const sendGreetingCard: APIFunction<SendGreetingCard, SendGreetingCardResult> =
async ({ database, email }, { toUserId, emailText }, { userId }) => {
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
}

/*
* A Permission function, returns true/false to allow/dissallow access to the API Function
*/
const isBelowEmailLimit: APIPermission<SendGreetingCard> = async (services, data, session) => {
  const { emailsSent } = await services.database.crudGet<DB.User>(
    'user', ['emailsSent'], { userId: session.userId }, new UserNotFoundError()
  )
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
}]`}
    </code>
  </pre>
}

export const Hero = () => {
  const [exampleVisible, setExampleVisible] = useState(false)
  return <div className="bg-black text-white py-12 w-full">
    <div className="flex flex-col max-w-screen-md mx-auto">
      <h1 className="w-full text-5xl leading-tight md:text-5xl font-semibold text-center md:leading-snug">
        Pure API functions<br />Write once, deploy anywhere.
      </h1>
      <h2 className="my-4 w-full text-2xl font-semibold text-center text-gray-400">
        A thin and feature rich abstraction to allow developers to focus on features that
        can be deployed via Serverless, Express, HTTP.
      </h2>
      <div className="flex mx-auto space-x-2">
        <Button type="primary" href="">Get Started</Button>
        <Button type="secondary" onClick={() => setExampleVisible(!exampleVisible)}>{!exampleVisible ? 'Show' : 'Hide'} Example</Button>
      </div>
      {exampleVisible && <CodeExample />}
    </div>
  </div>
}