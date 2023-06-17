// import React from "react";
// import "./SearchResultsList.css";
// import { SearchResult } from "./searchResult";

// interface SearchResultsListProps {
//   results: any[];
// }

// export const SearchResultsList: React.FC<SearchResultsListProps> = ({ results }) => {
//   return (
//     <div className="results-list">
//       {results.map((result: any, id: number) => {
//         // return <SearchResult result={result.name} key={id} />;
//         return <SearchResult result={result.description} key={id} />;
//       })}
//     </div>
//   );
// };


import React from "react";
import "./SearchResultsList.css";
import { SearchResult } from "./searchResult";

interface SearchResultsListProps {
  results: any[];
}

export const SearchResultsList: React.FC<SearchResultsListProps> = ({ results }) => {
  return (
    <div className="results-list">
      <p style={{marginBottom:'10px', marginTop: '15px', marginLeft: '20px', color: 'gray'}}>Search results;</p>
      {results.map((result: any, id: number) => (
        <SearchResult name={result.name} description={result.description} value={result.value} key={id} />
      ))}
    </div>
  );
};


// import React from "react";
// import "./SearchResultsList.css";
// import { SearchResult } from "./searchResult";

// interface SearchResultsListProps {
//   results: any[];
//   searchTerm: string;
// }

// export const SearchResultsList: React.FC<SearchResultsListProps> = ({ results, searchTerm }) => {
//   return (
//     <div className="results-list">
//       {results.map((result: any, id: number) => (
//         <SearchResult
//           key={id}
//           name={result.name}
//           description={result.description}
//           searchTerm={searchTerm}
//         />
//       ))}
//     </div>
//   );
// };
