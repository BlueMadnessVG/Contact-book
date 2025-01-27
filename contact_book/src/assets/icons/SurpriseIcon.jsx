import React from "react";

function SurpriseIcon({ style }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 100 125"
      x="0px"
      y="0px"
      className={style}
    >
      <path
        d="M55,18H31A12,12,0,0,0,19,30V70A12,12,0,0,0,31,82H47a4,4,0,0,0,0-8H31a4,4,0,0,1-4-4V30.22A4.14,4.14,0,0,1,31.2,26,4,4,0,0,1,35,30a4,4,0,0,0,4,4h7c3.21,0,5-1.8,5-4a4,4,0,0,1,3.8-4A4.14,4.14,0,0,1,59,30.22V46a4,4,0,0,0,8,0V30A12,12,0,0,0,55,18Z"
        fill="currentColor"
      />
      <circle cx="55" cy="61" r="4" fill="currentColor" />
      <circle cx="77" cy="61" r="4" fill="currentColor" />
      <circle cx="66" cy="75" r="7" fill="currentColor" />
    </svg>
  );
}

export default SurpriseIcon;
