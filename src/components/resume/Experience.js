import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
         <ResumeCard
            title="BSc in Computer Science"
            subTitle="Ndejje University (2020 - 2023)"
            result="3.90/4"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Advanced Level"
            subTitle="St.Julian High School (2018 - 2019)"
            result="16/20"
            des="Higher education is tertiary education leading to award of a certificate."
          />
          <ResumeCard
            title="Secondary School Education (O'level)"
            subTitle="St.Julian High School (2013 - 2017)"
            result="18/54"
            des="Join Secondary and received my ordinary level certificate of high school education."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="System Specialist"
            subTitle="JAMII Systems - (2024 - Present)"
            result="United Arab Emirates"
            des="I monitor the systems and assist customers with different issues regarding to our systems"
          />
          <ResumeCard
            title="System Specialist"
            subTitle="Irshad Pest Control - (2012 - 2016)"
            result="United Arab Emirates"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="IT System Officer"
            subTitle="Airtel Uganda - (2022 - 2022)"
            result="Uganda"
            des="Worked at Airtel Uganda head office as an intern a period of two months."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
