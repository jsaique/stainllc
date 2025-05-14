"use client";

import { stagger, useAnimate, useInView } from "motion/react";
import { FC, useEffect } from "react";
import SplitType from "split-type";

const Intro: FC = () => {
  const [scope, animate] = useAnimate();
  const inView = useInView(scope, {
    once: true,
  });

  useEffect(() => {
    new SplitType(scope.current.querySelector("h2"), {
      types: "lines,words",
      tagName: "span",
    });
  }, [scope]);

  useEffect(() => {
    if (inView) {
      animate(
        scope.current.querySelectorAll(".word"),
        {
          transform: "translateY(0%)",
        },
        {
          duration: 0.5,
          delay: stagger(0.2),
        }
      );
    }
  }, [inView, scope, animate]);
  return (
    <section className="section md:16 lg:mt-20" id="intro" ref={scope}>
      <div className="container">
        <h2 className="text-4xl md:text-6xl lg:text-7xl lg:w-[80%]">
          Established in 2005, we are a veteran-owned fabrication company based
          in West Virginia's northern panhandle, serving North America with
          expert pipe fabrication, equipment repair, and industrial maintenance
          services.
        </h2>
      </div>
    </section>
  );
};

export default Intro;
