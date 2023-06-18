import React, { useEffect, useState } from "react";
import { Panel, PanelGroup } from "react-resizable-panels";
import ResizeHandle from "../ResizeHandle";
import styles from "../styles.module.css";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import ArticleBox from '../components/ArticleBox';
import ContextParent from '../components/ContextParent';
import Loading from '../components/Loading';
import axios from "axios";
import MainContext from '../components/MainContext';
import ContextBox from '../components/ContextBox';
import { SearchBar } from "../components/SearchBar";
import { SearchResultsList } from "../components/SearchResultList";
import Footer from "../components/Footer";
import SentenceFormatter from "../components/SentenceFormatter";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './Post.css';
import HierarchyBox from "../components/HierarchyBox";



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


const transcribeMarkdownToText = (markdown: string) => {
  // Split the markdown text by newlines to separate each line
  const lines = markdown.split('\n');
  // Iterate over each line and check for markdown syntax to apply appropriate formatting
  const transcribedLines = lines.map((line, index) => {
    if (line.startsWith('## ')) {
      // Heading 2 syntax (##) found, add appropriate heading tag
      return <h3 key={index}>{line.replace('## ', '')}</h3>;
    } else if (line.trim() === '---') {
      // Horizontal rule syntax (---) found, add an <hr> tag
      return <hr key={index} />;
    }

    // By default, return the line as a paragraph with line break
    return (
      <p key={index}>
        {line}
        <br />
      </p>
    );
  });

  return transcribedLines;
};



