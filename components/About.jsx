import Image from "next/image";
import DevImg from "./DevImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  HomeIcon,
  User2,
  MailIcon,
  PhoneCall,
  Calendar,
  GraduationCap,
  Briefcase,
} from "lucide-react";

const infoData = [
  { icon: <User2 size={20} />, text: "Trinh Ngọc Kim Ngân" },
  { icon: <PhoneCall size={20} />, text: "0868781817" },
  { icon: <MailIcon size={20} />, text: "trinhngan.sof@gmail.com" },
  { icon: <Calendar size={20} />, text: "27-09-1996" },
  {
    icon: <HomeIcon size={20} />,
    text: "75/8G Road 48, Hiep Binh Chanh Ward, Thu Duc City",
  },
  { icon: <GraduationCap size={20} />, text: "Ly Tự Trọng College" },
];
const qualificationData = [
  {
    title: "Education",
    data: [
      {
        university: "CyberSoft",
        qualification: "The course web developer",
        years: "03/2021 - 11/2021",
      },
      {
        university: "Ly Tu Trong College",
        qualification: "INFORMATION TECHNOLOGY SOFTWARE",
        years: "2015-2019",
      },
    ],
  },
  {
    title: "Experience",
    data: [
      {
        company: "Viet Japan Partner",
        qualification: "FRONTEND DEVELOPER",
        years: "12/2022 - 2/2023",
      },
      {
        company: "LAIDON Consulting VietNam",
        qualification: "FRONTEND DEVELOPER",
        years: "01/2022 - 9/2022",
      },
      {
        company: "Cyber Soft - Cyber Learn",
        qualification: "SOFTWARE",
        years: "03/2021 - 11/2021",
      },
    ],
  },
];
const skillsData = [
  {
    title: "skills",
    data: [
      { name: "HTML,CSS" },
      { name: "Javascript" },
      { name: "Typescript" },
      { name: "ReactJS" },
      { name: "Redux, Redux toolkit query, Redux thunk, Axios" },
      { name: "Bootstrap, Material-UI, Tailwind CSS, Ant-Design, Shadcn UI" },
      { name: "SCSS,SASS" },
      { name: "SAP (UI5)" },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  getData(qualificationData, "Education");
  return (
    <section className="xl:h-[860px] pb-12 py-24 mb-12 xl:mb-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 mx-auto text-center">
          About Me
        </h2>
        <div className="flex flex-col xl:flex-row">
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark bg-no-repeat bg-cover w-[480px] h-[460px] relative"
              imgSrc="/picCV.png"
            />
          </div>
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:border xl:max-w-[520px] dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualification"
                >
                  Qualification
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      I am a person who is always willing to learn new things,
                      have a sense of responsibility for goals and tasks. I can
                      learn new technologies and features and understand more
                      deeply the languages and technologies I currently know.
                    </p>
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border-border" />
                      <div>English</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="qualification">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awesome Journey
                    </h3>
                    <div className="grid md:grid-cols-2 gap-y-8">
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "Experience").title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "Experience").data.map(
                            (item, index) => {
                              const { company, qualification, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="h-[11px] w-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="mb-2 leading-none font-semibold text-xl">
                                      {company}
                                    </div>
                                    <div className="text-lg text-muted-foreground mb-4 leading-none">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "Education").title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "Education").data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="h-[11px] w-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="mb-2 leading-none font-semibold text-xl">
                                      {university}
                                    </div>
                                    <div className="text-lg text-muted-foreground mb-4 leading-none">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3>Tools I use everyday</h3>
                    <div className="mb-16">
                      <h4 className="font-semibold text-xl mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      <div>
                        {getData(skillsData, "skills").data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                key={index}
                                className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                              >
                                <div className="font-medium">{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
