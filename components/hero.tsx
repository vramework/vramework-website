import Link from 'next/link'
import cx from 'classnames'
import "prismjs/plugins/line-numbers/prism-line-numbers"
import 'prismjs/components/prism-typescript'
import { PropsWithChildren } from 'react'

const Button: React.FunctionComponent<PropsWithChildren<{ href?: string, onClick?: VoidFunction, type: 'primary' | 'secondary' }>> = ({ href, type, children, onClick }) => {
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

export const Hero = () => {
  return <div className="bg-black text-white py-12 w-full">
    <div className="flex flex-col max-w-screen-md mx-auto">
      <h1 className="w-full text-5xl leading-tight md:text-5xl font-semibold text-center md:leading-snug">
        NodeJS servers without the hassle 
      </h1>
      <h2 className="my-4 w-full text-2xl font-semibold text-center text-gray-400">
        A functional HTTP agnostic way to write server side APIs
      </h2>
      <div className="flex mx-auto space-x-2">
        <Button type="primary" href="">Documentation</Button>
         <Button type="primary" href="">GitHub</Button>
      </div>
    </div>
  </div>
}