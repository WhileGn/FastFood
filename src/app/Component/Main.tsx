"use client";
import backgroundImage from "../public/mae-mu-IZ0LRt1khgM-unsplash.jpg";
import mongo_API from "./../api/api_1";
import { useEffect, useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Navbar from "./Navbar";
import MainContent from "./MainContent";
import { Transform } from "stream";
import { transform } from "typescript";
import { StaticImageData } from "next/image";
import { log } from "console";
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
  const [lodingState, setlodingState] = useState<boolean>(false);
  const [component, setcomponent] = useState<any>();
  const dataFetchHandler = async function () {
    setlodingState(true);
    const MainfetchData = await mongo_API();
    const MainData = await JSON.parse(MainfetchData);
    setcomponent(
      MainData.map((data: any) => {
        return (
          <div>
            <MainContent data={data}></MainContent>
          </div>
        );
      })
    );
    console.log(component);

    console.log(MainfetchData);
    console.log(MainData);
    setlodingState(false);
  };
  useEffect(() => {
    dataFetchHandler();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setanimationBoolianState(true);
    }, 3000);
  }, []);
  const [offsetY, setoffsetY] = useState(0);
  const handlerScroll = () => setoffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handlerScroll);
    return () => window.removeEventListener("scroll", handlerScroll);
  }, []);
  // const MaincontentComponentVarible = (
  //   <>
  //     {" "}
  //     <div style={{ transform: `translateY(${offsetY * 0.1}px)` }}>
  //       <MainContent></MainContent>
  //     </div>
  //     <div style={{ transform: `translateX(-${offsetY * 0.1}px)` }}>
  //       <MainContent></MainContent>
  //     </div>
  //     <div style={{ transform: `translateX(${offsetY * 0.1}px)` }}>
  //       <MainContent></MainContent>
  //     </div>
  //     <div style={{ transform: `translateX(-${offsetY * 0.1}px)` }}>
  //       <MainContent></MainContent>
  //     </div>
  //     <div style={{ transform: `translateX(${offsetY * 0.1}px)` }}>
  //       <MainContent></MainContent>
  //     </div>
  //     <div style={{ transform: `translateX(-${offsetY * 0.1}px)` }}>
  //       <MainContent></MainContent>
  //     </div>
  //     <div style={{ transform: `translateX(${offsetY * 0.1}px)` }}>
  //       <MainContent></MainContent>
  //     </div>
  //     <div style={{ transform: `translateX(-${offsetY * 0.1}px)` }}>
  //       <MainContent></MainContent>
  //     </div>
  //   </>
  // );
  setTimeout(() => {
    setbackground("background__images");
  }, 2000);
  // const testfechdata = async function () {
  //   const testfetch__data = await mongo_API();
  //   console.log(testfetch__data);
  // };
  // testfechdata();

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
            {component}
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
