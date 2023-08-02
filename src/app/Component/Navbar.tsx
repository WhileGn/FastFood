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
  console.log(offsetY);

  useEffect(() => {
    window.addEventListener("scroll", handlerScroll);
    return () => window.removeEventListener("scroll", handlerScroll);
  }, []);
  const [main__navbar__animation, setmain__navbar__animation] =
    useState<any>(`w-[90%]
    rounded-[20rem] right-[2%]
    left-[2%] translate-y-[3rem]`);

  useEffect(() => {
    if (offsetY > 200) {
      setmain__navbar__animation(`w-[95%]
      rounded-[1.8rem] right-[0%]
      left-[0%] translate-y-[1.2rem] bg-yellow-400 bg-opacity-70`);
    } else if (offsetY < 200) {
      setmain__navbar__animation(` w-[90%]
      rounded-[20rem] right-[2%]
      left-[2%]   translate-y-[3rem] bg-yellow-400`);
    }
  }, [offsetY]);

  return (
    <>
      <main
        className={`${main__navbar__animation} fixed z-50    duration-[1.5s]  Main_Navbar h-[5rem]   drop-shadow-2xl  mx-auto grid    grid-cols-3 justify-items-center items-center select-none `}
      >
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
