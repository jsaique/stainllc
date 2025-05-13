import { FC } from "react";
import image1 from "@/assets/images/project-1.jpg";
import image2 from "@/assets/images/project-2.jpg";
import image3 from "@/assets/images/project-3.jpg";
import image4 from "@/assets/images/project-4.jpg";
import image5 from "@/assets/images/project-5.jpg";
import Image from "next/image";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const services = [
  {
    name: "Pipe Fabrication",
    image: image1,
  },
  {
    name: "On and off-site welding & fabrication",
    image: image2,
  },
  {
    name: "OEM installer",
    image: image3,
  },
  {
    name: "Cad design & fabrication prints",
    image: image4,
  },
];

const Services: FC = () => {
  return (
    <section className="section" id="services">
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl">Services</h2>
        <div className="mt-10 md:mt-16 lg:mt-20">
          {services.map(({ name, image }) => (
            <a
              href="#"
              key={`${name}`}
              className="border-t last:border-b border-stone-400 border-dashed py-6 md:py-8 lg:py-10 flex flex-col"
            >
              <div className="">
                <div className="aspect-video md:hidden">
                  <Image
                    src={image}
                    alt={`${name} image`}
                    className="size-full object-cover"
                  />
                </div>
                <div className="flex justify-between items-center mt-8 md:mt-0">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl uppercase">
                    {name}
                  </h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
