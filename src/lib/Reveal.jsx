import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

function Reveal({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation(); 

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div ref={ref} style={{ overflow: "hidden", position: "relative", width: 'fit-content',height:'fit-content'}}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, delay: 0.25 }}
      >
        {children}
      </motion.div>

      <motion.div
        variants={{
          hidden: { x:0},
          visible: { x:"100%"},
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration:1.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          zIndex: 20,
          height:"100%",
          width:"100%",
          borderRadius:"20px",
        }}
        className="bg-gradient-to-br from-blue-950 to-black"
      ></motion.div>
    </motion.div>
  );
}

export default Reveal;
