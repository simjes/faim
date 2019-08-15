import classNames from 'classnames';
import React, { HTMLProps } from 'react';
import Detail from './Detail'
import Food from '../images/food-icons.svg';
import './details.css';

const Details = (props: HTMLProps<HTMLDivElement>) => {
  return (
    <div
      className={classNames(
        'flex flex-col sm:flex-row bg-primary py-32 items-center',
        props.className,
      )}
    >
      <Food />

      <div className="details">
        <Detail label="Ingredients & Instructions" text="We give you the list of ingredients and instructions on how to make a good meal" />
        <Detail label="Schedule & Shopping List" text="Schedule your weekly meals and get a shopping list with all the ingredients needed for your scheduled meals" />
        <Detail label="Share" text="Found something you really like? Why not share it with your friends so they can enjoy it too" />
      </div>
    </div>
  );
};

export default Details;
