"use client";
import { useEffect, useState } from "react";

import { Cabin_Sketch } from "next/font/google";
// import "./../App.css";
const roboto = Cabin_Sketch({
  subsets: ["latin"],
  weight: ["700"],
});
export default function Firstview() {
  const [animationBoolianState, setanimationBoolianState] = useState(true);
  setTimeout(() => {
    setanimationBoolianState(false);
  }, 3000);

  return (
    <>
      {animationBoolianState && (
        <div className="keyframes__firsAnimationclass__parent overflow-hidden w-full h-screen bg-red-600 grid items-center">
          <div
            className={`${roboto.className} keyframes__firsAnimationclass overflow-hidden text-center justify-items-center max-[600px]:text-7xl text-9xl font-bold  text-amber-400 select-none  `}
          >
            welcome
          </div>
        </div>
      )}
    </>
  );
}
