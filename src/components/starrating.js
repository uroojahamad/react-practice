import React, { useState } from "react";
import "../styles.css";
  
  // type StarRatingProps = {
  //   stars: number,
  //   onChange: (rating: number) => void
  // };
  
  const StarRating = ({ stars }) => {
    const [selectedStar, setSelectedStar] = useState(0);
    const [lastHighlightedStar, setLastHighlightedStar] = useState(0);
  
    const handleStarClick = (clickedStar) => {
      setSelectedStar(clickedStar);
      setLastHighlightedStar(clickedStar);
      if (onChange){
        onChange(clickedStar);
      }
    };
  
    const handleStarHover = (hoveredStar) => {
      setSelectedStar(hoveredStar);
    };
  
    const handleMouseLeave = () => {
      setSelectedStar(lastHighlightedStar);
    };
    
    return (
      <div onMouseLeave={handleMouseLeave}>
      {[...Array(stars)].map((_, i) => (
        <span
          className={`star ${i < selectedStar ? 'highlighted' : ''}`}
          key={i}
          onClick={() => handleStarClick(i + 1)}
          onMouseEnter={() => handleStarHover(i + 1)}
        >
          {i < selectedStar ? '★' : '☆'}
        </span>
      ))}
    </div>
    );
  };
  
  export default StarRating;
  
    