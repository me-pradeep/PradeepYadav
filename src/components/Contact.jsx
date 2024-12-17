"use client";
import React from "react";
import Reveal from "@/lib/Reveal";
import Socials from "./Socials";

function Contact({ContactRef}) {
  return (
    <section ref={ContactRef} className="flex flex-col items-center text-white gap-y-4 overflow-x-hidden overflow-y-hidden pb-6">
      <Reveal>
        <h1 className="text-4xl font-extrabold">
          Contact<span className="text-blue-400">.</span>
        </h1>
      </Reveal>
      <Reveal>
        <div className="text-center max-sm:w-[90vw] text-slate-300">
          Send me an email at{" "}
          <span className="text-blue-400">pradeepyad089@gmail.com</span> if you
          want to connect! You can also reach out to me on{" "}
          <a 
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/me-pradeep-yadav/"
            className="text-blue-400"
          >
            Linkedin
          </a>
          .
        </div>
      </Reveal>

      <Socials className=""/>
    </section>
  );
}

export default Contact;
