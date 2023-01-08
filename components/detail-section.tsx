import React from 'react'
import { SectionDetails } from '../details'
import Link from 'next/link'
import cx from 'classnames'

export const DetailSection: React.FunctionComponent<SectionDetails & { className: string }> = ({ className, title, items }) => {
    return <section className={cx("relative px-4 w-full max-w-screen-lg mx-auto", className)}>
        <h4 className="my-4 text-gray-600 text-xl select-none">{title}</h4>
        <ul className="flex flex-col md:flex-row justify-around">
            {items.map(({ title, icon, description, link }) => {
                return <li key={title} className={`w-full md:w-1/3 flex flex-col flex-wrap md:flex-row mb-8`}>
                    <div className="flex w-full">
                        <span style={{ width: '75px', height: '75px' }} className="m-auto">
                            {icon}
                        </span>
                    </div>
                    <div className="flex flex-col mt-4 md:ml-8">
                        <h5 className="mb-2 text-xl">{title}</h5>
                        <p className="text-gray-800">{description}</p>
                    </div>
                </li>
            })}
        </ul>
    </section>
}
