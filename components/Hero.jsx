import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiArrowDownSLine,
  RiTodoFill,
} from "react-icons/ri";
import DevImg from "./DevImg";
import Badge from "./Badge";
import Link from "next/link";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[92vh] xl:pt-14 bg-pink-100 dark:bg-transparent">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase tracking-[4px] mb-4 text-primary">
              Web Developer
            </div>
            <h1 className="h1 mb-4">Hello, my name is Trinh Ngoc Kim Ngan</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              I am someone who is always willing to learn new things and would
              like to have a job in web development to gain more experience.
            </p>
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-6">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact Me <Send size={18} />
                </Button>
              </Link>
              <Button variant="secondary" className="gap-x-2">
                Download <Download size={18} />
              </Button>
            </div>
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          <div className="hidden xl:flex relative">
            <Badge
              containerStyles="absolute top-[26%] -left-[8rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={2}
              badgeText="Year Of Experience"
            />
            <Badge
              containerStyles="absolute top-[42%] -right-6"
              icon={<RiTodoFill />}
              endCountNum={10}
              badgeText="Finished Projects"
            />
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg
              containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
              imgSrc="/picCV.png"
            />
          </div>
        </div>
        <div className="hidden md:flex absolute left-2/4 -bottom-12 xl:-bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
