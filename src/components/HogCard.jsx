import React, { useState } from "react";

function HogCard({ hog, onHideHog }) {
  const [isExpanded, setIsExpanded] = useState(false);

  function handleToggleExpand() {
    setIsExpanded((prev) => !prev);
  }

  function handleHideClick(e) {
    e.stopPropagation(); // Prevents layout expansion toggles when clicking the hide button
    onHideHog(hog.name);
  }

  return (
    <div className="ui eight wide column">
      {/* Click event handler lives exclusively on the wrapper container */}
      <div 
        aria-label="hog card" 
        className="ui fluid card" 
        onClick={handleToggleExpand}
        style={{ cursor: "pointer", minHeight: "100%" }}
      >
        <div className="image">
          <img src={hog.image} alt={`Photo of ${hog.name}`} />
        </div>
        <div className="content">
          {/* Removed direct onClick here to prevent double-execution event bubbling loops */}
          <h3 className="header">
            {hog.name}
          </h3>
          
          {isExpanded && (
            <div className="description left aligned" style={{ marginTop: "10px" }}>
              <p>{`Specialty: ${hog.specialty}`}</p>
              <p>{hog.weight}</p>
              <p>{hog.greased ? "Greased" : "Nongreased"}</p>
              <p className="achievementText">
                {hog["highest medal achieved"]}
              </p>
            </div>
          )}
        </div>
        <div className="extra content">
          <button 
            className="ui mini fluid button red basic" 
            onClick={handleHideClick}
          >
            Hide Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default HogCard;