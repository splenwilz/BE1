import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArticleBox from './ArticleBox';
import ContextParent from './ContextParent';

import styles from "../styles.module.css";
import ContextBox from './ContextBox';
import Loading from './Loading';

export type Context = {
  _id: string,
  itemgroup: string;
  artworkimage: string;
  name: string;
  description: string;
  references: string;
  imageurl: string;
  hierarchynumber: number;
  tier: number;
  category: string;
  parent: string;
  itemtype: string;
  planet: string;
  continent: string;
  countryorterritory: string;
  state: string;
  county: string;
  city: string;
  borough: string;
  neighborhood: string;
  street: string;
  building: string;
  unit: string;
  room: string;
  itembeing: string;
  nature: string;
  landmark: string;
  transport: string;
  heirarchynumber2: number;
};

function LeftPane() {
  const [contexts, setContexts] = useState<Context[] | null>(null);
  const [contextParent, setContextParent] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('https://be1web.onrender.com/api/article/getcontext',{
          "parent": "Earth"
      });
        setContexts(response.data);
        setContextParent(response.data[0].parent)
        console.log(response.data[0].parent)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{marginLeft:'2rem'}}>

      <div className={styles.context__parent__container}>
        {contextParent && (
          <ContextParent 
            imageSrc={`https://be1.s3.eu-north-1.amazonaws.com/${contextParent.replace(/\s+/g, '+')}.png`}
            articleLink={contextParent.replace(/\s+/g, '-')}
          />
        )}
      </div>



      <div className={styles.context__breadcrump__container}>
        {[...Array(14)].map((_, index) => (
        <ContextBox
          key={index}
          imageSrc={`chapters/${index + 1}.png`}
        />
      ))}
      </div>
      <div className={styles.context__container}>       
      
      {contexts ? (
        contexts.map((context, index) => (
          
          <ArticleBox
          key={index}
          imageSrc={context.imageurl}
          articleLink={context.name.replace(/\s+/g, '-')}
          title={context.name}
          />
        ))
      ) : (
        <Loading />
      )}
      </div>
    </div>
  );
}

export default LeftPane;
