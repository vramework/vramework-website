import Link from 'next/link'
import React from 'react'

export const Layout: React.FunctionComponent<{}> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-200 flex flex-col p-4">
        <h1 className="my-12 w-full text-3xl md:text-7xl font-semibold text-center">
          <Link href="/">VRAMEWORK.IO</Link>
        </h1>
        <h2 className="mb-12 w-full text-2xl md:text-4xl font-semibold text-center">
          FUNCTIONS AS A DESIGN
        </h2>
        <ul className="flex m-auto uppercase space-x-4">
          <li><Link href="/design">Design</Link></li>
          <li><Link href="/code">Code</Link></li>
          <li><Link href="/run">Run</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/faq">FAQ</Link></li>
          <li><a href="https://github.com/vramework/vramework" target="_blank" rel="noreferrer">GitHub ⭐️</a></li>
        </ul>
      </header>

      <main className="flex flex-grow">
        {children}
      </main>

      <footer className="bg-gray-200 p-4">
        <ul className="max-w-screen-lg mx-auto">
          <li className="mb-2">Vlandor LTD 2021</li>
          <li className="mb-2"><a href='https://opensource.org/licenses/MIT'>MIT LICENSE</a></li>
          <li className="mb-2"><a href="https://github.com/vramework/vramework" rel="noreferrer" target='_blank'>Github</a></li>
        </ul>
      </footer>
    </div>
  )
}
