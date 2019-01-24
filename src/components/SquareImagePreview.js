import React from "react";

const SquareImagePreview = (props) => (
  <div
    style={
      {
        maxWidth: "293px",
        maxHeight: "293px",
        width: "33vw",
        height: "33vw",
        overflow: "hidden",
        margin: "1%"
      }
    }
  >
    <img 
      src={ props.src} 
      className="square-image"
      style = {
        { 
          width: "15vw",
          minHeight: "15vw"
        }
      }
    />
  </div>
)

export default SquareImagePreview