import React from 'react';
import styles from "../styles.module.css";

const RightPane = () => {
  const markdownText = `## Journalism References
[^1]: "Earth", National Geographic, Accessed May 2021, https://www.nationalgeographic.com/science/space/solar-system/earth/.
[^2]: McDowell, Jonathan, "Earth", NASA Solar System Exploration, Accessed May 2021, https://solarsystem.nasa.gov/planets/earth/.
[^3]: "Earth: Facts About Its Orbit, Atmosphere & Size", Space.com, Accessed May 2021, https://www.space.com/16748-earth.html/.
[^4]: "Earth", Encyclopedia Britannica, Accessed May 2021, https://www.britannica.com/place/Earth-planet/.

## Governmental Sources
[^5]: "Earth", NASA, Accessed May 2021, https://www.nasa.gov/mission_pages/station/expeditions/expedition51/earth.html/.
[^6]: "Facts about the Earth", US Geological Survey, Accessed May 2021, https://www.usgs.gov/faqs/what-are-some-interesting-facts-about-earth?qt-news_science_products=0#qt-news_science_products/.
[^7]: "Earth's Formation and History", World Book, Accessed May 2021, https://www.worldbookonline.com/advanced/article?id=ar508860&st=earth/.
[^8]: "The Earth's structure and composition", The National Centre for Earth Observation, Accessed May 2021, https://www.nceo.ac.uk/earth-structure-and-composition/.

## Non-Governmental Sources
[^9]: "Earth", Our World in Data, Accessed May 2021, https://ourworldindata.org/earth/.
[^10]: "Earth", WWF, Accessed May 2021, https://www.worldwildlife.org/habitats/earth/.
[^11]: "Earth", Earth Day Network, Accessed May 2021, https://www.earthday.org/earth/.
[^12]: "Earth", Earth Observatory, Accessed May 2021, https://earthobservatory.nasa.gov/world-of-earth/.

## Scientific/Academic References
[^13]: Klotz, Irina, "All About Earth: A Guide for Kids", Live Science, Accessed May 2021, https://www.livescience.com/28472-earth-facts.html/.
[^14]: Zahnle, K., "Earth's Early Atmosphere", American Scientist, Accessed May 2021, https://www.americanscientist.org/article/earths-early-atmosphere/.
[^15]: Kasting, J.F., "Earth's Early Atmosphere", Scientific American, Accessed May 2021, https://www.sciam.com/article/earths-early-atmosphere/.
[^16]: Kastings, J.F., "The Origin of Earth's Atmosphere", Annual Review of Earth and Planetary Sciences, Accessed May 2021, https://www.annualreviews.org/doi/abs/10.1146/annurev.earth.27.1.241.`;

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

  return (
    <>
      <p className={styles.references__title}>
        Sources
      </p>
      <hr className={styles.references_header_linebreak} />
      <div className={styles.references__body}>
        {transcribeMarkdownToText(markdownText)}
      </div>
    </>
  );
};

export default RightPane;
