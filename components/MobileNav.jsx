import { AlignJustify } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import Logo from "./Logo";
import Socials from "./Socials";
import { usePathname } from "next/navigation";
import { links } from "@/mock/projectData";
import { motion } from "framer-motion";
import Link from "next/link";

const MobileNav = () => {
  const pathName = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            {/* <Nav
              containerStyles="flex flex-col items-center gap-y-6"
              linkStyles="text-2xl"
            /> */}

            {
              <nav className="flex flex-col items-center gap-y-6">
                {links.map((link, index) => {
                  return (
                    <SheetClose asChild>
                      <Link
                        href={link.path}
                        key={index}
                        className="text-2xl capitalize"
                      >
                        {link.path === pathName && (
                          <motion.span
                            initial={{ y: "-100%" }}
                            animate={{ y: 0 }}
                            transition={{ type: "tween" }}
                            layoutId="underline"
                          />
                        )}
                        {link.name}
                      </Link>
                    </SheetClose>
                  );
                })}
              </nav>
            }
          </div>
          <Socials containerStyles="flex gap-x-4" iconsStyles="text-2xl" />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
