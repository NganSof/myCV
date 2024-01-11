"use client";

import { Button } from "./ui/button";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { projectData } from "@/mock/projectData";

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left xl:h-[400px] flex flex-col justify-center mb-12 items-center xl:items-start ">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            These are completed products that are publicly available on github
            and deployed, which I have been working on for a while.
          </p>
          <Link href="/project">
            <Button>All Projects</Button>
          </Link>
        </div>
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[540px]"
            slidesPerView="1"
            breakpoints={{ 640: { slidesPerView: 2 } }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
