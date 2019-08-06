import React, { ReactNode } from 'react';

const Section = ({
  children,
  reverse,
}: {
  children: ReactNode;
  reverse: boolean;
}) => {
  return (
    <section
      className={`
        my-10
        flex
        items-center
        justify-center
        sm:justify-around
        flex-wrap
        sm:flex-no-wrap
        relative
        ${reverse ? 'flex-row-reverse' : ''}
      `}
    >
      {children}
    </section>
  );
};

export default Section;
