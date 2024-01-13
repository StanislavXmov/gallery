import { MutableRefObject, useRef, useState } from "react";
import { useInfinityScroll } from "../hooks/useInfinityScroll";

const images = [
  '/images/1.jpg',
  '/images/2.jpg',
  '/images/3.jpg',
  '/images/4.jpg',
  '/images/5.jpg',
  '/images/6.jpg',
  '/images/7.jpg',
  '/images/8.jpg',
  '/images/9.jpg',
  '/images/10.jpg',
  '/images/11.jpg',
  '/images/12.jpg',
  '/images/13.jpg',
  '/images/14.jpg',
  '/images/15.jpg',
  '/images/16.jpg',
  '/images/17.jpg',
  '/images/18.jpg',
  '/images/19.jpg',
  '/images/20.jpg',
  '/images/21.jpg',
  '/images/22.jpg',
  '/images/23.jpg',
  '/images/24.jpg',
  '/images/25.jpg',
  '/images/26.jpg',
  '/images/27.jpg',
  '/images/28.jpg',
  '/images/29.jpg',
  '/images/30.jpg',
  '/images/31.jpg',
  '/images/32.jpg',
  '/images/33.jpg',
  '/images/34.jpg',
  '/images/35.jpg',
  '/images/36.jpg',
  '/images/37.jpg',
  '/images/38.jpg',
  '/images/39.jpg',
  '/images/40.jpg',
  '/images/41.jpg',
  '/images/42.jpg',
  '/images/43.jpg',
  '/images/44.jpg',
  '/images/45.jpg',
];

const url = '.';
// images[i]

const Works = () => {
  const [counter, setCounter] = useState(6);

  const wrapperRef = useRef() as MutableRefObject<HTMLElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  const getMore = () => {
    if (counter + 6 <= images.length) {
      setCounter(prev => prev + 6);
    } else {
      setCounter(images.length);
    }
  }

  useInfinityScroll({
    triggerRef,
    wrapperRef,
    callback: getMore,
  });

  return (
    <>
      <h2 className="aboutTitle ml-12 mb-8 text-4xl">Works</h2>
      <main ref={wrapperRef} className="border rounded-2xl py-6 overflow-y-auto h-[640px] grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-8 px-8">
        {new Array(counter).fill(null).map((_, i) => (
          <div key={i} className="flex justify-center">
            <img src={`${url}${'/test.png'}`} className="image object-cover h-96 rounded-2xl hover:scale-110 transition duration-500 cursor-pointer" />
          </div>
        ))}
        <div className="triger" ref={triggerRef} />
      </main>
    </>
  )
}

export default Works;