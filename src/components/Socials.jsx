import React from "react";
import { motion } from "framer-motion";
import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

function Socials() {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
        transition: { duration: 1 },
      }}
      initial="hidden"
      animate="visible"
      className="flex gap-2 pt-3"
    >
      <a
        href="https://github.com/krspra"
        target="_blank"
        rel="noopener noreferrer"
      >
        <VscGithubInverted className="text-3xl hover:text-blue-400" />
      </a>
      <a
        href="https://www.linkedin.com/in/me-pradeep-yadav/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="text-3xl hover:text-blue-400" />
      </a>
      <a
        href="https://x.com/Modulusme"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaSquareXTwitter className="text-3xl hover:text-blue-400" />
      </a>
      <a
        href="https://www.instagram.com/kd_pradeep_yadav/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className="text-3xl hover:text-blue-400" />
      </a>
    </motion.div>
  );
}

export default Socials;
