// import React from 'react';

// interface KeywordFinderProps {
//   description: string;
//   keyword: string;
// }

// const KeywordFinder: React.FC<KeywordFinderProps> = ({ description, keyword }) => {
//   const getDescriptionWithKeyword = () => {
//     const words = description.split(' ');
//     const keywordIndex = words.findIndex((word) => word.toLowerCase().includes(keyword.toLowerCase()));

//     if (keywordIndex !== -1) {
//       const startIndex = Math.max(0, keywordIndex - 3);
//       const endIndex = Math.min(words.length - 1, keywordIndex + 3);
//       const surroundingWords = words.slice(startIndex, endIndex + 20);
//       const result = surroundingWords.join(' ');

//       return result;
//     }

//     // return 'Search term not found';
//   };

//   return <div>{getDescriptionWithKeyword()}</div>;
// };

// export default KeywordFinder;


import React from 'react';

import "./KeywordFinder.css";

interface KeywordFinderProps {
  description: string;
  keyword: string;
}

const KeywordFinder: React.FC<KeywordFinderProps> = ({ description, keyword }) => {
  const getDescriptionWithKeyword = () => {
    const words = description.split(' ');
    const keywordIndex = words.findIndex((word) => word.toLowerCase().includes(keyword.toLowerCase()));

    if (keywordIndex !== -1) {
      const startIndex = Math.max(0, keywordIndex - 3);
      const endIndex = Math.min(words.length - 1, keywordIndex + 3);
      const surroundingWords = words.slice(startIndex, endIndex + 20);

      const result = surroundingWords.map((word, index) => {
        const isKeyword = word.toLowerCase().includes(keyword.toLowerCase());
        const highlightClass = isKeyword ? 'highlight' : '';

        return (
          <span key={index} className={highlightClass}>
            {word}
            {index !== endIndex && ' '}
          </span>
        );
      });

      return result;
    }

    // return 'Keyword not found';
  };

  return <div>{getDescriptionWithKeyword()}</div>;
};

export default KeywordFinder;

