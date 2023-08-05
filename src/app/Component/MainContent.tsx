import { Yatra_One } from "next/font/google";
import { type } from "os";
import React from "react";

const roboto = Yatra_One({
  subsets: ["latin"],
  weight: ["400"],
});

type entryValue = {
  data: any;
};

const MainContent: React.FC<entryValue> = function (props) {
  const prop = props.data;
  const data = {
    name: prop.name,
    price: prop.price,
    about: prop.about == undefined ? "" : prop.about,
  };
  console.log(prop);
  console.log(data);

  return (
    <>
      <div className=" main__Content">
        <div className=" __Content__  mt-28 h-[20rem] w-[30rem] rounded-[60px] grid items-center justify-items-center duration-300 ">
          <div
            className={`${roboto.className} Name__Content text-yellow-300 font-bold text-4xl`}
          >
            {data.name}
          </div>
          <div className="whatis__Content text-yellow-100 p-6  text-center">
            {" "}
            {data.about}
          </div>
          <div className="price__Content text-orange-800 font-bold text-3xl">
            {`${data.price} T`}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