export default function App() {
  const [showFirstPanel, setShowFirstPanel] = useState(true);
  const [showLastPanel, setShowLastPanel] = useState(true);

  const [contexts, setContexts] = useState<Context[]>([]); 
  const [contextParent, setContextParent] = useState<string>(''); 

  const [grandParent, setgrandParent] = useState<string>(''); 
  const [hid, setHid] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [references, setReferences] = useState<string>('');


  const [results, setResults] = useState<any[]>([]);

  const [heirarchy, setHeirarchy] = useState<number>(0);
  const [isBreadcrumpVisible, setIsBreadcrumpVisible] = useState(true);
  
  const [parentHierarchy, setParentHierarchy] = useState<any[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  const handleSearchIconClick = () => {
    setIsBreadcrumpVisible(!isBreadcrumpVisible);
  };

const { id } = useParams();
const id2 = id?.replace(/-/g, ' ');




useEffect(() => {
  if (id) {
    console.log(heirarchy);
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://be1web.onrender.com/api/article/post/${id2}`);
        const postData = response.data[0];
        // console.log(postData);

        setHid(postData._id);
        setContent(postData.description);
        setHeirarchy(postData.heirarchynumber2);
        setReferences(postData.references);
        setContextParent(postData.name);
        setgrandParent(postData.parent);

        

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const fetchContext = async () => {
      try {
        const response = await axios.post('https://be1web.onrender.com/api/article/getcontext', {
          parent: contextParent
        });
        setContexts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    const fetchContent = async () => {
      try {
        const response = await axios.post('https://be1web.onrender.com/api/article/getcontext', {
          "name": contextParent
        });
        setContent(response.data[0].description);
        setReferences(response.data[0].references);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const fetchHierarchy = async () => {
      try {
        const response = await axios.post('https://be1web.onrender.com/api/article/getancestors', {
          "idname" : id2
        });
        console.log(id2?id2:"id2 not available");
        setParentHierarchy(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchHierarchy();

    fetchContent();
    fetchData();
    fetchContext();
  }
}, [id, contextParent, setContent, setReferences, setContexts]);





  return (
    <>
     <div>
     
    </div>
    <Header />
    <div className={styles.search__container}>
      {isBreadcrumpVisible && (
          <div className={styles.context__hierarchy__container}>
            <HierarchyBox 
              key={0}
              imageSrc={'hierarchy/be1.gif'}
              articleLink={'../'}
              title={'Be1 Stack'}
            />
            {parentHierarchy.map((parentItem, index) => (
              <HierarchyBox
                key={index}
                imageSrc={`https://be1.s3.eu-north-1.amazonaws.com/${parentItem.name.replace(/\s+/g, '+')}.png`}
                articleLink={parentItem.name.replace(/\s+/g, '-')}
                title={parentItem.name}
              />
            ))}

            {/* {[...Array(heirarchy)].map((_, index) => (
            
            <HierarchyBox
            key={index}
            imageSrc={`hierarchy/Be1 Tier${index + 1}.jpg`}
            articleLink={contextParent.replace(/\s+/g, '-')}
            title={contextParent}
          />
          ))} */}
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
                  <div className={styles.leftpane__container}>
                  <div className={styles.context__parent__container}>
                    {contextParent && (
                      <ContextParent 
                        imageSrc={`https://be1.s3.eu-north-1.amazonaws.com/${grandParent.replace(/\s+/g, '+')}.png`}
                        articleLink={grandParent.replace(/\s+/g, '-')}
                      />
                    )}
                  </div>

                  <div className={styles.PanelContent}>
                     {/* Left Panel */}
                  
                     <div className={styles.context__breadcrump__container}>
                        {[...Array(14)].map((_, index) => (
                        <ContextBox
                          key={index}
                          imageSrc={`../chapters/${index + 1}.png`}
                        />
                      ))}
                      </div>
                    <Tabs>
                      <TabList >
                        <Tab>Context</Tab>
                        <Tab>Topic Clusters</Tab>
                      </TabList>

                      <TabPanel>
                     
                      <div className={styles.context__container}>       

                      {contexts ? (
                        contexts.map((context, index) => (
                          
                          <ArticleBox
                          key={index}
                          imageSrc={`https://be1.s3.eu-north-1.amazonaws.com/${context.imageurl.replace(/\s+/g, '+')}.png`}
                          articleLink={context.name.replace(/\s+/g, '-')}
                          title={context.name}
                          />
                        ))
                      ) : (
                        <Loading />
                      )}
                      </div>
                   
                      </TabPanel>
                      <TabPanel>
                        <h2>Any content 2</h2>
                      </TabPanel>
                    </Tabs>
                    </div>
                  </div>
                 
                </Panel>
                <ResizeHandle onDoubleClick={() => setShowFirstPanel(!showFirstPanel)} />
              </>
            )}
            <Panel className={styles.Panel} collapsible={true} order={2}>
            <div className={styles.context__containere}>       
      
            
            </div>
            {/* Main Panel */}
            <div className={styles.main__context__header__container}>
              <MainContext
                  imageSrc={`https://be1.s3.eu-north-1.amazonaws.com/${contextParent?.replace(/\s+/g, '+')}.png`}
              />
              <div className={styles.chapters__breadcrump__container}>
                <div className={styles.group1}>
                  {[...Array(5)].map((_, index) => (
                    <ContextBox
                      key={index}
                      imageSrc={`../chapters/${index + 1}.png`}
                    />
                  ))}
                </div>
                <div className={styles.group2}>
                  {[...Array(5)].map((_, index) => (
                    <ContextBox
                      key={index + 7}
                      imageSrc={`../chapters/${index + 8}.png`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.TopRow}>          
              <p>
                  <button
                    className={styles.Button}
                    onClick={() => setShowFirstPanel(!showFirstPanel)}
                  >
                    {showFirstPanel ? "minimize" : "maximize"} Context pane
                  </button>
                  &nbsp;
                  <button
                    className={styles.Button}
                    onClick={() => setShowLastPanel(!showLastPanel)}
                  >
                    {showLastPanel ? "minimize" : "maximize"} Reference pane
                  </button>
                </p>
              </div>
            <div className={styles.main__context__content}>
           
            <SentenceFormatter text={content} sectionHeader="## Journalism References" />
    
            </div>
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
                    {/* Right Panel */}
                    <>
                      <h2 className={styles.references__title}>
                        Sources
                      </h2>
                      <div className={styles.references_header_linebreak}></div>
                      <div className={styles.references__body}>
                        {transcribeMarkdownToText(references?references:"No references found")}
                      </div>
                    </>
                  </div>
                </Panel>
              </>
            )}
          </PanelGroup>
        </div>
        
      </div>
              <Footer />
      </>

  );
}
