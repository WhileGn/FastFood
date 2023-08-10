"use client";

import Image from "next/image";
import image_1 from "./../public/static_img/pngimg.com - sandwich_PNG14.png";
import image_2 from "./../public/static_img/92d75abef1c7523630339a2793eba5eb-pizza-color-stroke-slice.png";
import image_3 from "./../public/static_img/pngfind.com-drinks-png-10229.png";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { type } from "os";

type NavbarType = {
  refData: any;
};
const Navbar: React.FC<NavbarType> = function (props) {
  const ref_img = props.refData;

  const [navbaranimation, setnavbaranimation] = useState();
  const [offsetY, setoffsetY] = useState(0);
  const handlerScroll = () => setoffsetY(window.pageYOffset);
  console.log(offsetY);
  console.log(window);

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
      left-[0%] translate-y-[1.2rem] bg-yellow-300 bg-opacity-70`);
    } else if (offsetY < 200) {
      setmain__navbar__animation(` w-[90%]
      rounded-[20rem] right-[2%]
      left-[2%]   translate-y-[3rem] bg-yellow-400`);
    }
  }, [offsetY]);
  const handleClick_sandwich = () => {
    ref_img.ref_sandwich.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClick_pizza = () => {
    ref_img.ref_pizza.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClick_drink = () => {
    ref_img.ref_drink.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");

    function handleViewportChange(event: any) {
      setIsMobile(event.matches);
    }

    handleViewportChange(mediaQuery);

    mediaQuery.addEventListener("change", handleViewportChange);

    return () => {
      mediaQuery.removeEventListener("change", handleViewportChange);
    };
  }, []);
  const [Logosize, setLogosize] = useState<any>({
    sandwich: {
      with_size: 90,
      height_size: 90,
    },
    pizza: {
      with_size: 80,
      height_size: 80,
    },
    drink: {
      with_size: 70,
      height_size: 70,
    },
  });

  useEffect(() => {
    if (isMobile) {
      setLogosize({
        sandwich: {
          with_size: 70,
          height_size: 370,
        },
        pizza: {
          with_size: 60,
          height_size: 60,
        },
        drink: {
          with_size: 50,
          height_size: 50,
        },
      });
    } else {
      setLogosize({
        sandwich: {
          with_size: 90,
          height_size: 90,
        },
        pizza: {
          with_size: 80,
          height_size: 80,
        },
        drink: {
          with_size: 70,
          height_size: 70,
        },
      });
    }
  }, [isMobile]);

  return (
    <>
      <main
        className={`${main__navbar__animation} fixed z-50    duration-[1.5s]  Main_Navbar h-[5rem]   drop-shadow-2xl  mx-auto grid    grid-cols-3 justify-items-center items-center select-none `}
      >
        <div className="Main_Navbar__items __sandwich__">
          <Image
            onClick={handleClick_sandwich}
            className="drop-shadow-2xl hover:scale-150 duration-300 cursor-pointer"
            width={Logosize.sandwich.with_size}
            height={Logosize.sandwich.height_size}
            src={image_1}
            alt="notFound"
          ></Image>
        </div>
        <div className="Main_Navbar__items __pizza__ hover:scale-150 duration-300 cursor-pointer">
          <Image
            onClick={handleClick_pizza}
            className="drop-shadow-2xl"
            width={Logosize.pizza.with_size}
            height={Logosize.pizza.height_size}
            src={image_2}
            alt="notFound"
          ></Image>
        </div>

        <div className="Main_Navbar__items __drink__ mb-5">
          <Image
            onClick={handleClick_drink}
            className="drop-shadow-2xl hover:scale-150 duration-300 cursor-pointer max-[600px]:pt-3"
            width={Logosize.drink.with_size}
            height={Logosize.drink.height_size}
            src={image_3}
            alt="notFound"
          ></Image>
        </div>
      </main>
    </>
  );
};

export default Navbar;
