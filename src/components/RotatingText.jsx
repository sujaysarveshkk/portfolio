import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Simple rotating text component.
 * Props:
 *  - texts: array of strings
 *  - mainClassName: classes for outer wrapper
 *  - splitLevelClassName: extra classes for inner animated span
 *  - initial / animate / exit / transition: framer-motion props
 *  - rotationInterval: time between rotations (ms)
 */
function RotatingText({
  texts = [],
  mainClassName = "",
  splitLevelClassName = "",
  initial = { y: "100%" },
  animate = { y: 0 },
  exit = { y: "-120%" },
  transition = { type: "spring", damping: 30, stiffness: 400 },
  rotationInterval = 2000,
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!texts.length) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, rotationInterval);

    return () => clearInterval(id);
  }, [texts, rotationInterval]);

  const currentText = texts[index] || "";

  return (
    <span className={`text-rotate ${mainClassName}`}>
      {/* screen-reader friendly: full list */}
      <span className="text-rotate-sr-only">{texts.join(", ")}</span>

      {/* visually animated text */}
      <span
        aria-hidden="true"
        className={`text-rotate-lines ${splitLevelClassName}`}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={currentText}
            className="text-rotate-element"
            initial={initial}
            animate={animate}
            exit={exit}
            transition={transition}
          >
            {currentText}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}

export default RotatingText;