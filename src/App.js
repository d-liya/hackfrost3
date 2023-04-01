import React from "react";
import deliveryMan from "./images/delivery-man.jpg";

function App() {
  return (
    <div className="bg-gray-50 min-w-screen min-h-screen">
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
      <body className="pt-[68px] pt flex justify-center flex-col">
        <section
          id="intro"
          className="min-h-screen mb-5 mx-5 bg-emerald-900 rounded-lg flex items-center justify-center flex-col"
        >
          <h1 className="text-6xl text-gray-50 font-bold mt-40 mx-32 text-center">
            Last Mile Delivery, With Zero Emissions
          </h1>
          <button className="bg-gray-50 text-emerald-900 font-bold rounded px-5 py-3 mt-10 mb-16 hover:bg-slate-100">
            Contact Us
          </button>
          <img
            src={deliveryMan}
            alt="delivery person"
            className="max-w-[80%] rounded-md"
          />
        </section>
        <section id="about" className="my-5 pt-40">
          <h1 className="text-4xl  font-bold text-center">Our Impact</h1>
          <div></div>
        </section>
        <section id="stats"></section>
        <section id="how-it-works"></section>
        <section id="map"></section>
      </body>
    </div>
  );
}

export default App;
