import Form from "@/components/Form";
import { MailIcon, PhoneCall, HomeIcon } from "lucide-react";

const Contact = () => {
  return (
    <section className="min-h-screen">
      <div className="container mx-auto">
        <div className="grid xl:grid-cols-2 pt-12 mb-6 xl:mb-24 xl:h-[480px]">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello
            </div>
            <h1 className="h1 max-w-md mb-8">Let's Work Together</h1>
            <p className="subtitle max-w-[400px]">
              My current goal is to have a supportive job and hone my expertise.
              Not only that, I also hope that after 2 years, I will be able to
              do fullstack myself and have a suitable working environment to be
              able to stick with the company as well as the opportunity to
              develop myself and professionally.
            </p>
          </div>
          <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
        </div>
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          <div className="flex flex-col gap-y-4 xl:gap-y-14 text-base xl:mb-24 xl:text-lg">
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <p>trinhngan.sof@gmail.com</p>
            </div>
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary" />
              <p>75/8G Road 48, Hiep Binh Chanh Ward, Thu Duc City</p>
            </div>
            <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className="text-primary" />
              <p>0868781817</p>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
