import { FC } from "react";

const Intro: FC = () => {
  return (
    <section className="section md:16 lg:mt-20" id="intro">
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
