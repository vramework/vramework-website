export interface SectionDetails {
    title: string
    items: Array<{
      icon: JSX.Element | null
      title: string
      link: string
      description: string
    }>
  }

import ServerIcon from './svgs/server.svg'
import CloudIcon from './svgs/cloud-computing.svg'
import ExeIcon from './svgs/exe.svg'

export const runDetails: SectionDetails = {
    title: 'Run',
    items: [{
      icon: <ServerIcon />,
      title: 'Via Express',
      link: '/run#express',
      description: 'Run your functions via express, for local development or deployments via docker / baremetal'
    }, {
      icon: <CloudIcon  />,
      title: 'Via Serverless',
      link: '/run#serverless',
      description: 'Run your functions via serverless, saving you money and hassle'
    }, {
      icon: <ExeIcon  />,
      title: 'Via Binary',
      link: '/run#binary',
      description: 'Run your functions via a binary, putting all your dependencies into one small package'
    }]
}

import DependencyIcon from './svgs/dependencies.svg'
import FirewallIcon from './svgs/firewall.svg'
import SessionIcon from './svgs/network.svg'
import SchemaIcon from './svgs/schema.svg'

export const codeDetails: SectionDetails = {
    title: 'Code',
    items: [{
      icon: <DependencyIcon  />,
      title: 'Functional Programming',
      link: '/code#dependencies',
      description: 'Inject your dependencies into each function, making each function truly encapsulated'
    }, {
      icon: <FirewallIcon  />,
      title: 'Permissions',
      link: '/code#permissions',
      description: 'Check each function invocation against group permissions before they even run'
    }, {
      icon: <SessionIcon  />,
      title: 'User Sessions',
      link: '/code#sessions',
      description: 'Provide the user session to each function invocation for context'
    }, {
      icon: <SchemaIcon />,
      title: 'JSON Schemas',
      link: '/code#schemas',
      description: 'Generate json schemas automatically from Typescript and validate every API call against them'
    }]
}

import TypescriptIcon from './svgs/typescript.svg'
import MagicWandIcon from './svgs/magic-wand.svg'
import FrameworkIcon from './svgs/framework.svg'
import RefreshIcon from './svgs/refresh.svg'

export const designDetails: SectionDetails = {
    title: 'Design',
    items: [{
      icon: <TypescriptIcon  />,
      title: 'Typescript ❤️',
      link: '/design#typescript-everywhere',
      description: 'Everything is typed, starting from your database itself'
    }, {
      icon: <RefreshIcon  />,
      title: 'HTTP Agnostic',
      link: '/design#http-agnostic',
      description: 'Write your code without any HTTP concepts, it\'s all just objects and errors'
    }, {
      icon: <FrameworkIcon />,
      title: 'Framework Agnostic',
      link: '/design#framework-agnostic',
      description: 'Concentrate on writing code. Ignore the overhead of your HTTP server.'
    }, {
      icon: <MagicWandIcon  />,
      title: 'Session based services',
      link: '/design#routes-combiner-and-json-schema-file-generation',
      description: 'Services can be singletons or created unique to each HTTP call'
    }]
}