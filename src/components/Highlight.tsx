import React, { ReactNode } from 'react';
import './highlights.css';

const Highlight = ({
  title,
  text,
  icon,
}: {
  title: string;
  text: string;
  icon: ReactNode;
}) => {
  return (
    <div className="bg-secondary text-secondary rounded-lg py-20 px-6 shadow-lg text-center relative">
      {icon}

      <label className="font-bold">{title}</label>
      <div className="mt-4">{text}</div>
    </div>
  );
};

export default Highlight;
