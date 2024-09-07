import cn from 'clsx';
import Heading from '@theme/Heading';
import React from 'react'
import { features } from '../../../data/homepage';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = features.features.map(({ title, description, icon }: any) => ({
  title,
  Svg: icon,
  description: (
    <>
      {description}
    </>
  ),
}))

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={cn('flex flex-col columns-4')}>
      <div className="text-center">
        <Svg className="w-[200px] h-[200px]" role="img" />
      </div>
      <div className="text-center px-4">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className="mx-auto w-full p-4 max-w-screen-lg">
      <Heading as='h2' className='text-center'>{features.title}</Heading>
      <p className='text-center text-lg'>{features.description}</p>
      <div className="grid grid-cols-4 gap-4">
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
