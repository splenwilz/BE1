import React from 'react';

import styles from "../styles.module.css";

interface ContextParentProps {    
  imageSrc: string;
  articleLink: string;
}
 
const ContextParent: React.FunctionComponent<ContextParentProps> = ({ imageSrc, articleLink}) => {
    const boxStyle: React.CSSProperties = {
        backgroundImage: `url('${imageSrc}')`,
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
        // width: '100px',
        // height: '100px',
      };
    return ( 
      <a href={articleLink}>
        <div className={styles.article__box__parent} style={boxStyle} />
      </a>
     );
}
 
export default ContextParent;




