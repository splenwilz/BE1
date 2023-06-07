import React from 'react';

interface ContextBoxProps {
  imageSrc: string;
}

const ContextBox: React.FC<ContextBoxProps> = ({ imageSrc }) => {
    const boxStyle: React.CSSProperties = {
        backgroundImage: `url('${imageSrc}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '35px',
        height: '35px',
        margin: '2px',
        cursor: 'pointer'
      };
      
      
      console.log(boxStyle.backgroundImage);
  return (
      <div className="article-box" style={boxStyle} />
  );
};

export default ContextBox;

