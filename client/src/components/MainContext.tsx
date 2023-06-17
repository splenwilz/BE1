// import React, { useState } from 'react';

// import styles from "../styles.module.css";

// interface MainContextProps {    
//   imageSrc: string;
//   articleLink: string;
//   title: string;
// }

// const MainContext: React.FunctionComponent<MainContextProps> = ({  imageSrc,
//   articleLink,
//   title,}) => {
//   const [isHovered, setIsHovered] = useState(false);

//   const magnificationLevel = isHovered ? 4 : 1; // Adjust the magnification level
//   const maxDistance = 2; // Adjust the maximum distance

//   const distance = isHovered ? Math.abs(magnificationLevel - maxDistance) : 0;
//   const boxSize = 60 + distance * 20; // Adjust the size difference

//   const boxStyle: React.CSSProperties = {
//         backgroundImage: `url('${imageSrc}')`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         width: `${boxSize}px`,
//         height: `${boxSize}px`,
//         margin: '2px',
//         cursor: 'pointer',
//         transition: 'all 0.3s ease', // Add a smooth transition effect
//         zIndex: isHovered ? 2 : 1,
//       };

//       const handleMouseEnter = () => {
//         setIsHovered(true);
//       };
    
//       const handleMouseLeave = () => {
//         setIsHovered(false);
//       };
    
//     return ( 
//         <a
//         href={articleLink}
//         rel="noopener noreferrer"
//         title={title}
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         <div className={styles.main__box__parent} style={boxStyle} />
//       </a>
//      );
// }
 
// export default MainContext;








import React from 'react';

import styles from "../styles.module.css";

interface MainContextProps {    
  imageSrc: string;
}
 
const MainContext: React.FunctionComponent<MainContextProps> = ({ imageSrc}) => {
    const boxStyle: React.CSSProperties = {
        backgroundImage: `url('${imageSrc}')`,
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
        // width: '100px',
        // height: '100px',
      };
    return ( 
        <div className={styles.main__box__parent} style={boxStyle} />
     );
}
 
export default MainContext;




