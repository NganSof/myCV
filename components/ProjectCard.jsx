import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader } from "./ui/card";
import { Github, Link2Icon } from "lucide-react";
import { Badge } from "./ui/badge";

const ProjectCard = ({ project }) => {
  const { image, category, name, discription, link, gitHub } = project;
  return (
    <Card className="overflow-hidden group relative h-full">
      <CardHeader className="p-0">
        <div className="relative w-full h-[300px] bg-tertiary dark:bg-secondary/40 flex justify-center items-center overflow-hidden">
          <Image
            src={image}
            className="absolute bottom-0 shadow-2xl object-cover"
            width={500}
            height={300}
            priority
            alt="Picture Project"
          />
          <div className="flex gap-x-4">
            <Link
              href={link}
              target="_blank"
              className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 duration-200 transition-all"
            >
              <Link2Icon className="text-white" />
            </Link>
            <Link
              href={gitHub}
              target="_blank"
              className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 duration-200 transition-all"
            >
              <Github className="text-white" />
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-6 py-8">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
          {category}
        </Badge>
        <h4 className="h4 mb-1">{name}</h4>
        <p className="text-muted-foreground text-lg">{discription}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
