import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { links } from "@/mock/projectData";

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const pathName = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${linkStyles} capitalize`}
          >
            {link.path === pathName && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underlineStyles}`}
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
