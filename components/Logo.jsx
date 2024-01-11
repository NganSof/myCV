import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image
        src="/logoCV.png"
        width="90"
        height="90"
        alt="Pic CV"
        priority
        className="object-cover rounded-full "
      />
    </Link>
  );
};

export default Logo;
