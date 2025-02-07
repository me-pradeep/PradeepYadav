"use client";
import React from "react";
import Reveal from "@/lib/Reveal";
import Image from "next/image";
import { CgArrowTopRight } from "react-icons/cg";
import AnimateUp from "@/lib/AnimateUp";

function Projects({ProjectRef}) {
  return (
    <section ref={ProjectRef} className="flex flex-col items-center text-white gap-y-4 overflow-hidden">
      <Reveal>
        <h1 className="text-4xl font-extrabold pb-1">
          Projects<span className="text-blue-400">.</span>
        </h1>
      </Reveal>

      <div className="flex flex-wrap gap-14 justify-center">
        {[
          {
            src: "/secrate.png",
            alt: "SECRATE",
            title: "Secrate- Rate People Anonymously",
            link: "https://secrate.me/",
            techStack: [
              "/tailwind.svg",
              "/nextjs.svg",
              "/mongodb.svg",
              "/nodejs.svg",
              "/express-js.png"
            ],
          },
          {
            src: "/sutriz.png",
            alt: "SUTRIZ",
            title: "Sutriz- Formulae Revision App",
            link: "https://mysutriz.firebaseapp.com/",
            techStack: [
              "/css.svg",
              "/react.svg",
              "/firebase.svg",
              "/mathjax.png",
            ],
          },
          {
            src: "/iif-nsut.png",
            alt: "IIF-NSUT",
            title: "IIF NSUT- Landing Page",
            link: "https://iif-nsut.onrender.com/",
            techStack: [
              "/tailwind.svg",
              "/react.svg",
              "/nodejs.svg",
              "/express-js.png",
              "/mongodb.svg",
            ],
          },
          {
            src: "/randomnumber.png",
            alt: "randomnumber",
            title: "Random Number Dashboard",
            link: "https://random-num-rust.vercel.app/",
            techStack: ["/tailwind.svg", "/react.svg", "/chartjs.png"],
          },
          {
            src: "/currencyexchanger.png",
            alt: "currencyexchanger",
            title: "Currency Exchanger",
            link: "https://krspra.github.io/currencyExchanger/",
            techStack: ["/html.png", "/css.svg", "/javascript.svg"],
          },
          {
            src: "/spsgame.png",
            alt: "spsgame",
            title: "Rock Paper Scissor- Game",
            link: "https://krspra.github.io/RockPaperScissor/",
            techStack: ["/html.png", "/css.svg", "/javascript.svg"],
          },
        ].map(({ src, alt, title, link, techStack }, index) => (
          <AnimateUp key={index}>
            <div
              className="flex flex-col border-slate-800 border-[1px] rounded-xl bg-gradient-to-br from-blue-950 to-black p-7 overflow-x-hidden"
            >
              <div className="h-60 w-[450px] max-sm:h-40 max-sm:w-[270px] overflow-hidden rounded-3xl flex items-center justify-center bg-gradient-to-bl from-black bg-blue-800">
                <Image
                  src={src}
                  height={400}
                  width={400}
                  alt={alt}
                  className="rotate-[2deg] h-[105%] w-[90%]"
                />
              </div>
              <div>
                <div className="font-bold text-xl text-slate-400 pt-3">
                  {title}
                </div>
                <div className=" flex justify-between py-4">
                  <div className="flex flex-nowrap flex-shrink-0 gap-[2px]">
                    {techStack.map((value, index) => (
                      <Image
                        key={index}
                        src={value}
                        height={25}
                        width={25}
                        alt="techStack"
                        className="bg-white rounded-full border-[1px] border-black"
                      />
                    ))}
                  </div>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="float-right font-semibold text-slate-400 flex items-center"
                  >
                    Check Live Site <CgArrowTopRight className="text-2xl" />
                  </a>
                </div>
              </div>
            </div>
          </AnimateUp>
        ))}
      </div>
    </section>
  );
}

export default Projects;
