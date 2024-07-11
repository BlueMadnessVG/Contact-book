import React from "react";

function HappyIcon({ style }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 10 100 80"
      x="0px"
      y="0px"
      className={style}
    >
      <path
        d="M50,82A32,32,0,1,0,18,50,32,32,0,0,0,50,82Zm0-56A24,24,0,1,1,26,50,24,24,0,0,1,50,26Z"
        fill="currentColor"
      />
      <circle cx="39" cy="46" r="4" fill="currentColor" />
      <circle cx="61" cy="46" r="4" fill="currentColor" />
      <path
        d="M42,57v.69A8.21,8.21,0,0,0,49.51,66,8,8,0,0,0,58,58V57a3,3,0,0,0-3-3H45A3,3,0,0,0,42,57Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default HappyIcon;
