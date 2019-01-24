import React from "react";

const SquareImagePreview = (props) => (
  <div
    style={
      {
        maxWidth: "293px",
        maxHeight: "293px",
        width: "13vw",
        height: "13vw",
        overflow: "hidden",
        margin: "0.5vw"
      }
    }
  >
    <img 
      src={ props.src} 
      className="square-image"
      style = {
        { 
          width: "13vw",
          minHeight: "13vw"
        }
      }
    />
  </div>
)

export default SquareImagePreview