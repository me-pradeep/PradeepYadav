"use client";
import React from "react";
import { motion } from "framer-motion";

function Header({scrollToHero,scrollToAbout,scrollToSkill,scrollToContact,scrollToProject}) {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{duration: 0.5, type: "spring", bounce: 0.5 }}
      className="sticky top-0 py-4 flex items-center justify-center w-screen z-50 overflow-x-hidden"
    >
      <ul className="flex list-none items-center justify-around max-xl:w-[40vw] max-s2:w-[60vw] max-sm:w-[90vw] w-[30vw] max-s3:text-xs text-slate-400 font-semibold p-5 bg-gradient-to-r from-blue-950 to-black border-[0.5px] border-slate-400 rounded-2xl">
        <button onClick={()=>{scrollToHero()}} className="cursor-pointer">Home</button>
        <button onClick={()=>{scrollToAbout()}} className="cursor-pointer">About</button>
        <button onClick={()=>{scrollToSkill()}} className="cursor-pointer">Skills</button>
        <button onClick={()=>{scrollToProject()}} className="cursor-pointer">Projects</button>
        <button onClick={()=>{scrollToContact()}} className="cursor-pointer">Contact</button>
      </ul>
    </motion.header>
  );
}

export default Header;
