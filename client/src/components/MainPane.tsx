import React from 'react';
import MainContext from './MainContext';
import styles from '../styles.module.css';
import ContextBox from './ContextBox';

function MainPane() {
  return (
    <>
    <div className={styles.main__context__header__container}>
      <MainContext
          imageSrc={"images/Be1 Tier1.svg"}
      />
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
    <div className={styles.main__context__content}>
      <p>
      Center of the world’s tech industry (Silicon Valley) and entertainment industry (Hollywood), California has an economy so large ($3.63 trillion), that, if it were its own nation, its would be the fifth largest in the world, behind only the United States, China, Japan, and Germany, which it is poised to overtake. It is the only geographical location with a periodic-table element named after it (Californium); it is home to the world’s oldest plant, a Great Basin bristlecone pine tree named Methuselah, which is 4,853 years old, and is immortalized in numerous works of art, including songs such as “California Girls” and paintings by David Hockney.

California, located on the Pacific Coast, is
      </p>
    </div>
    </>
  )
}

export default MainPane
