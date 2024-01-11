"use client";

import CountUp from "react-countup";

const Badge = ({
  containerStyles,
  icon,
  endCountNum,
  endCountText,
  badgeText,
}) => {
  return (
    <div className={`badge ${containerStyles}`}>
      <div className="text-3xl text-primary">{icon}</div>
      <div className="flex items-center gap-x-2">
        <div className="text-primary text-4xl font-bold leading-none">
          <CountUp end={endCountNum} delay={1} duration={4} />
          {endCountText}
        </div>
        <div className="max-w-[70px] leading-none text-black font-medium text-[15px]">
          {badgeText}
        </div>
      </div>
    </div>
  );
};

export default Badge;
