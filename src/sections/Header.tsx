import Button from "@/components/Button";
import { FC } from "react";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const navItems = [
  {
    label: "About",
    href: "#intro",
  },
  {
    label: "Selected Works",
    href: "#projects",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "FAQs",
    href: "#faqs",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const Header: FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md">
      <div className="container !max-w-full">
        <div className="flex justify-between items-center h-20">
          <div className="md:border md:border-stone-900 md:bg-stainless-500 md:p-2 md:rounded-lg">
            <a href="/">
              <span className="text-xl font-bold uppercase">
                Stainless&nbsp;Specialties&nbsp;LLC
              </span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <div className="size-11 border border-stone-400 rounded-lg inline-flex justify-center items-center bg-stone-200">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="3" y="15" width="18" height="2" fill="currentColor" />
                <rect x="3" y="7" width="18" height="2" fill="currentColor" />
              </svg>
            </div>
            <Button variant="primary" className=" hidden md:inline-flex">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
