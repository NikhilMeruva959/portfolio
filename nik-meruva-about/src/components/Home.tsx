import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import avatarImg from "../assets/avatar-img.jpg";

const Home: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
          {/* Flex container to align the avatar and text horizontally */}
          <div className="flex items-start gap-6">
            <Avatar className="h-32 w-32">
              <AvatarImage src={avatarImg} className="rounded-full object-cover" />
              <AvatarFallback>NM</AvatarFallback>
            </Avatar>
    
            <div>
              <h1 className="text-2xl font-bold mb-4">About me</h1>
              <p className="text-base mb-4">
                Hello! I'm Nikhil Meruva, a Computer Science graduate from Stony Brook
                University in 2024. With a strong foundation in software engineering and
                hands-on experience from internships at Dailypay and working experience
                as a Software Engineer at Fiserv, I specialize in full-stack development,
                data engineering, and sports analytics.
              </p>
              <p className="text-base">
                Here, you'll find entries on current projects I'm working on,
                development blogs detailing these projects, and my thoughts on current
                trends in technology.
              </p>
            </div>
          </div>
        </div>
      )
};

export default Home;
