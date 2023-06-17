import React, { useState, useEffect } from 'react';
import MainContext from './MainContext';
import styles from '../styles.module.css';
import ContextBox from './ContextBox';
import axios from 'axios';

function MainPane() {
  const [content, setContent] = useState<string | null>('');
  const [references, setReferences] = useState<string | null>('');

  const handleResizeHandleDoubleClick = (): void => {
    console.log("Working");
  };

  useEffect(()=>{
    const fetchContent = async () => {
     try {
       const response = await axios.post('https://be1web.onrender.com/api/article/getcontext',{
         "name" : "Earth"
       });
       console.log(response.data[0].description);
        setContent(response.data[0].description);
       setReferences(response.data[0].references);
       console.log(references);
     } catch (error) {
       console.error('Error fetching data:', error);
     }
     
   };

   fetchContent();
 },[])

  return (
    <>
    <div className={styles.main__context__header__container}>
      <MainContext
          imageSrc={`https://be1.s3.eu-north-1.amazonaws.com/Earth.png`}
        />
      <div className={styles.chapters__breadcrump__container}>
        <div className={styles.group1}>
          {[...Array(5)].map((_, index) => (
            <ContextBox
              key={index}
              imageSrc={`chapters/${index + 1}.png`}
            />
          ))}
        </div>
        <div className={styles.group2}>
          {[...Array(5)].map((_, index) => (
            <ContextBox
              key={index + 7}
              imageSrc={`chapters/${index + 8}.png`}
            />
          ))}
        </div>
      </div>

    </div>
    <div className={styles.main__context__content}>
      <p>{content}
      </p>
    </div>
    </>
  )
}

export default MainPane
