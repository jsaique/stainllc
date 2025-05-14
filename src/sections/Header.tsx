"use client";
import Button from "@/components/Button";
import { FC, useEffect, useState } from "react";
import { motion, useAnimate } from "motion/react";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const navItems = [
  {
    label: "About",
    href: "#intro",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [topLineScope, topLineAnimate] = useAnimate();
  const [bottomLineScope, bottomLineAnimate] = useAnimate();
  const [navScope, navAnimate] = useAnimate();

  useEffect(() => {
    if (isOpen) {
      topLineAnimate([
        [
          topLineScope.current,
          {
            translateY: 4,
          },
        ],
        [
          topLineScope.current,
          {
            rotate: 45,
          },
        ],
      ]);
      bottomLineAnimate([
        [
          bottomLineScope.current,
          {
            translateY: -4,
          },
        ],
        [
          bottomLineScope.current,
          {
            rotate: -45,
          },
        ],
      ]);
      navAnimate(
        navScope.current,
        {
          height: "100%",
        },
        {
          duration: 0.7,
        }
      );
    } else {
      topLineAnimate([
        [
          topLineScope.current,
          {
            rotate: 0,
          },
        ],
        [
          topLineScope.current,
          {
            translateY: 0,
          },
        ],
      ]);
      bottomLineAnimate([
        [
          bottomLineScope.current,
          {
            rotate: 0,
          },
        ],
        [
          bottomLineScope.current,
          {
            translateY: 0,
          },
        ],
      ]);
      navAnimate(navScope.current, { height: 0 });
    }
  }, [
    isOpen,
    topLineScope,
    topLineAnimate,
    bottomLineScope,
    bottomLineAnimate,
    navScope,
    navAnimate,
  ]);

  const handleClickMobileNav = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);

    const url = new URL(e.currentTarget.href);
    const hash = url.hash;

    const target = document.querySelector(hash);

    if (!target) return;
    target.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header>
      <div
        className="navi h-0 bg-stone-900 overflow-hidden z-30"
        ref={navScope}
      >
        <nav className="mt-20 flex flex-col">
          {navItems.map(({ href, label }) => (
            <a
              href={href}
              key={label}
              className="text-stone-200 border-t last:border-b border-y-stone-800 py-8 group/nav-item relative isolate"
              onClick={handleClickMobileNav}
            >
              <div className="container !max-w-full flex items-center justify-between">
                <span className="text-3xl group-hover/nav-item:pl-4 group-hover/nav-item:text-4xl duration-500 transition-all">
                  {label}
                </span>
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
              <div className="absolute w-0 h-full bottom-0 bg-stone-800 group-hover/nav-item:w-full transition-all duration-500 -z-10"></div>
            </a>
          ))}
        </nav>
      </div>
      <div className="navi backdrop-blur-md mix-blend-difference z-30">
        <div className="container !max-w-full">
          <div className="flex justify-between items-center h-20">
            <div>
              <a href="/">
                <span className="text-xl text-white font-bold uppercase">
                  Stainless&nbsp;Specialties&nbsp;LLC
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="navi z-30">
        <div className="container !max-w-full">
          <div className="flex justify-end items-center h-20">
            <div className="flex items-center gap-4">
              <div
                className="size-11 border border-stone-400 rounded-lg inline-flex justify-center items-center bg-stone-200"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.rect
                    x="3"
                    y="7"
                    width="18"
                    height="2"
                    fill="currentColor"
                    ref={topLineScope}
                    style={{
                      transformOrigin: "12px 8px",
                    }}
                  />
                  <motion.rect
                    x="3"
                    y="15"
                    width="18"
                    height="2"
                    fill="currentColor"
                    ref={bottomLineScope}
                    style={{
                      transformOrigin: "12px 16px",
                    }}
                  />
                </svg>
              </div>
              <Button variant="primary" className=" hidden md:inline-flex">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
