import React from 'react'
import "./../Assets/fallback.css"
function MyFallbackComponent() {
  return (
    <div className="loader_container">
      <div className="loader">
        <img className="loader-svg" src="icons/star.png" alt="" id="Capa_1" />
      </div>
    </div>
  );
}

export default MyFallbackComponent