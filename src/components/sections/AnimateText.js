import React from "react";
import AnimatedText from "react-animated-text-content";

function AnimateText() {
  return (
    <div className="animate-text">
      <AnimatedText
        type="word"
        animation={{
          //   x: "200px",
          //   y: "-20px",
          scale: 1.1,
          ease: "ease-in-out",
        }}
        interval={0.06}
        duration={0.2}
        tag="p"
        className="animated-paragraph"
        includeWhiteSpaces
        threshold={0.1}
        rootMargin="20%"
      >
        Hello. My name is Nam. Currently I am a university student. In the
        future, I want to be a web developer.
      </AnimatedText>
    </div>
  );
}

export default AnimateText;
