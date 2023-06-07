// import React, { useState } from 'react'

// import ArticleBox from "./ArticleBox";

// import axios from "axios";

// export type Context = {
//   itemgroup: string,
//   artworkimage: string,
//   name: string,
//   description: string,
//   references: string,
//   images: string,
//   hierarchynumber: number,
//   tier: number,
//   category: string,
//   parent: string,
//   itemtype: string,
//   planet: string,
//   continent: string,
//   countryorterritory: string,
//   state: string,
//   county: string,
//   city: string,
//   borough: string,
//   neighborhood: string,
//   street: string,
//   building: string,
//   unit: string,
//   room: string,
//   itembeing: string,
//   nature: string,
//   landmark: string,
//   transport: string,
//   heirarchynumber2: number,
// }

// function LeftPane() {
//   const [contexts, setContexts] = useState<Context[] | null>();
//   const url = "http://127.0.0.1:5000/api/article/getcontext";
//   axios.get(url).then((response) => {
//     console.log(response.data)
//   })

//   const articleBoxes = [
//     {
//       id: 1,
//       imageSrc: 'images/Be1 Tier1.svg',
//       articleLink: 'https://example.com/article1',
//     },
//     {
//       id: 2,
//       imageSrc: 'images/Be1 Tier2.svg',
//       articleLink: 'https://example.com/article2',
//     },
//     {
//       id: 3,
//       imageSrc: 'images/Be1 Tier3.svg',
//       articleLink: 'https://example.com/article3',
//     },
//     {
//       id: 4,
//       imageSrc: 'images/Be1 Tier4.svg',
//       articleLink: 'https://example.com/article4',
//     },
//     {
//       id: 5,
//       imageSrc: 'images/Be1 Tier5.svg',
//       articleLink: 'https://example.com/article5',
//     },
//     {
//       id: 6,
//       imageSrc: 'images/Be1 Tier6.svg',
//       articleLink: 'https://example.com/article6',
//     },
//     {
//       id: 7,
//       imageSrc: 'images/Be1 Tier7.svg',
//       articleLink: 'https://example.com/article7',
//     },
//     {
//       id: 8,
//       imageSrc: 'images/Be1 Tier8.svg',
//       articleLink: 'https://example.com/article8',
//     },
//     {
//       id: 9,
//       imageSrc: 'images/Be1 Tier9.svg',
//       articleLink: 'https://example.com/article9',
//     },
//     // Add more article boxes as needed
//   ];
//   return (
//     <>
//         {/* {articleBoxes.map((box) => (
//             <ArticleBox
//             key={box.id}
//             imageSrc={box.imageSrc}
//             articleLink={box.articleLink}
//             />
//         ))} */}
         
//     </>
//   )
// }

// export default LeftPane
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ArticleBox from './ArticleBox';
// import ContextParent from './ContextParent';

// import styles from "../styles.module.css";
// import ContextBox from './ContextBox';

// export type Context = {
//   itemgroup: string;
//   artworkimage: string;
//   name: string;
//   description: string;
//   references: string;
//   imageurl: string;
//   hierarchynumber: number;
//   tier: number;
//   category: string;
//   parent: string;
//   itemtype: string;
//   planet: string;
//   continent: string;
//   countryorterritory: string;
//   state: string;
//   county: string;
//   city: string;
//   borough: string;
//   neighborhood: string;
//   street: string;
//   building: string;
//   unit: string;
//   room: string;
//   itembeing: string;
//   nature: string;
//   landmark: string;
//   transport: string;
//   heirarchynumber2: number;
// };

// function LeftPane() {
//   const [contexts, setContexts] = useState<Context[] | null>(null);
//   const [contextParent, setContextParent] = useState();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://127.0.0.1:5000/api/article/getcontext');
//         setContexts(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <>
//     {/* {articleBoxes.map((box) => (
//             <ArticleBox
//             key={index}
//             imageSrc={images/Be1 Tier1.svg}
//             articleLink={http://www.google.com}
//             />
//         ))} */}
//       <div className={styles.context__parent__container}>
//         <ContextParent 
//         imageSrc={"images/Be1 Tier1.svg"}
//         />
//       </div>
//       <div className={styles.context__breadcrump__container}>
//         {/* <ContextBox 
//         imageSrc={"chapters/1.png"}
//         />
//         <ContextBox 
//         imageSrc={"chapters/2.png"}
//         /> */}
//         {[...Array(14)].map((_, index) => (
//         <ContextBox
//           key={index}
//           imageSrc={`chapters/${index + 1}.png`}
//         />
//       ))}
//       </div>
//       <div className={styles.context__container}>       
      
//       {contexts ? (
//         contexts.map((context, index) => (
//           // <div key={index}>
//           //   <h2>{context.name}</h2>
//           //   {/* <p>Description: {context.description}</p> */}
//           //   {/* Render other properties as needed */}
//           // </div>
          
//           // setContextParent(context.imageurl)
//           <ArticleBox
//           key={index}
//           imageSrc={context.imageurl}
//           />
//         ))
//       ) : (
//         <p>Loading...</p>
//       )}
//       </div>
//     </>
//   );
// }

// export default LeftPane;
