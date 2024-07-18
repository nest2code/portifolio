import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2012 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Computer Science"
            subTitle="Ndejje University (2020 - 2023)"
            result="3.72/5"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Advanced Level"
            subTitle="St.Julian High School (2018 - 2019)"
            result="16/20"
            des="Exelled in physic Chemistry and Mathematics and obtained a certificate from the UNEB"
          />
          <ResumeCard
            title="Secondary School Education (O'level)"
            subTitle="St.Julian High School (2013 - 2017)"
            result="First grade"
            des="Joined Secondary and received my ordinary level certificate of education."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="System support Specialist"
            subTitle="Irshad Pest Control - (2024-date)"
            result="United Arab Emirates"
            des="A popular destination with a growing number of highly qualified imigrants, it's true that securing a role in isn't easy."
          />
         
          <ResumeCard
            title="System Support Specialist"
            subTitle="JAMII Systems - (2022 -2024)"
            result="Uganda"
            des="I monitor the systems and assist customers with different issues regarding to our systems and also assist in development"
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
}

export default Education