"use client";

import Image from "next/image";
import image_1 from "./../public/pngimg.com - sandwich_PNG14.png";
import image_2 from "./../public/92d75abef1c7523630339a2793eba5eb-pizza-color-stroke-slice.png";
import image_3 from "./../public/pngfind.com-drinks-png-10229.png";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [navbaranimation, setnavbaranimation] = useState();
  const [offsetY, setoffsetY] = useState(0);
  const handlerScroll = () => setoffsetY(window.pageYOffset);
  if (offsetY > 20) {
  }
  if (offsetY < 20) {
  }
  useEffect(() => {
    window.addEventListener("scroll", handlerScroll);
    return () => window.removeEventListener("scroll", handlerScroll);
  }, []);
  return (
    <>
      <main className="fixed z-50 right-[2%] left-[2%] Main_Navbar h-[5rem] bg-yellow-400  drop-shadow-2xl w-[96%] mx-auto grid translate-y-[1.5rem]  rounded-[20rem] grid-cols-3 justify-items-center items-center select-none ">
        <div
          // href={"Route/sandwich"}
          className="Main_Navbar__items __sandwich__"
        >
          <Image
            className="drop-shadow-2xl hover:scale-150 duration-300 cursor-pointer"
            width={90}
            height={90}
            src={image_1}
            alt="notFound"
          ></Image>
        </div>
        <div
          // href={"Route/pizza"}
          className="Main_Navbar__items __pizza__ hover:scale-150 duration-300 cursor-pointer"
        >
          <Image
            className="drop-shadow-2xl"
            width={80}
            height={80}
            src={image_2}
            alt="notFound"
          ></Image>
        </div>

        <div
          // href={"Route/drink"}
          className="Main_Navbar__items __drink__ mb-5"
        >
          <Image
            className="drop-shadow-2xl hover:scale-150 duration-300 cursor-pointer"
            width={70}
            height={70}
            src={image_3}
            alt="notFound"
          ></Image>
        </div>
      </main>
    </>
  );
}
