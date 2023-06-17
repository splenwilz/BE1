import React, { useEffect, useState } from "react";
import { Panel, PanelGroup } from "react-resizable-panels";
import axios from "axios";

import ResizeHandle from "../ResizeHandle";
import styles from "../styles.module.css";
import LeftPane from "../components/LeftPane";
import Login from "./Login";
import RightPane from "../components/RightPane";
import MainPane from "../components/MainPane";
import Header from "../components/Header";
import ContextBox from "../components/ContextBox";
import MainContext from "../components/MainContext";
import { SearchBar } from "../components/SearchBar";
import { SearchResultsList } from "../components/SearchResultList";

const handleResizeHandleDoubleClick = (): void => {
  console.log("Spane");
};

const transcribeMarkdownToText = (markdown: string) => {
  // Split the markdown text by newlines to separate each line
  const lines = markdown.split('\n');

  // Iterate over each line and check for markdown syntax to apply appropriate formatting
  const transcribedLines = lines.map((line, index) => {
    if (line.startsWith('## ')) {
      // Heading 2 syntax (##) found, add appropriate heading tag
      return <h2 key={index}>{line.replace('## ', '')}</h2>;
    } 
    else if (line.trim() === '---') {
      // Horizontal rule syntax (---) found, add an <hr> tag
      return <hr key={index} />;
    }
    
    // By default, return the line as a paragraph
    return <p key={index}>{line}</p>;
  });

  return transcribedLines;
};

export default function App() {
  const [showFirstPanel, setShowFirstPanel] = useState(true);
  const [showLastPanel, setShowLastPanel] = useState(true);
  const [content, setContent] = useState<string | null>('');
  const [references, setReferences] = useState<string | null>('');
  // Search
  const [results, setResults] = useState<any[]>([]);

  const [heirarchy, setHeirarchy] = useState<number>(0);
  const [isBreadcrumpVisible, setIsBreadcrumpVisible] = useState(true);

  const handleSearchIconClick = () => {
    // Handle search icon click logic
    setIsBreadcrumpVisible(!isBreadcrumpVisible);
    // This function will be called when the search icon is clicked in the SearchBar component
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
        setHeirarchy(response.data[0].heirarchynumber2);
        console.log(references);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      
    };

    fetchContent();
  },[])


  const boxStyle: React.CSSProperties = {
    backgroundImage: 'url(hierarchy/be1.gif)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '35px',
    height: '35px',
    margin: '2px',
    cursor: 'pointer'
  };
  return (
    <>
    <Header />

    <div className={styles.logo__container}>
          <img src="../images/logo.gif" alt=""style={{width:'600px', marginBottom:'50px'}}/>
     
      </div>
    <div className={styles.search__container}>
      {isBreadcrumpVisible && (
          <div className={styles.context__hierarchy__container}>
            <div className="article-box" style={boxStyle}/>          
          </div>
      )}
      <div className="search-bar-container">
        <SearchBar setResults={setResults} onSearchIconClick={handleSearchIconClick}/>
        {!isBreadcrumpVisible && results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
    
    </div>
     
     
       
     

      </>

  );
}
