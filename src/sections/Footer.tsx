import Button from "@/components/Button";
import { FC } from "react";

const navItems = [
  {
    href: "#",
    label: "Home",
  },
  {
    href: "#",
    label: "About Us",
  },
  {
    href: "#",
    label: "Services",
  },
  {
    href: "#",
    label: "Contact",
  },
];

const Footer: FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-200" id="contact">
      <div className="container">
        <div className="section">
          <div className="flex items-center gap-3">
            <div className="size-3 rounded-full bg-green-400 text-stone-900"></div>
            <div className="uppercase">Reach out</div>
          </div>
          <div className="grid md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <h2 className="text-2xl md:text-4xl lg:text-6xl mt-8 extralight uppercase">
                1212 Ridge Ave New Cumberland, WV 26047
              </h2>
              <h3 className="text-lg md:text-2xl lg:4xl extralight mt-4">
                724-480-8559
              </h3>
              <Button
                variant="secondary"
                className="mt-8"
                iconAfter={
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
                }
              >
                sales@stainlessspecialties.net
              </Button>
            </div>
            <div className="md:col-span-1">
              <nav className="flex flex-col gap-8 mt-16 md:mt-0 md:items-end">
                {navItems.map(({ href, label }) => (
                  <a href={href} key={label}>
                    <Button variant="text" className="text-lg">
                      {label}
                    </Button>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <p className="py-16 text-stone-200/30 text-sm">
          Copyright&copy; {new Date().getFullYear()} Stainless Specialties LLC
          All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
