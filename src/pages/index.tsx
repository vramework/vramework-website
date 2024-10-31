import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import CodeExample from '@site/src/components/CodeExample';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';

function HomepageHeader() {
  return (
    <header className="flex py-24 px-4">
      <div className="max-w-screen-lg mx-auto w-full">
        <div className='flex flex-col items-center'>
          <img className="max-w-[200px] w-full" src={useBaseUrl('/img/vramework.png')} />
          <Heading as="h1" className="text-5xl text-center leading-snug">
            A different approach to nodejs backend code
          </Heading>
          <p className="text-lg text-center font-medium">
            A minimal framework for building HTTP functions in Node.js
          </p>
          <div className="flex flex-row gap-2 justify-center">
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              Get started
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="https://github.com/vramework/vramework">
              Github
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

const Divider = () => {
 const random = Math.floor(Math.random()*50) 
 return <div className={`h-[1px] bg-gray-200 rounded my-2 mx-auto`} style={{ width: `${50 + random}%` }} />
} 

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Vramework - A different type of HTTP server"
      description="A minimal framework for building HTTP* servers in Node.js">
      <HomepageHeader />
      <main className='flex flex-col gap-y-8 px-4'>
        <div className='shadow-lg border border-solid border-gray-200 rounded p-8 text-center text-lg font-medium text-gray-700 max-w-screen-md mx-auto leading-relaxed'>
          Write code agnostic to which server or protocol is running. 
          <Divider />
          Throw an error in your code and it's mapped to the correct HTTP status code.
          <Divider />
          Validate all your input directly via schemas generated from your function types.
          <Divider />
          Attach permissions logic to AND/OR different scenarios.
          <Divider />
          Deploy via serverless, express, uWS or even within nextJS.
        </div>
        {/* <HomepageHighlights /> */}
        <CodeExample />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
