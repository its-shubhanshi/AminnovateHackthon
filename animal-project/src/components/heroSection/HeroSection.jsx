import { Button, Typography } from "@material-tailwind/react";
import React, { useContext } from "react";
import myContext from "../../context/data/myContext";
import { Link } from "react-router-dom";
import BG from "../../assets/bg.jpg";

function HeroSection() {
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <section
      style={{ background: mode === "dark" ? "rgb(30, 41, 59)" : "#09311b" }}
    >
      {/* Hero Section  */}
      <div className="container mx-auto flex px-5 py-20 items-center justify-center flex-col">
        {/* Main Content  */}
        <main>
          <div className="text-center">
            <img
              src={BG}
              alt="bg"
                className="relative opacity-7"
            />
            <div className="mb-2 absolute top-3/4 left-1/4">
              {/* Text  */}
              <h1 className=" text-8xl text-pink-700 font-bold">ANIMALIA</h1>
            </div>

            {/* Paragraph  */}
            <p
              style={{ color: mode === "dark" ? "white" : "white" }}
              className="sm:text-3xl text-xl font-extralight sm:mx-auto m-5"
            >
              Discover, Appreciate, & Understand the Animal World!
            </p>
            <Button className="m-9">
              <Link to="/">
                See All Animals
              </Link>
            </Button>
          </div>
        </main>
      </div>
    </section>
  );
}

export default HeroSection;
