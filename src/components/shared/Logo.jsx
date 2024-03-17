import React from "react";
import { Link } from "react-router-dom";

const Logo = (props) => {
  return (
    <div
      class={`flex items-center flex-shrink-0 ${
        props.color === "white" ? "text-white" : "text-black"
      } mr-6`}
    >
      <svg
        class="fill-current h-6 w-6 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        width= "48px"
        height="48px"
        viewBox="-0.5 -0.5 800 800"
      >
        <defs />
        <g>
          <ellipse
            cx="400"
            cy="400"
            rx="400"
            ry="400"
            // fill="#000000"
            fill={props.color === "white" ? "#ffffff" : "#000000"}
            stroke="rgb(0, 0, 0)"
            stroke-width="0.1"
            pointer-events="all"
          />
          <rect
            x="265"
            y="265"
            width="270"
            height="270"
            // fill="#ffffff"
            fill={props.color === "white" ? "#000000" : "#ffffff"}
            stroke="none"
            pointer-events="all"
          />
        </g>
      </svg>
      <Link to="/">
        <h1 class="font-medium font-heading text-xl tracking-tight">
          arth
          <span className="ml-0.5 font-semibold">.</span>
        </h1>
      </Link>
    </div>
  );
};

export default Logo;
