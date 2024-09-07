import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageHighlights from '@site/src/components/HomepageHighlights';
import CodeExample from '@site/src/components/CodeExample';
import Heading from '@theme/Heading';

function HomepageHeader() {
  return (
    <header className="flex py-24">
      <div className="max-w-screen-lg mx-auto w-full">
        <Heading as="h1" className="text-5xl text-center leading-snug">
          Simpler HTTP servers<br/>without the overhead
        </Heading>
        <p className="text-lg text-center font-medium">
          A minimal framework for building pure HTTP servers in Node.js
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
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main className='flex flex-col gap-y-4'>
        <HomepageHighlights />
        <CodeExample />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
