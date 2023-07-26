"use client";

import { useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Navbar from "./Navbar";
// interface IParallax {
//   config: ConfigProp;
//   horizontal: boolean;
//   busy: boolean;
//   space: number;
//   offset: number;
//   current: number;
//   controller: Controller<{ scroll: number }>;
//   layers: Set<IParallaxLayer>;
//   container: React.MutableRefObject<any>;
//   content: React.MutableRefObject<any>;
//   scrollTo(offset: number): void;
//   update(): void;
//   stop(): void;
// }
export default function Mains() {
  const [animationBoolianState, setanimationBoolianState] = useState(false);
  setTimeout(() => {
    setanimationBoolianState(true);
  }, 3000);

  return (
    <>
      {animationBoolianState && (
        <div className="keyframes__MainAnimation bg-orange-200 w-screen h-screen ">
          <Navbar></Navbar>
          {/* <Parallax>
            <ParallaxLayer>
              <h1>welcome to my project</h1>
            </ParallaxLayer>
            <ParallaxLayer>
              <h1>its my project</h1>
            </ParallaxLayer>
          </Parallax> */}
        </div>
      )}
    </>
  );
}
