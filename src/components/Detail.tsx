import React from 'react';

const Detail = ({ label, text }: { label: string; text: string }) => {
  return (
    <div className="max-w-sm">
      <h2 className="text-xl sm:text-3xl">{label}</h2>
      <div className="text-lg sm:text-xl text-tertiary mt-2">{text}</div>
    </div>
  );
};

export default Detail;
