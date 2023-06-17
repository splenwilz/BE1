// import React, { useState } from 'react';

// interface ArticleBoxProps {
//   imageSrc: string;
//   articleLink: string;
//   title: string;
// }

// const ArticleBox: React.FC<ArticleBoxProps> = ({
//   imageSrc,
//   articleLink,
//   title,
// }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   const boxStyle: React.CSSProperties = {
//     backgroundImage: `url('${imageSrc}')`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     width: isHovered ? '80px' : '60px',
//     height: isHovered ? '80px' : '60px',
//     margin: '2px',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease', // Add a smooth transition effect
//   };

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   return (
//     <a
//       href={articleLink}
//       rel="noopener noreferrer"
//       title={title}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <div className="article-box" style={boxStyle} />
//     </a>
//   );
// };

// export default ArticleBox;
// 
// import React, { useState } from 'react';

// interface ArticleBoxProps {
//   imageSrc: string;
//   articleLink: string;
//   title: string;
// }

// const ArticleBox: React.FC<ArticleBoxProps> = ({
//   imageSrc,
//   articleLink,
//   title,
// }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   const distanceFactor = isHovered ? 2 : 1; // Adjust the factor to control the size difference

//   const boxStyle: React.CSSProperties = {
//     backgroundImage: `url('${imageSrc}')`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     width: `${60 * distanceFactor}px`,
//     height: `${60 * distanceFactor}px`,
//     margin: '2px',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease', // Add a smooth transition effect
//     zIndex: isHovered ? 2 : 1,
//   };

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   return (
//     <a
//       href={articleLink}
//       rel="noopener noreferrer"
//       title={title}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <div className="article-box" style={boxStyle} />
//     </a>
//   );
// };

// export default ArticleBox;


import React, { useState } from 'react';

interface ArticleBoxProps {
  imageSrc: string;
  articleLink: string;
  title: string;
}

const ArticleBox: React.FC<ArticleBoxProps> = ({
  imageSrc,
  articleLink,
  title,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const magnificationLevel = isHovered ? 4 : 1; // Adjust the magnification level
  const maxDistance = 2; // Adjust the maximum distance

  const distance = isHovered ? Math.abs(magnificationLevel - maxDistance) : 0;
  const boxSize = 60 + distance * 20; // Adjust the size difference

  const boxStyle: React.CSSProperties = {
    backgroundImage: `url('${imageSrc}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: `${boxSize}px`,
    height: `${boxSize}px`,
    margin: '2px',
    cursor: 'pointer',
    transition: 'all 0.3s ease', // Add a smooth transition effect
    zIndex: isHovered ? 2 : 1,
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <a
      href={articleLink}
      rel="noopener noreferrer"
      title={title}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="article-box" style={boxStyle} />
    </a>
  );
};

export default ArticleBox;
