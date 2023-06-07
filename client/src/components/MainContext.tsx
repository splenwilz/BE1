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




