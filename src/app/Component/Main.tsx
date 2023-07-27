"use client";
import backgroundImage from "../public/mae-mu-IZ0LRt1khgM-unsplash.jpg";

import { useEffect, useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Navbar from "./Navbar";
import MainContent from "./MainContent";
import { Transform } from "stream";
import { transform } from "typescript";
import { StaticImageData } from "next/image";
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

  const [background, setbackground] = useState<string>();

  useEffect(() => {
    setTimeout(() => {
      setanimationBoolianState(true);
    }, 3000);
  }, []);
  const [offsetY, setoffsetY] = useState(0);
  const handlerScroll = () => setoffsetY(window.pageYOffset);
  console.log(offsetY);

  useEffect(() => {
    window.addEventListener("scroll", handlerScroll);
    return () => window.removeEventListener("scroll", handlerScroll);
  }, []);
  const MaincontentComponentVarible = (
    <>
      {" "}
      <div style={{ transform: `translateX(${offsetY * 0.1}px)` }}>
        <MainContent></MainContent>
      </div>
      <div style={{ transform: `translateX(${offsetY * 0.1}px)` }}>
        <MainContent></MainContent>
      </div>
      <div style={{ transform: `translateX(${offsetY * 0.1}px)` }}>
        <MainContent></MainContent>
      </div>
      <div style={{ transform: `translateX(${offsetY * 0.1}px)` }}>
        <MainContent></MainContent>
      </div>
      <div style={{ transform: `translateX(${offsetY * 0.1}px)` }}>
        <MainContent></MainContent>
      </div>
      <div style={{ transform: `translateX(${offsetY * 0.1}px)` }}>
        <MainContent></MainContent>
      </div>
      <div style={{ transform: `translateX(${offsetY * 0.1}px)` }}>
        <MainContent></MainContent>
      </div>
      <div style={{ transform: `translateX(${offsetY * 0.1}px)` }}>
        <MainContent></MainContent>
      </div>
    </>
  );
  setTimeout(() => {
    setbackground("background__images");
  }, 5000);

  return (
    <>
      {animationBoolianState && (
        <div
          // style={styleState}
          className={`pt-1 ${background} bg-white keyframes__MainAnimation relative  w-screen h-auto min-h-screen`}
        >
          <div className="Main__Navbar">
            <Navbar></Navbar>
            {/* <MainContent></MainContent> */}
          </div>
          <div className="Main__ContentComponent grid justify-center mt-56">
            {MaincontentComponentVarible}
          </div>

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
