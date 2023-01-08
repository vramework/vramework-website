import Link from 'next/link'
import React, { PropsWithChildren } from 'react'

export const Layout: React.FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex bg-black text-white flex p-4 items-center">
        <div  className="flex max-w-screen-lg text-white flex p-4 space-x-4">
          <Link href="/"><span className="mr-4 text-xl uppercase cursor-pointer transition transform hover:scale-105">vramework</span></Link>
        </div>
      </header>

      <main className="flex flex-col flex-grow">
        {children}
      </main>

      <footer className="flex space-2 bg-black text-white p-4">
          <ul className="flex flex-col max-w-screen-lg mx-auto text-center">
            <li className="mb-2">Vlandor LTD 2023</li>
            <li className="mb-2"><a href='https://opensource.org/licenses/MIT'>MIT LICENSE</a></li>
            <li className="mb-2"><a href="https://github.com/vramework/vramework" rel="noreferrer" target='_blank'>Github</a></li>
          </ul>
      </footer>
    </div>
  )
}
