import classNames from 'classnames';
import React, { HTMLProps } from 'react';
import Harvest from '../images/harvest-mod.svg';
import Pizza from '../images/pizza.svg';
import Waffle from '../images/waffle.svg';
import Highlight from './Highlight';

const Highlights = (props: HTMLProps<HTMLElement>) => {
  return (
    <div className={classNames('highlights', props.className)}>
      <Highlight
        icon={
          <Pizza
            className="absolute top-0 left-0 right-0 mx-auto -mt-10"
            height="140"
          />
        }
        title="Any meal"
        text="Find any type of meal, be it dinner, lunch, breakfast and even desserts"
      />

      <Highlight
        icon={
          <Harvest
            className="absolute top-0 left-0 right-0 mx-auto -mt-16"
            height="180"
          />
        }
        title="Dietary Restrictions"
        text="Filter recipes based on your dietary restrictions"
      />

      <Highlight
        icon={
          <Waffle
            className="absolute top-0 left-0 right-0 mx-auto -mt-10"
            height="140"
          />
        }
        title="Suggestions"
        text="Craving donuts? Ask our chatbot for recipes"
      />
    </div>
  );
};

export default Highlights;
