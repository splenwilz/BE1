import React from 'react';

interface ArticleBoxProps {
  imageSrc: string;
}

const ArticleBox: React.FC<ArticleBoxProps> = ({ imageSrc }) => {
    const boxStyle: React.CSSProperties = {
        backgroundImage: `url('${imageSrc}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '60px',
        height: '60px',
        margin: '2px',
        cursor: 'pointer'
      };
      
      
      console.log(boxStyle.backgroundImage);
  return (
    // <a href={articleLink} target="_blank" rel="noopener noreferrer">
      <div className="article-box" style={boxStyle} />
    // </a>
  );
};

export default ArticleBox;

