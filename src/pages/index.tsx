import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageHighlights from '@site/src/components/HomepageHighlights';
import CodeExample from '@site/src/components/CodeExample';
import Heading from '@theme/Heading';

function HomepageHeader() {
  return (
    <header className="flex py-24 px-4">
      <div className="max-w-screen-lg mx-auto w-full">
        <div className='flex flex-col items-center'>
          <img className="max-w-[200px] w-full" src='/img/vramework.png' />
          <Heading as="h1" className="text-5xl text-center leading-snug">
            A different type of HTTP server
          </Heading>
          <p className="text-lg text-center font-medium">
            A minimal framework for building HTTP servers in Node.js
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

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main className='flex flex-col gap-y-4'>
        <p className='shadow-lg border border-solid border-gray-200 rounded p-8 text-center text-lg font-medium text-gray-700 max-w-screen-md mx-auto leading-relaxed'>
          Write code agnostic to which server or protocol is running. 
          <br/>
          Throw an error in your code and it's mapped to the correct HTTP status code.
          <br/>
          Validate all your input directly via schemas generated from your function types.
          <br/>
          Attach permissions logic to and/or different scenarios.
          <br/>
          Deploy via serverless, express or even within nextJS (coming soon).
        </p>
        {/* <HomepageHighlights /> */}
        <CodeExample />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
