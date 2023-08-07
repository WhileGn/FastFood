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
      <div className=" God__content">
        <div className=" main__Content">
          <div
            className=" __Content__   
           mb-28 h-[20rem] p-4 w-[30rem] rounded-[60px] 
           grid items-center justify-items-center duration-300  
           mx-auto    max-[600px]:h-[10rem]  
            max-[600px]:w-[20rem] "
          >
            <div
              className={`${roboto.className} Name__Content
               text-yellow-300 font-bold text-4xl max-[600px]:text-xl`}
            >
              {data.name}
            </div>
            <div className="whatis__Content text-yellow-100 p-6  text-center max-[600px]:text-sm">
              {" "}
              {data.about}
            </div>
            <div className="price__Content text-orange-800 font-bold text-3xl max-[600px]:text-xl">
              {`${data.price} T`}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
