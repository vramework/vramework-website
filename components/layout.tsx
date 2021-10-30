/* eslint-disable @next/next/link-passhref */
import Link from 'next/link'
import React from 'react'

export const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex bg-black text-white flex p-4 items-center">
        <Link href="/"><span className="mr-4 text-xl uppercase">vramework</span></Link>
        <ul className="hidden sm:flex uppercase space-x-4 items-center">
          <li><Link href="/design">Design</Link></li>
          <li><Link href="/code">Code</Link></li>
          <li><Link href="/run">Run</Link></li>
          <li><Link href="/faq">FAQ</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><a href="https://github.com/vramework/vramework" target="_blank" rel="noreferrer">GitHub ⭐️</a></li>
        </ul>
      </header>

      <main className="flex flex-col flex-grow">
        {children}
      </main>

      <footer className="flex space-2 bg-black text-white p-4">
        <ul className="max-w-screen-lg">
          <li className="mb-2">Vlandor LTD 2021</li>
          <li className="mb-2"><a href='https://opensource.org/licenses/MIT'>MIT LICENSE</a></li>
          <li className="mb-2"><a href="https://github.com/vramework/vramework" rel="noreferrer" target='_blank'>Github</a></li>
        </ul>
        <ul className="flex flex-col uppercase ml-4">
          <li><Link href="/design">Design</Link></li>
          <li><Link href="/code">Code</Link></li>
          <li><Link href="/run">Run</Link></li>
          <li><Link href="/faq">FAQ</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><a href="https://github.com/vramework/vramework" target="_blank" rel="noreferrer">GitHub ⭐️</a></li>
        </ul>
      </footer>
    </div>
  )
}
