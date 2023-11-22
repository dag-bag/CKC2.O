svg {
width: 300px;
display: block;
position: absolute;
}

.ball {
width: 10px;
height: 10px;
background-color: red;
border-radius: 50%;

    offset-path: path('M10 80 Q 77.5 10, 145 80 T 280 80');
    offset-distance: 0%;

    animation: red-ball 2s linear  infinite;

}

@keyframes red-ball {
from {
offset-distance: 0%;
}
to {
offset-distance: 50%;
}
}

"use client";
// Snake.js
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Snake = () => {
const pathVariants = {
initial: {
opacity: 0,
pathLength: 0,
},
animate: {
opacity: 1,
pathLength: 1,
transition: {
duration: 2,
ease: "easeInOut",
},
},
};

return (
<>
<svg width="300px" height="175px" version="1.1">
<motion.path
fill="transparent"
stroke="#888888"
stroke-width="1"
strokeDasharray={"5"}
d="M10 80 Q 77.5 10, 145 80 T 280 80"
className="path" ></motion.path>
</svg>

      <motion.div className="ball"></motion.div>
    </>

);
};

export default Snake;
