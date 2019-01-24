import React from 'react';

const LoadingIndicator = (props) => (
  <img 
    src={ props.src } 
    style={
      {
        maxWidth: "100px",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
      }
    }
  />
)

export default LoadingIndicator