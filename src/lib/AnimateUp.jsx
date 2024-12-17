import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";


function AnimateUp({children}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const Controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      Controls.start("visible");
    }
  }, [isInView]);

  const Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };
  return (
    <motion.div
      ref={ref}
      variants={Variants}
      initial="hidden"
      animate={Controls}
    >{children}</motion.div>
  );
}

export default AnimateUp;
