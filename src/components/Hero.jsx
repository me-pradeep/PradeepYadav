"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Reveal from "@/lib/Reveal";
import Socials from "./Socials";

function Hero({HeroRef}) {
  return (
    <motion.main ref={HeroRef} className="w-screen flex justify-around items-center overflow-x-hidden max-md:flex-col gap-y-8">
      <div className="w-[50vw] text-white flex flex-col gap-y-3 justify-center max-md:w-[70vw] max-md:gap-y-1">
        <Reveal>
          <div className="text-7xl font-extrabold pb-3 max-xl:text-6xl max-s1:text-5xl max-s2:text-4xl max-sm:text-3xl">
            Hey, I'm <span className="text-blue-400">Pradeep.</span>
          </div>
        </Reveal>

        <Reveal>
          <div className="text-4xl pb-2 max-s1:text-3xl max-sm:text-lg">
            I'm a{" "}
            <span className="font-bold text-blue-400">
              Full Stack Developer
            </span>
          </div>
        </Reveal>

        <Reveal>
          <div className="w-[40vw] text-lg max-s1:text-sm max-md:w-[65vw]">
            I started learning web development in 2024 and have come a long way
            in it. Nowadays, I am working on new projects and exploring new
            technologies to enhance my skills. Let's connect!
          </div>
        </Reveal>
        <Socials/>
      </div>

      <motion.div
        initial={{ x: 500 }}
        animate={{ x: 0 }}
        transition={{ duration: 2, type: "spring", stiffness: 100 }}
        style={{ height: "fit-content" }}
        className="bg-gradient-to-r from-transparent to-blue-900 rounded-full"
      >
        <Image
          src="/mypic-removebg.png"
          height={350}
          width={350}
          alt="mypic"
          className="opacity-70 rounded-full max-xl:w-72 max-s1:w-60"
        />
      </motion.div>
    </motion.main>
  );
}

export default Hero;
