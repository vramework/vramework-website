import cn from 'clsx';
import Heading from '@theme/Heading';
import React from 'react'
import { highlights } from '../../../data/homepage';

type HighlightItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const HighlightList: HighlightItem[] = highlights.map(({ title, description, icon }: any) => ({
  title,
  Svg: icon,
  description: (
    <>
      {description}
    </>
  ),
}))

function Highlight({ title, Svg, description }: HighlightItem) {
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

export default function HomepageHighlights(): JSX.Element {
  return (
    <section className="mx-auto w-full p-4 max-w-screen-lg">
      <div className="grid grid-cols-3 gap-4">
        {HighlightList.map((props, idx) => (
          <Highlight key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
