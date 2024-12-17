"use client";

import React from "react";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import About from "@/components/About";
import Skill from "@/components/Skill";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { useRef } from "react";

function Page() {
  const HeroRef = useRef(null);
  const scrollToHero = () => {
    HeroRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const AboutRef = useRef(null);
  const scrollToAbout = () => {
    AboutRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const SkillRef = useRef(null);
  const scrollToSkill = () => {
    SkillRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const ProjectRef = useRef(null);
  const scrollToProject = () => {
    ProjectRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const ContactRef = useRef(null);
  const scrollToContact = () => {
    ContactRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Header
        scrollToHero={scrollToHero}
        scrollToAbout={scrollToAbout}
        scrollToSkill={scrollToSkill}
        scrollToProject={scrollToProject}
        scrollToContact={scrollToContact}
      />
      <div className="flex flex-col gap-y-24 overflow-x-hidden">
        <Hero HeroRef={HeroRef} />
        <About AboutRef={AboutRef} />
        <Skill SkillRef={SkillRef}/>
        <Projects ProjectRef={ProjectRef}/>
        <Contact ContactRef={ContactRef}/>
      </div>
    </>
  );
}

export default Page;
