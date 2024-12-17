"use client";
import React from "react";
import Reveal from "@/lib/Reveal";

function About({AboutRef}) {
  return (
    <section ref={AboutRef} className="flex flex-col items-center text-white gap-y-4 overflow-x-hidden ">
      <Reveal>
        <h1 className="text-4xl font-extrabold">
          About Me<span className="text-blue-400">.</span>
        </h1>
      </Reveal>

      <div className="w-[60vw] flex flex-col gap-y-5 text-xl text-slate-400 max-md:text-lg max-md:w-[80vw]">
        <Reveal>
          <p className="max-sm:text-center">
            Hey! I'm <span className="text-blue-400">Pradeep Yadav</span>, and I
            live in Delhi, India. I am currently a 1st year college student pursuing a
            Bachelor's degree in Computer Science with a specialization in
            Artificial Intelligence (<span className="text-blue-400">CSAI</span>
            ) at Netaji Subhas University of Technology(
            <span className="text-blue-400">NSUT</span>).
          </p>
        </Reveal>
        <Reveal>
          <p className="max-sm:text-center">
            Currently, I am a member of the Google Developer Students Club (
            <span className="text-blue-400">GDSC</span>) NSUT Web Development
            Department and a tech team member at the Innovation and Incubation
            Foundation (<span className="text-blue-400">IIF</span>) NSUT.
            Alongside this, I have also started my DSA journey and have a strong
            interest in AI/ML and Blockchain.
          </p>
        </Reveal>
        <Reveal>
          <p className="max-sm:text-center">
            Other than coding and studying, I love playing chess, Smash Karts,
            and watching thriller and comedy movies.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default About;
