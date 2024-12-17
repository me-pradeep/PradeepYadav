"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "@/lib/Reveal";

function Skill({SkillRef}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section ref={SkillRef} className="flex flex-col items-center text-white gap-y-4 overflow-x-hidden overflow-y-hidden">
      <Reveal>
        <h1 className="text-4xl font-extrabold">
          Skills<span className="text-blue-400">.</span>
        </h1>
      </Reveal>

      <div className="flex flex-col gap-y-12">
        {/* Frontend */}
        <div className="w-[70vw] max-md:w-[80vw]">
          <Reveal>
            <h1 className="text-3xl font-bold text-blue-300 pt-4">| Frontend</h1>
          </Reveal>

          {/* Stagger Parent */}
          <motion.div
            className="flex flex-wrap gap-3 pt-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {[
              { src: "/html.png", alt: "html" },
              { src: "/css.svg", alt: "css" },
              { src: "/javascript.svg", alt: "javascript" },
              { src: "/typescript.svg", alt: "typescript" },
              { src: "/react.svg", alt: "react" },
              { src: "/nextjs.svg", alt: "nextjs", extraClass: "bg-white rounded-full" },
              { src: "/tailwind.svg", alt: "tailwind" },
              { src: "/framer-motion.svg", alt: "framer-motion" },
            ].map(({ src, alt, extraClass }, index) => (
              <motion.div key={index} variants={childVariants}>
                <Image
                  src={src}
                  height={80}
                  width={80}
                  alt={alt}
                  className={`max-md:w-20 max-md:h-20 max-sm:w-16 max-sm:h-16 ${extraClass || ""}`}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Backend */}
        <div className="w-[70vw] max-md:w-[80vw]">
          <Reveal>
            <h1 className="text-3xl font-bold text-blue-300 pt-4">| Backend</h1>
          </Reveal>

          {/* Stagger Parent */}
          <motion.div
            className="flex flex-wrap gap-3 pt-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {[
              { src: "/nodejs.svg", alt: "nodejs" },
              { src: "/express-js.png", alt: "express js", extraClass: "bg-white rounded-[4px] p-1" },
              { src: "/mongodb.svg", alt: "mongodb" },
              { src: "/firebase.svg", alt: "firebase" },
              { src: "/nextjs.svg", alt: "nextjs", extraClass: "bg-white rounded-full" },
              { src: "/flask.png", alt: "flask", extraClass: "bg-white rounded-[4px] p-1" },
            ].map(({ src, alt, extraClass }, index) => (
              <motion.div key={index} variants={childVariants}>
                <Image
                  src={src}
                  height={80}
                  width={80}
                  alt={alt}
                  className={`max-sm:w-16 max-sm:h-16 max-md:w-20 max-md:h-20 ${extraClass || ""}`}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Others */}
        <div className="w-[70vw] max-md:w-[80vw]">
          <Reveal>
            <h1 className="text-3xl font-bold text-blue-300 pt-4">| Others</h1>
          </Reveal>

          {/* Stagger Parent */}
          <motion.div
            className="flex flex-wrap gap-3 pt-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {[
              { src: "/git.svg", alt: "git" },
              { src: "/github.svg", alt: "github", extraClass: "bg-white rounded-[4px] p-1" },
              { src: "/python.png", alt: "python" },
              { src: "/chartjs.png", alt: "chartjs" },
              { src: "/mathjax.png", alt: "mathjax", extraClass: "bg-white rounded-[4px] p-1" },
            ].map(({ src, alt, extraClass }, index) => (
              <motion.div key={index} variants={childVariants}>
                <Image
                  src={src}
                  height={80}
                  width={80}
                  alt={alt}
                  className={`max-md:w-20 max-md:h-20 max-sm:w-16 max-sm:h-16 ${extraClass || ""}`}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
