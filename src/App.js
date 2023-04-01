import React from "react";
import { useScroll, useSpring, animated } from "@react-spring/web";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  const introSpring = useSpring({});
  const { scrollYProgress } = useScroll();
  return (
    <div className="bg-gray-50">
      <header>
        <nav className="fixed top-0 w-full z-10 backdrop-blur bg-white/50">
          <ul className="flex justify-between items-center h-full py-5 mx-20">
            <li className="text-emerald-900 font-bold ">Logo</li>
            <div>
            <li className="text-base inline px-3 hover:underline decoration-2 underline-offset-[6px]">Text1</li>
            <li className="text-base inline px-3 hover:underline decoration-2 underline-offset-[6px]">Text2</li>
            <li className="text-base inline px-3 hover:underline decoration-2 underline-offset-[6px]">Text3</li>
            </div>
            <li className="font-bold bg-black text-sm  text-gray-50 px-3 py-1">
              Contact us
            </li>
          </ul>
        </nav>
      </header>
      {/* <Parallax pages={1} style={{ top: "0", left: "0" }}>
        <ParallaxLayer offset={0} speed={2.5}>
          <p>Parallax</p>
        </ParallaxLayer>
      </Parallax> */}
      <body className="flex justify-center relative flex-col">
        <section
          id="intro"
          className="min-h-screen mb-5 mx-5 bg-emerald-900 rounded-lg flex items-center justify-center flex-col"
        >
          <h1 className="text-6xl text-gray-50 font-bold mt-40 mx-32 text-center">
            Last Mile Delivery, With Zero Emissions
          </h1>
          <button className="bg-gray-50 text-emerald-900 font-bold rounded px-5 py-3 mt-10 mb-16 hover:bg-slate-200">
            Contact Us
          </button>
          <img
            src={process.env.PUBLIC_URL + "/images/delivery-man.jpg"}
            alt="delivery person"
            className="max-w-[80%] rounded-md"
          />
        </section>
        <section id="about" className="my-5">
          <h1 className="text-4xl font-bold text-center mb-5">Our Impact</h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
          <ul className="m-20">
            <li className="flex justify-between border-t py-14 items-center">
              <h2 className="text-2xl font-bold text-8xl">80% </h2>
              <div className="">
                <h3 className="font-semibold">Drone Delivery</h3>
                <p>
                  Reduces carbon emissions by 80% compared to traditional
                  delivery.
                </p>
              </div>
            </li>
            <li className="flex justify-between border-t py-14 items-center">
              <h2 className="text-2xl font-bold text-8xl">1000 $</h2>
              <div className="">
                <h3 className="font-semibold">Save money</h3>
                <p>
                  Reduces carbon emissions by 20% compared to traditional
                  delivery.
                </p>
              </div>
            </li>
            <li className="flex justify-between border-t py-14 items-center">
              <h2 className="text-2xl font-bold text-8xl">20% </h2>
              <div className="">
                <h3 className="font-semibold">E-bike Delivery</h3>
                <p>
                  Reduces carbon emissions by 20% compared to traditional
                  delivery.
                </p>
              </div>
            </li>
          </ul>
        </section>
        <section id="stats"></section>
        <section id="how-it-works"></section>
        <section id="map"></section>
      </body>
    </div>
  );
}

export default App;
