import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import "./SearchBar.css";

// interface SearchBarProps {
//   setResults: (results: any[]) => void;
// }
interface SearchBarProps {
  setResults: (results: any[]) => void;
  onSearchIconClick: () => void; // New prop for handling search icon click
}


export const SearchBar: React.FC<SearchBarProps> = ({ setResults, onSearchIconClick }) => {
  const [input, setInput] = useState("");
  const [isInputVisible, setIsInputVisible] = useState(false);

  // const handleSearchIconClick = () => {
  //   setIsInputVisible(!isInputVisible);
  // };
  const handleSearchIconClick = () => {
    setIsInputVisible(!isInputVisible);
    onSearchIconClick(); // Call the provided prop function
  };

  const fetchData = (value: string) => {
    const apiKey = "67945731797be1APIKEy";
    fetch("https://be1game.onrender.com/api/article/getall", {
      headers: {
        "x-api-key": apiKey,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((country: {name: string}) => {
          return (
            value &&
            country &&
            country.name &&
            country.name &&
            country.name.toLowerCase().includes(value)
            );
            
        });
        results[0]?results[0].value = input : results[0] = '';
        setResults(results);
        console.log(results[0].value );
        console.log(results);

      });
  };
  

  const handleChange = (value: string) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" onClick={handleSearchIconClick}/>
      {isInputVisible && (
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
      )}
    </div>
  );
};








// import { useState } from "react";
// import { FaSearch } from "react-icons/fa";

// import "./SearchBar.css";

// interface SearchBarProps {
//   setResults: (results: any[]) => void;
// }

// export const SearchBar: React.FC<SearchBarProps> = ({ setResults }) => {
//   const [input, setInput] = useState("");
//   const [isInputVisible, setIsInputVisible] = useState(false);

//   const fetchData = (value: string) => {
//     const apiKey = "67945731797be1APIKEy";
//     fetch("https://be1game.onrender.com/api/article/getall", {
//       headers: {
//         "x-api-key": apiKey,
//       },
//     })
//       .then((response) => response.json())
//       .then((json) => {
//         const results = json.filter((country: {description: string}) => {
//           return (
//             value &&
//             country &&
//             // country.name &&
//             country.description &&
//             country.description.toLowerCase().includes(value)
//             );
            
//         });
//         setResults(results);
//       });
//   };
  


//   const handleChange = (value: string) => {
//     setInput(value);
//   };

//   const handleSearchIconClick = () => {
//     setIsInputVisible(!isInputVisible);
//   };

//   return (
//     <div className="input-wrapper">
//       <FaSearch id="search-icon" onClick={handleSearchIconClick} />
//       {isInputVisible && (
//         <input
//           placeholder="Type to search..."
//           value={input}
//           onChange={(e) => handleChange(e.target.value)}
//         />
//       )}
//     </div>
//   );
// };
