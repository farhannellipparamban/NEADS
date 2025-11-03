import React from "react";

const Section = ({ id, title, children }) => {
  return (
    <div id={id} className="mb-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
      <div>{children}</div>
    </div>
  );
};

export default Section;
