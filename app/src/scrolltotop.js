import React,  {useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons'
import './scrolltotop-styles.scss';


const ScrollArrow = () =>{

  const [showScroll, setShowScroll] = useState(false)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400){
        setShowScroll(true)
      } else if (showScroll && window.pageYOffset <= 400){
        setShowScroll(false)
      }
    };
  

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  
  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop)
    return () => window.removeEventListener('scroll', checkScrollTop)
  }, [checkScrollTop])


  return (
      <div className="scrollArrowContainer" style={{
          width: '100%',
          display: 'flex',
      }}>
        <FontAwesomeIcon icon={faArrowCircleUp} className="scrollTop" onClick={scrollTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}}/>
      </div>
  );
}

export default ScrollArrow;