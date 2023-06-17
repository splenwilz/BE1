// import React from 'react';

// interface Props {
//   text: string;
// }

// const SentenceFormatter: React.FC<Props> = ({ text }) => {
//   const formatText = (text: string) => {
//     const sentences = text.split('. '); // Split the text into sentences

//     // Add a line break after each sentence
//     const formattedText = sentences.map((sentence, index) => (
//       <React.Fragment key={index}>
//         {sentence.trim()}.{index < sentences.length - 1 && <><br /><br /></>}
//       </React.Fragment>
//     ));

//     return formattedText;
//   };

//   return <p>{formatText(text)}</p>;
// };

// export default SentenceFormatter;


import React from 'react';

interface Props {
  text: string;
  sectionHeader: string;
}

const SentenceFormatter: React.FC<Props> = ({ text, sectionHeader }) => {
  const formatText = (text: string) => {
    const startIndex = text.indexOf(sectionHeader);

    if (startIndex !== -1) {
      const topPart = text.substring(0, startIndex);
      const sentences = topPart.split('. ');

      const formattedText = sentences.map((sentence, index) => (
        <React.Fragment key={index}>
          {sentence.trim()}.{index < sentences.length - 1 && <><br /><br /></>}
        </React.Fragment>
      ));

      return formattedText;
    }

    return text;
  };

  return <p>{formatText(text)}</p>;
};

export default SentenceFormatter;


