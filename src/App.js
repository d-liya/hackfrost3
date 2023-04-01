import React from "react";
import { useScroll, useSpring, animated } from "@react-spring/web";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { TiLeaf, TiLocation } from "react-icons/ti";
import { HiCurrencyDollar } from "react-icons/hi";
import { GrTechnology } from "react-icons/gr";

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
              <li className="text-base inline px-3 hover:underline decoration-2 underline-offset-[6px]">
                Text1
              </li>
              <li className="text-base inline px-3 hover:underline decoration-2 underline-offset-[6px]">
                Text2
              </li>
              <li className="text-base inline px-3 hover:underline decoration-2 underline-offset-[6px]">
                Text3
              </li>
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
        <section id="about">
          <div className="flex items-center justify-left w-[1150px] m-auto">
            <h1 className="text-4xl font-bold text-center mb-2 ml-12">
              Elevate your delivery experience.
            </h1>
          </div>
          <div className="flex items-center justify-center w-[1150px] m-auto mb-10">
            <div className="flex w-2/3 flex-col m-5 ml-12 pr-12">
              <div>
                <div className="flex items-center mb-1">
                  <HiCurrencyDollar className="mr-1 text-xl text-slate-600" />
                  <h2 className="text-lg font-semibold">
                    Reduce Delivery Costs
                  </h2>
                </div>
                <p className="mb-8">
                  <div className="mb-2">
                    The last mile is the most inefficient and costly part of the
                    delivery chain.
                  </div>{" "}
                  Reducing the time spent in traffic and finding parking helps
                  bring down costs.
                </p>
              </div>
              <div>
                <div className="flex items-center mb-1">
                  <TiLeaf className="mr-1 text-xl text-emerald-900" />
                  <h2 className="text-lg font-semibold">
                    Decarbonize the Last Mile
                  </h2>
                </div>
                <p className="mb-8">
                  <div className="mb-2">
                    Help us work towards a net zero future in a cost-effective,
                    sustainable way.
                  </div>{" "}
                  Let us handle the last mile to reduce your carbon footprint
                  and enhance your brand reputation.
                </p>
              </div>
              <div>
                <div className="flex items-center mb-1">
                  <GrTechnology className="mr-1 text-xl" />
                  <h2 className="text-lg font-semibold">
                    Leverage Emerging Technology
                  </h2>
                </div>
                <p className="mb-8">
                  <div className="mb-2">
                    Cutting-edge drones and electric vehicles are
                    revolutionizing package delivery.
                  </div>{" "}
                  Take advantage of the opportunity to achieve faster and safer
                  deliveries.
                </p>
              </div>
              <div>
                <div className="flex items-center mb-1">
                  <TiLocation className="mr-1 text-xl text-red-800" />
                  <h2 className="text-lg font-semibold">
                    Reliable Delivery Management
                  </h2>
                </div>
                <p>
                  <div className="mb-2">
                    We are committed to providing reliable and on-time
                    deliveries.
                  </div>{" "}
                  With advanced tracking systems, you can trust us to handle
                  your packages with care and precision.
                </p>
              </div>
            </div>
            <img
              src={require("./image.png")}
              className="ml-5"
              style={{ height: "560px" }}
            ></img>
          </div>
        </section>
        <section id="map"></section>
      </body>
    </div>
  );
}

export default App;
