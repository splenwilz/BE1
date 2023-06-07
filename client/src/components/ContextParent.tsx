import React from 'react';

import styles from "../styles.module.css";

interface ContextParentProps {    
  imageSrc: string;
}
 
const ContextParent: React.FunctionComponent<ContextParentProps> = ({ imageSrc}) => {
    const boxStyle: React.CSSProperties = {
        backgroundImage: `url('${imageSrc}')`,
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
        // width: '100px',
        // height: '100px',
      };
    return ( 
        <div className={styles.article__box__parent} style={boxStyle} />
     );
}
 
export default ContextParent;




