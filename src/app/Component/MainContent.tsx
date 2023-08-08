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
      <div className=" God__content Main__div__content__child">
        <div className=" main__Content shadow-[0px_0px_20px_10px_black] rounded-[60px]  max-[600px]:w-[20rem] m-auto   ">
          <div
            className=" __Content__   
            shadow-[0px_0px_30px_10px_black_inset]
            
           mb-28 h-[20rem] p-4 w-[30rem] rounded-[60px] 
           grid items-center justify-items-center duration-500  
           mx-auto    max-[600px]:h-[14rem]  
            
            max-[600px]:w-[20rem] border-solid border-[8px] hover:border-[13px] border-[#FFEAEE]  hover:border-t-[#3F2E56] hover:border-b-[#0075F2]
            hover:border-l-[#00F2F2] hover:border-r-[#9775fa] bg-gradient-to-tr from-[#0075f257] to-[#7f675b2d] hover:bg-[#453f783e] backdrop-blur-md "
          >
            <div
              className={`${roboto.className} Name__Content
               text-yellow-300 font-bold text-4xl max-[600px]:text-xl`}
            >
              {data.name}
            </div>
            <div className="whatis__Content text-[#FAF2A1] p-6  text-center max-[600px]:text-sm">
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
