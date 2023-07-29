import { Yatra_One } from "next/font/google";

const roboto = Yatra_One({
  subsets: ["latin"],
  weight: ["400"],
});

export default function MainContent() {
  return (
    <>
      <div className=" main__Content">
        <div className=" __Content__  mt-28 h-[20rem] w-[30rem] rounded-[60px] grid items-center justify-items-center duration-300 ">
          <div
            className={`${roboto.className} Name__Content text-yellow-300 font-bold text-4xl`}
          >
            Name
          </div>
          <div className="whatis__Content text-yellow-100 p-6  text-center">
            {" "}
            about bla bla fsdfdsfsfsfsaoifjsoifsafijsaoifbla bla bla bla bla bla
            bla bla bla bla bla bla
          </div>
          <div className="price__Content text-orange-800 font-bold text-3xl">
            220 T
          </div>
        </div>
      </div>
    </>
  );
}
