"use client";

import image_1 from "./../public/static_img/pngimg.com - sandwich_PNG14.png";
import image_2 from "./../public/static_img/92d75abef1c7523630339a2793eba5eb-pizza-color-stroke-slice.png";
import image_3 from "./../public/static_img/pngfind.com-drinks-png-10229.png";
import backgroundImage from "../public/mae-mu-IZ0LRt1khgM-unsplash.jpg";
import mongo_API from "./../api/api_1";
import { use, useEffect, useRef, useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Navbar from "./Navbar";
import MainContent from "./MainContent";
import { Transform } from "stream";
import { transform } from "typescript";
import Image, { StaticImageData } from "next/image";
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
  const lodingVariable = (
    <main className="Main_loding_animation">
      <svg
        className="ap"
        viewBox="0 0 128 256"
        width="128px"
        height="256px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="ap-grad1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="hsl(123,90%,55%)" />
            <stop offset="100%" stop-color="hsl(153,90%,55%)" />
          </linearGradient>
          <linearGradient id="ap-grad2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="hsl(93,90%,55%)" />
            <stop offset="50%" stop-color="hsl(123,90%,55%)" />
            <stop offset="100%" stop-color="hsl(153,90%,55%)" />
          </linearGradient>
        </defs>
        <circle
          className="ap__ring"
          r="56"
          cx="64"
          cy="192"
          fill="none"
          stroke="#ddd"
          stroke-width="16"
          stroke-linecap="round"
        />
        <circle
          className="ap__worm1"
          r="56"
          cx="64"
          cy="192"
          fill="none"
          stroke="url(#ap-grad1)"
          stroke-width="16"
          stroke-linecap="round"
          stroke-dasharray="87.96 263.89"
        />
        <path
          className="ap__worm2"
          d="M120,192A56,56,0,0,1,8,192C8,161.07,16,8,64,8S120,161.07,120,192Z"
          fill="none"
          stroke="url(#ap-grad2)"
          stroke-width="16"
          stroke-linecap="round"
          stroke-dasharray="87.96 494"
        />
      </svg>
    </main>
  );
  const [component, setcomponent] = useState<any>();

  const variable_sandwich: any = [];
  const variable_pizza: any = [];
  const variable_drink: any = [];

  const [component_sandwich, setcomponent_sandwich] = useState<any>();
  const [component_pizza, setcomponent_pizza] = useState<any>();
  const [component_drink, setcomponent_drink] = useState<any>();

  const dataFetchHandler = async function () {
    setlodingState(true);
    const MainfetchData = await mongo_API();
    if (MainfetchData == "error") {
      setcomponent(
        <div className="error__whenFetching">plase chack network conection</div>
      );
    } else {
      const MainData = await JSON.parse(MainfetchData);
      MainData.map((datas: any) => {
        const typeOfdata = datas.type;
        if (typeOfdata == "sandwich") {
          variable_sandwich.push(datas);
        }
        if (typeOfdata == "pizza") {
          variable_pizza.push(datas);
        }
        if (typeOfdata == "drink") {
          variable_drink.push(datas);
        }
      });
      setcomponent_sandwich(
        variable_sandwich.map((datas: any) => {
          return (
            <div>
              <MainContent data={datas}></MainContent>
            </div>
          );
        })
      );
      setcomponent_pizza(
        variable_pizza.map((datas: any) => {
          return (
            <div>
              <MainContent data={datas}></MainContent>
            </div>
          );
        })
      );
      setcomponent_drink(
        variable_drink.map((datas: any) => {
          return (
            <div>
              <MainContent data={datas}></MainContent>
            </div>
          );
        })
      );

      console.log(variable_drink);
      console.log(variable_sandwich);
      console.log(variable_pizza);

      // setcomponent(
      //   MainData.map((data: any) => {
      //     const typeOfdata = data.type;

      //     return (
      //       <div>
      //         <MainContent data={data}></MainContent>
      //       </div>
      //     );
      //   })
      // );
    }

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

  const ref_sandwich: any = useRef(null);
  const ref_pizza: any = useRef(null);
  const ref_drink: any = useRef(null);
  const refs = { ref_sandwich, ref_pizza, ref_drink };

  // const handleClick_sandwich = () => {
  //   ref_sandwich.current?.scrollIntoView({ behavior: "smooth" });
  // };
  // const handleClick_pizza = () => {
  //   ref_pizza.current?.scrollIntoView({ behavior: "smooth" });
  // };
  // const handleClick_drink = () => {
  //   ref_drink.current?.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <>
      {animationBoolianState && (
        <div
          // style={styleState}
          className={`pt-1 ${background} bg-white keyframes__MainAnimation relative  w-screen h-auto min-h-screen`}
        >
          <div className="Main__Navbar">
            <Navbar refData={refs}></Navbar>
            {/* <MainContent></MainContent> */}
          </div>
          <div className="Main__ContentComponent grid justify-center mt-48">
            {lodingState && lodingVariable}

            {!lodingState && (
              <div className="Main__div__content grid justify-center">
                <Image
                  ref={ref_sandwich}
                  className="Main__sandwich__image padi drop-shadow-[30px_30px_18px_black]  justify-self-center  duration-300 mb-10"
                  width={400}
                  height={400}
                  src={image_1}
                  alt="notFound"
                ></Image>
                {component_sandwich}
                <Image
                  ref={ref_pizza}
                  className="Main__pizza__image padi drop-shadow-[30px_30px_18px_black]  justify-self-center  duration-300 "
                  width={400}
                  height={400}
                  src={image_2}
                  alt="notFound"
                ></Image>
                {component_pizza}
                <Image
                  ref={ref_drink}
                  className="Main__drink__image padi drop-shadow-[30px_30px_18px_black]  justify-self-center  duration-300 mb-12"
                  width={400}
                  height={400}
                  src={image_3}
                  alt="notFound"
                ></Image>
                {component_drink}
              </div>
            )}
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
