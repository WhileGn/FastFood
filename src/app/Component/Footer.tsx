import { useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "usehooks-ts";

const Footer: React.FC = function () {
  const [render_0, setrender_0] = useState(false);

  const ref_0 = useRef<HTMLDivElement | null>(null);
  const entry_0 = useIntersectionObserver(ref_0, {});
  const isVisible_0 = !!entry_0?.isIntersecting;

  useEffect(() => {
    if (!isVisible_0) {
      setrender_0(false);
    } else if (isVisible_0) {
      setrender_0(true);
    }
  }, [isVisible_0]);
  return (
    <>
      <div
        ref={ref_0}
        className="Main__foter bg-black  border-t-[20px] border-solid  border-red-50"
      >
        <div className="Footer w-[100%] h-[60vh]   grid justify-center text-center items-center">
          <div className="text-white text-5xl drop-shadow-2xl font-bold max-[600px]:text-2xl">
            address : 1609 Elk Creek Road
          </div>
          <div className="text-white text-5xl font-bold max-[600px]:text-2xl">
            number : +770-462-4257
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
