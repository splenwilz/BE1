// import React from "react";
// import "./SearchResult.css";

// interface SearchResultProps {
//   result: string;
// }

// export const SearchResult: React.FC<SearchResultProps> = ({ result }) => {
//   return (
//     <div
//       className="search-result"
//       onClick={(e) => alert(`You selected ${result}!`)}
//     >
//       {result}
//     </div>
//   );
// };


// import React from "react";
// import "./SearchResult.css";

// interface SearchResultProps {
//   name: string;
//   description: string;
//   value: string;
// }


// export const SearchResult: React.FC<SearchResultProps> = ({ name, description, value }) => {
//   const highlightSearchTerm = (text: string) => {
//     const regex = new RegExp(`(${value})`, "gi");
//     return text.replace(regex, "<span class='highlighted'>$1</span>");
//   };

//     const getDescriptionWithHighlightedTerm = () => {
//     const sentences = description.split(". ");
//     const highlightedSentences = sentences.map((sentence) =>
//       highlightSearchTerm(sentence)
//     );
//     return highlightedSentences.join(". ");
//   };





//   return (
//     <div
//       className="search-result"
//       onClick={() => alert(`You selected ${name}!`)}
//     >
//       <a href={name?.replace(/\s+/g, '-')}>
//         <h3>{name?name:''}</h3>
//         <p>{value?value:''}</p>
//         <p
//           dangerouslySetInnerHTML={{
//             __html: getDescriptionWithHighlightedTerm(),
//           }}
//         ></p>
//         {/* <p>{description?description:'Search result not found'}</p> */}
//       </a>
//     </div>
//   );
// };




import React from "react";
import "./SearchResult.css";
import KeywordFinder from "./KeywordFinder";

interface SearchResultProps {
  name: string;
  description: string;
  value: string;
}

export const SearchResult: React.FC<SearchResultProps> = ({
  name,
  description,
  value,
}) => {
  const highlightSearchTerm = (text: string) => {
    const regex = new RegExp(`(${value})`, "gi");
    return text.replace(regex, "<span class='highlighted'>$1</span>");
  };

  const getDescriptionWithHighlightedTerm = () => {
    const sentences = description?.split(". ");
    const highlightedSentences = sentences?sentences.map((sentence) =>
      highlightSearchTerm(sentence?sentence:'')
    ):[];
    return highlightedSentences.join(". ");
  };

  return (
    <div
      className="search-result"
      onClick={() => alert(`You selected ${name}!`)}
    >
      <a href={name?.replace(/\s+/g, "-")}>
        <h3>{name ? name : ""}</h3>
        
        <KeywordFinder description={description ? description : ""} keyword={value ? value : ""} />

        {/* <p>{description ? description : ""}</p> */}
      </a>
    </div>
  );
};




// import React from "react";
// import "./SearchResult.css";

// interface SearchResultProps {
//   name: string;
//   description: string;
//   searchTerm: string;
// }

// export const SearchResult: React.FC<SearchResultProps> = ({ name, description, searchTerm }) => {
//   const highlightSearchTerm = (text: string) => {
//     const regex = new RegExp(`(${searchTerm})`, "gi");
//     return text.replace(regex, "<span class='highlighted'>$1</span>");
//   };

//   const getDescriptionWithHighlightedTerm = () => {
//     const sentences = description.split(". ");
//     const highlightedSentences = sentences.map((sentence) =>
//       highlightSearchTerm(sentence)
//     );
//     return highlightedSentences.join(". ");
//   };

//   return (
//     <div className="search-result">
//       <h3>{name}</h3>
//       <p
//         dangerouslySetInnerHTML={{
//           __html: getDescriptionWithHighlightedTerm(),
//         }}
//       ></p>
//     </div>
//   );
// };
