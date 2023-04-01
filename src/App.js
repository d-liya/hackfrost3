import React from "react";
import { useScroll, useSpring, animated } from "@react-spring/web";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import useOnScreen from "./hooks/useOnScreen";
import { FiPackage } from "react-icons/fi";

function App() {
  const howItWorksRef = React.useRef();

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
        <section
          id="how-it-works"
          className="min-h-screen rounded-lg bg-indigo-500 flex-col text-black"
        >
          <h1 className="text-center font-semibold pt-20 text-gray-50">
            HOW IT WORKS
          </h1>
          <h2 className="text-center text-6xl font-bold py-5 pb-40 text-gray-50 mx-40">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </h2>
          <div className="flex justify-center">
            <div id="line" className="items-center flex flex-col">
              <div className="w-5 h-[1px] bg-white" />
              <div className="w-[1px] h-[100px] bg-white" />
              <InfoCard
                step={1}
                title=" Order is received and retrieved"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum
        dolor sit amet consectetur adipisicing elit"
              />
              <div className="w-[1px] h-[400px] bg-white" />
              <InfoCard
                step={2}
                title=" Order is received and retrieved"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum
        dolor sit amet consectetur adipisicing elit"
              />
              <div className="w-[1px] h-[400px] bg-white" />
              <InfoCard
                step={3}
                title=" Order is received and retrieved"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum
        dolor sit amet consectetur adipisicing elit"
              />
              <div className="w-[1px] h-[300px] bg-white" />
              <InfoCard
                step={4}
                title=" Order is received and retrieved"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum
        dolor sit amet consectetur adipisicing elit"
              />
              <div className="w-[1px] h-[200px] bg-white" />
              <div className="w-5 h-[1px] bg-white" />
            </div>
            <div>
              <div className="flex justify-center items-center pt-60">
                <article className="flex items-center">
                  <SmallCard className="absolute translate-x-[300px] translate-y-[150px]" />
                  <Card className="-translate-x-5 translate-y-5 bg-teal-600 text-white" />
                  <ImageCard className="" />
                </article>
              </div>
              <div className="flex justify-center items-center pt-80">
                <article className="flex items-center">
                  <ImageCard className="" />
                  <SmallCard className="absolute  translate-y-[150px]" />
                  <Card className="-translate-x-5 -translate-y-10" />
                </article>
              </div>
              <div className="flex justify-center items-center pt-80">
                <article className="flex items-center">
                  <SmallCard className="absolute translate-x-[300px] translate-y-[150px] " />
                  <Card className="-translate-x-5 translate-y-5 bg-emerald-800 text-white" />
                  <ImageCard className="" />
                </article>
              </div>
              <div className="flex justify-center items-center py-80">
                <article className="flex items-center">
                  <ImageCard className="" />
                  <SmallCard className="absolute  translate-y-[150px]" />
                  <Card className="-translate-x-5 -translate-y-10 bg-cyan-600 text-white" />
                </article>
              </div>
            </div>
          </div>
        </section>
        <section id="map"></section>
      </body>
    </div>
  );
}

export default App;

const Card = ({ className, textOne, textTwo }) => {
  return (
    <div
      className={
        "w-[400px] top-[150px] left-[380px] bg-green-500 rounded h-[200px] p-5 flex flex-col justify-between " +
        className
      }
    >
      <h1 className="font-semibold">{textOne || "Items Received"}</h1>
      <p className="font-bold text-5xl">{textTwo || "100"}</p>
    </div>
  );
};

const SmallCard = ({ className }) => {
  return (
    <div
      className={
        "bg-gray-50 w-[400px] rounded px-5 py-2 mb-4 flex justify-between items-center text-black " +
        className
      }
    >
      <div>
        <h1 className="text-sm">Items Received</h1>
        <p className="font-bold text-xs">100</p>
      </div>
      <FiPackage />
    </div>
  );
};
const ImageCard = ({ className }) => {
  return (
    <img
      src={process.env.PUBLIC_URL + "/images/delivery-man.jpg"}
      className={" rounded  w-[400px] " + className}
      alt="test"
    />
  );
};

const InfoCard = ({ className, step, title, description }) => {
  return (
    <article className="max-w-[400px] text-lg text-white  p-2 rounded">
      <h1 className="font-bold ">STEP {step}</h1>
      <h2 className=" font-semibold pt-3 pb-1">{title}</h2>
      <p className="">{description}</p>
    </article>
  );
};
