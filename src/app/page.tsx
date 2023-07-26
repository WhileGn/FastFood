import Mains from "./Component/Main";
import Firstview from "./Component/Firstview";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Firstview></Firstview>
      <Mains></Mains>
    </>
  );
}
