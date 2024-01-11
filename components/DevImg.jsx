import Image from "next/image";

const DevImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles} `}>
      <Image
        src={imgSrc}
        priority
        alt="shape"
        width={330}
        height={330}
        className="ml-12 mt-10"
      />
    </div>
  );
};

export default DevImg;
