import { useState,useLayoutEffect } from 'react';

//data
import portfolioData from '../../data/portfolioData';
import PortfolioGridItem from './PortfolioGridItem';

//stylesheet
import '../../styles/PortfolioGrid.css'

function PortfolioGrid() {

    const [shrink,setShrink] = useState(false);


    //resize event listener
    useLayoutEffect(() => {

        //adjust grid layout
        const handleAdjust = () => {
            if(window.innerWidth > 768) {
                setShrink(false);
            }else{
                setShrink(true);
            }
        }

        window.addEventListener('resize',handleAdjust)

        return () => {
            window.removeEventListener('resize',handleAdjust)
        }
    },[shrink])

  return (
    <div className="portfolio-grid">
      {portfolioData.map((item) => {
        if(shrink && item.id>12) {
            return null
        }
        return <PortfolioGridItem key={item.id} item={item} />
        })}
    </div>
  );
}

export default PortfolioGrid;
