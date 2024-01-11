"use client";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import Logo from "./Logo";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathName = usePathname();
  useEffect(() => {
    const scrollYPos = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
    return () => window.removeEventListener("scroll", scrollYPos);
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 transition-all ${
        header
          ? "py-4 bg-white shadow-lg dark:bg-accent"
          : "py-6 dark:bg-transparent"
      } ${pathName === "/" && "bg-[#fef9f5]"}`}
    >
      <div className="container mx-auto">
        <div className=" flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            <Nav
              containerStyles="hidden xl:flex items-center gap-x-8"
              linkStyles="relative transition-all hover:text-primary"
              underlineStyles="absolute top-full left-0 h-[2px] w-full bg-primary"
            />
            <ThemeToggler />
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
