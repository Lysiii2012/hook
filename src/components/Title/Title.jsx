import React from "react";

const Title = ({ title, type }) => {
  const tags = {
    'first-title': 'h1',
    'second-title': 'h2',
    'third-title': 'h3'
  };

  const Tag = tags[type] || 'h1'; 

  return <Tag>{title}</Tag>;
};

export default Title;