import React from "react";
import { TiLeaf, TiLocation } from "react-icons/ti";
import { HiCurrencyDollar } from "react-icons/hi";
import { GrTechnology } from "react-icons/gr";
import VisibilitySensor from "react-visibility-sensor";
import { FiPackage } from "react-icons/fi";
import { Spring, animated } from "@react-spring/web";

function App() {
  return (
    <div className="bg-gray-50">
      <header>
        <nav className="fixed top-0 w-full z-10 backdrop-blur bg-white/50">
          <ul className="flex justify-between items-center h-full py-5 mx-20">
            <li className="text-emerald-900 font-bold ">Logo</li>
            <div>
              <li className="text-base font-semibold cursor-pointer inline px-3 hover:underline decoration-2 underline-offset-[6px]">
                Smart Fullfillment
              </li>
              <li className="text-base font-semibold cursor-pointer inline px-3 hover:underline decoration-2 underline-offset-[6px]">
                Delivery
              </li>
              <li className="text-base font-semibold cursor-pointer inline px-3 hover:underline decoration-2 underline-offset-[6px]">
                Company
              </li>
            </div>
            <li className="font-bold bg-black text-sm  text-gray-50 px-3 py-1 rounded">
              Contact us
            </li>
          </ul>
        </nav>
      </header>

      <body className="flex justify-center relative flex-col pt-[75px]">
        <section
          id="intro"
          className="min-h-screen mb-5 mx-5 bg-emerald-900 rounded-md flex items-center justify-center flex-col"
        >
          <h1 className="text-6xl text-gray-50 font-bold mt-40 mx-32 text-center">
            Last Mile Delivery, With Net Zero Emissions
          </h1>
          <button className="bg-gray-50 text-emerald-900 font-bold rounded px-5 py-3 mt-10 mb-16 hover:bg-slate-200">
            Contact Us
          </button>
          <div className="flex items-start justify-center relative">
            <img
              src={process.env.PUBLIC_URL + "/images/drone-delivery.jpg"}
              alt="delivery person"
              className="max-w-[80%] rounded-md"
            />
          </div>
        </section>
        <section
          id="about-us"
          className="my-5 my-40  flex items-center justify-center"
        >
          <div className="flex flex-col justify-start p-5 mr-10">
            <h1 className="font-bold text-gray-900">About Us</h1>
            <h2 className="text-5xl font-bold mt-4 mb-8">
              Changing delivery <br /> for good.
            </h2>
            <p className="max-w-[500px] text-lg">
              There’s a new standard for how people order and receive the things
              they need most. With smart end-to-end logistics and autonomous,
              instant delivery technology, we’re creating teleportation for the
              last mile delivery.
            </p>
          </div>
          <img
            className="max-w-[40%] rounded"
            src={process.env.PUBLIC_URL + "/images/drone.jpg"}
            alt="leaf"
          />
        </section>
        <section
          id="how-it-works"
          className="min-h-screen bg-slate-600 flex-col text-black"
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
                title="Package delivered to our warehouse"
                description="Packages will be delivered to our fulfillment center around the urban areas by our delivery partners."
              />
              {/* <div className="w-[1px] h-[400px] bg-white" />
              <InfoCard
                step={2}
                title="Packages loading onto our fleet"
                description="Packages will be loaded onto our fleet of drones or E-bikes ready for dispatch."
              /> */}
              <div className="w-[1px] h-[400px] bg-white" />
              <InfoCard
                step={2}
                title="Packages on route to your door step"
                description="Drone or E-bike will be dispatched to the customer's address."
              />
              <div className="w-[1px] h-[400px] bg-white" />
              <InfoCard
                step={3}
                title="Delivered!"
                description="Package will be delivered to the customer's address."
              />
              <div className="w-[1px] h-[200px] bg-white" />
              <div className="w-5 h-[1px] bg-white" />
            </div>
            <div>
              <div className="flex justify-center items-center pt-60">
                <article className="flex items-center">
                  <SmallCard
                    className="absolute translate-x-[300px] translate-y-[150px]"
                    textOne="Packages received"
                    textTwo={1000}
                  />
                  <Card
                    className="-translate-x-5 translate-y-5 bg-teal-600 text-white"
                    textOne="Number of packages received per day"
                    textTwo={1000}
                  />
                  <ImageCard className="" src="/images/unload.jpg" />
                </article>
              </div>
              {/* <div className="flex justify-center items-center pt-80">
                <article className="flex items-center">
                  <ImageCard className="" />
                  <SmallCard
                    className="absolute  translate-y-[150px]"
                    textOne="Fleet count"
                    textTwo="50"
                  />
                  <Card
                    className="-translate-x-5 -translate-y-10 text-white bg-green-900"
                    textOne="Number of drones/E-bikes dispatched per run"
                    textTwo="50"
                  />
                </article>
              </div> */}
              <div className="flex justify-center items-center pt-80">
                <article className="flex items-center">
                  <SmallCard
                    className="absolute translate-x-[300px] translate-y-[150px] "
                    textOne="Fleet count"
                    textTwo="50"
                  />
                  <Card
                    className="-translate-x-5 translate-y-5 bg-cyan-800 text-white"
                    textOne="Number of drones/E-bikes dispatched per run"
                    textTwo="50"
                  />
                  <ImageCard className="" src="/images/drone-delivery.jpg" />
                </article>
              </div>
              <div className="flex justify-center items-center py-80">
                <article className="flex items-center">
                  <ImageCard src="/images/deliverypackage.jpg" />
                  <SmallCard
                    className="absolute  translate-y-[180px]"
                    textOne="Fewer carbon emissions"
                    textTwo="97% less"
                  />
                  <Card
                    className="-translate-x-5 -translate-y-10 bg-emerald-600 text-white"
                    textOne="Fewer carbon emissions"
                    textTwo="97% less"
                  />
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="my-20">
          <h1 className="text-6xl font-bold text-center mb-5">Our Impact</h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
          <ul className="m-20 mx-40">
            <li className="flex justify-between border-t py-14 items-center">
              <h2 className="text-2xl font-bold text-8xl">4.2 tons</h2>
              <div className="max-w-[500px]">
                <h3 className="font-semibold">
                  Carbon emissions avoided per year
                </h3>
                <p>
                  Preliminary results from a trial done in Columbia show that up
                  to 4.2 tons of emissions could be avoided per year by using
                  cargo e-bikes for last mile deliveries.
                </p>
              </div>
            </li>
            <li className="flex justify-between border-t py-14 items-center">
              <h2 className="text-2xl font-bold text-8xl">84%</h2>
              <div className="max-w-[500px]">
                <h3 className="font-semibold">
                  Greenhouse-gas emissions reduced
                </h3>
                <p>
                  Studies show that greenhouse-gas emissions per parcel are 84%
                  lower for drones than for diesel trucks.
                </p>
              </div>
            </li>
            <li className="flex justify-between border-t py-14 items-center">
              <h2 className="text-2xl font-bold text-8xl">70%</h2>
              <div className="max-w-[500px]">
                <h3 className="font-semibold">
                  Usage of drones reduce maintainance cost of vans
                </h3>
                <p>
                  A study indicates that the usage of drones could reduce the
                  maintainance and labour overhead of vans by 70%.
                </p>
              </div>
            </li>
          </ul>
        </section>
        <section id="about">
          <div className="flex items-center justify-center w-[1150px] m-auto mt-10 pt-20">
            <h1 className="text-5xl font-bold text-center mb-10 ml-12">
              Elevate your delivery experience.
            </h1>
          </div>
          <div className="flex items-center justify-center w-[1150px] m-auto mb-20">
            <div className="flex w-2/3 flex-col m-5 ml-12 pr-12">
              <VisibilitySensor partialVisibility>
                {({ isVisible }) => (
                  <Spring
                    delay={200}
                    to={{
                      transform: isVisible
                        ? "translateY(0)"
                        : "translateY(-50px)",
                      opacity: isVisible ? 1 : 0,
                    }}
                  >
                    {({ transform, opacity }) => (
                      <animated.div
                        style={{
                          transform,
                          opacity,
                        }}
                      >
                        <div className="flex items-center mb-1">
                          <HiCurrencyDollar className="mr-1 text-xl text-slate-600" />
                          <h2 className="text-lg font-semibold">
                            Reduce Delivery Costs
                          </h2>
                        </div>
                        <p className="mb-8">
                          <div className="mb-2">
                            The last mile is the most inefficient and costly
                            part of the delivery chain.
                          </div>{" "}
                          Reducing the time spent in traffic and finding parking
                          helps bring down costs.
                        </p>
                      </animated.div>
                    )}
                  </Spring>
                )}
              </VisibilitySensor>
              <VisibilitySensor partialVisibility>
                {({ isVisible }) => (
                  <Spring
                    delay={200}
                    to={{
                      transform: isVisible
                        ? "translateY(0)"
                        : "translateY(-50px)",
                      opacity: isVisible ? 1 : 0,
                    }}
                  >
                    {({ transform, opacity }) => (
                      <animated.div
                        style={{
                          transform,
                          opacity,
                        }}
                      >
                        <div className="flex items-center mb-1">
                          <TiLeaf className="mr-1 text-xl text-emerald-900" />
                          <h2 className="text-lg font-semibold">
                            Decarbonize the Last Mile
                          </h2>
                        </div>
                        <p className="mb-8">
                          <div className="mb-2">
                            Help us work towards a net zero future in a
                            cost-effective, sustainable way.
                          </div>{" "}
                          Let us handle the last mile to reduce your carbon
                          footprint and enhance your brand reputation.
                        </p>
                      </animated.div>
                    )}
                  </Spring>
                )}
              </VisibilitySensor>
              <VisibilitySensor partialVisibility>
                {({ isVisible }) => (
                  <Spring
                    delay={200}
                    to={{
                      transform: isVisible
                        ? "translateY(0)"
                        : "translateY(-50px)",
                      opacity: isVisible ? 1 : 0,
                    }}
                  >
                    {({ transform, opacity }) => (
                      <animated.div
                        style={{
                          transform,
                          opacity,
                        }}
                      >
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
                          Take advantage of the opportunity to achieve faster
                          and safer deliveries.
                        </p>
                      </animated.div>
                    )}
                  </Spring>
                )}
              </VisibilitySensor>
              <VisibilitySensor partialVisibility>
                {({ isVisible }) => (
                  <Spring
                    delay={200}
                    to={{
                      transform: isVisible
                        ? "translateY(0)"
                        : "translateY(-50px)",
                      opacity: isVisible ? 1 : 0,
                    }}
                  >
                    {({ transform, opacity }) => (
                      <animated.div
                        style={{
                          transform,
                          opacity,
                        }}
                      >
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
                          With advanced tracking systems, you can trust us to
                          handle your packages with care and precision.
                        </p>
                      </animated.div>
                    )}
                  </Spring>
                )}
              </VisibilitySensor>
            </div>
            <img
              src={require("./image.png")}
              className="ml-5"
              style={{ height: "560px" }}
              alt="drone"
            ></img>
          </div>
        </section>
        <section
          id="map"
          className="flex justify-center pb-20 mx-20 items-center"
        >
          <video autoPlay loop muted className="rounded max-w-[60%]">
            <source src={process.env.PUBLIC_URL + "/images/map.mp4"} />
          </video>
          <div className="ml-10 min-w-[500px]">
            <h1 className="text-4xl font-bold">
              Same distance, Smaller footprint
            </h1>
            <p className="mt-5 text-xl">
              This network of hyper local fullfillment center is the future of
              sustainable last mile delivery bringing inventory closer to the
              end customer.
            </p>
          </div>
        </section>
      </body>

      <footer class="bg-white dark:bg-gray-900">
        <div class="mx-auto w-full max-w-screen-xl">
          <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Company
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="#" class=" hover:underline">
                    About
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Careers
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Brand Center
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Help center
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Discord Server
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Twitter
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Facebook
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Licensing
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Quick Links
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Home
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Smart Fullfillment
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Technology
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
            <span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
              © 2023 Logo. All Rights Reserved.
            </span>
            <div class="flex mt-4 space-x-6 sm:justify-center md:mt-0">
              <a
                href="#"
                class="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Facebook page</span>
              </a>
              <a
                href="#"
                class="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Instagram page</span>
              </a>
              <a
                href="#"
                class="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
                <span class="sr-only">Twitter page</span>
              </a>
              <a
                href="#"
                class="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">GitHub account</span>
              </a>
              <a
                href="#"
                class="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Dribbble account</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

const Card = ({ className, textOne, textTwo }) => {
  return (
    <VisibilitySensor partialVisibility>
      {({ isVisible }) => (
        <Spring
          delay={200}
          to={{
            transform: isVisible ? "translateY(0)" : "translateY(-50px)",
            opacity: isVisible ? 1 : 0,
          }}
        >
          {({ transform, opacity }) => (
            <animated.div
              className={
                "w-[400px] top-[150px] left-[380px] bg-green-500 rounded h-[200px] p-5 flex flex-col justify-between " +
                className
              }
              style={{
                opacity,
              }}
            >
              <h1 className="font-semibold">{textOne || "Items Received"}</h1>
              <p className="font-bold text-5xl">{textTwo || "100"}</p>
            </animated.div>
          )}
        </Spring>
      )}
    </VisibilitySensor>
  );
};

const SmallCard = ({ className, textOne, textTwo, icon }) => {
  return (
    <VisibilitySensor partialVisibility>
      {({ isVisible }) => (
        <Spring
          delay={200}
          to={{
            transform: isVisible ? "translateY(0)" : "translateY(-50px)",
            opacity: isVisible ? 1 : 0,
          }}
        >
          {({ transform, opacity }) => (
            <animated.div
              className={
                "bg-gray-50 w-[400px] rounded px-5 py-2 mb-4 flex justify-between items-center text-black " +
                className
              }
              style={{
                opacity,
              }}
            >
              <div>
                <h1 className="text-sm">{textOne || "Items Received"}</h1>
                <p className="font-bold text-xs">{textTwo || "100"}</p>
              </div>
              {icon || <FiPackage />}
            </animated.div>
          )}
        </Spring>
      )}
    </VisibilitySensor>
  );
};
const ImageCard = ({ className, src }) => {
  return (
    <VisibilitySensor partialVisibility>
      {({ isVisible }) => (
        <Spring
          delay={200}
          to={{
            transform: isVisible ? "translateY(0)" : "translateY(-50px)",
            opacity: isVisible ? 1 : 0,
          }}
        >
          {({ transform, opacity }) => (
            <animated.img
              src={
                src
                  ? process.env.PUBLIC_URL + src
                  : process.env.PUBLIC_URL + "/images/delivery-man.jpg"
              }
              className={" rounded  w-[400px] " + className}
              alt="test"
              style={{
                opacity,
              }}
            />
          )}
        </Spring>
      )}
    </VisibilitySensor>
  );
};

const InfoCard = ({ className, step, title, description }) => {
  return (
    <VisibilitySensor partialVisibility>
      {({ isVisible }) => (
        <Spring
          delay={200}
          to={{
            transform: isVisible ? "translateY(0)" : "translateY(-50px)",
            opacity: isVisible ? 1 : 0,
          }}
        >
          {({ transform, opacity }) => (
            <animated.article
              style={{
                transform,
                opacity,
              }}
              className="max-w-[400px] text-lg text-white  p-2 rounded"
            >
              <h1 className="font-bold ">STEP {step}</h1>
              <h2 className=" font-semibold pt-3 pb-1">{title}</h2>
              <p className="">{description}</p>
            </animated.article>
          )}
        </Spring>
      )}
    </VisibilitySensor>
  );
};
