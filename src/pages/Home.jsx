import React from "react";
import { Link } from "react-router-dom";
import home from "./coffee.jpg";
import ProductGrid from "../components/ProductGrid";
import TeamGrid from "../components/TeamGrid";
const Home = () => {
  return (
    <div
      className="flex flex-col items-center"
    >
    <div className="flex flex-col items-center w-full  min-h-[92svh] bg-black bg-opacity-40 bg-cover max-h-[92svh]" style={{ backgroundImage: `url(${home})` }}>
    <div className="flex flex-col items-center p-10 w-full  min-h-[92svh] bg-black bg-opacity-40">

      <section class="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-40">
        <div class="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Link to="/docs"
            class="rounded-2xl bg-white px-4 py-1.5 text-sm font-medium"
          >
            Get 10% off* now!-> 
          </Link>
          <h1 class="font-heading text-slate-50 text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          Sip into Earth's essence: Love and meaning in every brew.
          </h1>
          <p class="max-w-[42rem] leading-normal text-slate-50 sm:text-xl sm:leading-8">
          Experience the soulful essence of Arth, where each sip embraces the spirit of the Earth, crafted with meaning and love
          </p>
        </div>
      </section>
    </div>
    </div>
    <section className="my-10">
    <div className="bg-slate-200 h-[0.1rem] m-10 w-screen-7xl" ></div>
    <h1 className="text-4xl text-center font-bold font-heading">Our Products</h1>
    <ProductGrid />
    <div className="bg-white h-[0.1rem] m-5 w-screen-7xl" ></div>
    <div className="bg-slate-200 h-[0.1rem] m-10 w-screen-7xl" ></div>
    <h1 className="text-4xl text-center font-bold font-heading my-6">Meet our team</h1>
    <TeamGrid />

    </section>
    </div>
  );
};
export default Home;
