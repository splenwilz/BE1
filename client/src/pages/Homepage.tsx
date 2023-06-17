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
  return (
    <>
    <Header />
    <div className={styles.search__container}>
      {isBreadcrumpVisible && (
          <div className={styles.context__hierarchy__container}>
            {[...Array(heirarchy)].map((_, index) => (
            <ContextBox
              key={index}
              imageSrc={`hierarchy/Be1 Tier${index + 1}.jpg`}
            />
          ))}
          </div>
      )}
      <div className="search-bar-container">
        <SearchBar setResults={setResults} onSearchIconClick={handleSearchIconClick}/>
        {!isBreadcrumpVisible && results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
    
    </div>
     

      <div className={styles.Container}>       
       
        <div className={styles.BottomRow}>
          
          <PanelGroup autoSaveId="example" direction="horizontal">
            {showFirstPanel && (
              <>
                <Panel
                  className={styles.Panel}
                  collapsible={true}
                  defaultSize={20}
                  order={1}
                >
                  <div className={styles.PanelContent}>
                    <LeftPane />
                  </div>
                </Panel>
                <ResizeHandle onDoubleClick={() => setShowFirstPanel(!showFirstPanel)}/>
              </>
            )}
            <Panel className={styles.Panel} collapsible={true} order={2}>
              <>
                <div className={styles.main__context__header__container}>
                {/* <MainContext
                  imageSrc={`https://be1.s3.eu-north-1.amazonaws.com/${contextItem?.replace(/\s+/g, '+')}.png`}
                  articleLink={contextItem.replace(/\s+/g, '-')}
                  title={contextItem}
              /> */}
                  {/* <MainContext
                      imageSrc={`https://be1.s3.eu-north-1.amazonaws.com/Earth.png`}
                    /> */}
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
                {/* Top */}
                <div className={styles.TopRow}>
          
                  <p>
                    <button
                      className={styles.Button}
                      onClick={() => setShowFirstPanel(!showFirstPanel)}
                    >
                      {showFirstPanel ? "hide" : "show"} Content panel
                    </button>
                    &nbsp;
                    <button
                      className={styles.Button}
                      onClick={() => setShowLastPanel(!showLastPanel)}
                    >
                      {showLastPanel ? "hide" : "show"} Reference panel
                    </button>
                  </p>
                </div>
                <div className={styles.main__context__content}>
                  <p> {content}
                  </p>
                </div>
              </>
            </Panel>
            {showLastPanel && (
              <>
                <ResizeHandle onDoubleClick={() => setShowLastPanel(!showLastPanel)} />
                <Panel
                  className={styles.Panel}
                  collapsible={true}
                  defaultSize={20}
                  order={3}
                >
                  <div className={styles.PanelContent}>
                  <>
                    <p className={styles.references__title}>
                      Sources
                    </p>
                    <hr className={styles.references_header_linebreak} />
                    <div className={styles.references__body}>
                      {transcribeMarkdownToText(references?references:"Loading...")}
                    </div>
                  </>
                  </div>
                </Panel>
              </>
            )}
          </PanelGroup>
        </div>
        
      </div>

      </>

  );
}
