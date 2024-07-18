import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="University Complaint Management System"
          des=" I developed a complaint management system using php codeIgniter framework as a quick solution to provide realtime complaint
          resolution in a tracked and transparent manner"
          src={projectOne}
        />
        <ProjectsCard
          title="E-commerce Website"
          des="Developed a free e-comm web app for insividuals to trade their items and goods "
          src={projectTwo}
        />
        <ProjectsCard
          title="KD-FINANCE"
          des="Utilising React and node js developed a SME-banking web app to automate finacial tasks and also providing data analysis"
          src={projectThree}
        />
        <ProjectsCard
          title="Leave management system"
          des="Utilising express and node js i developed a leave management system to to automate empleyee leaves aslo taking caution ofthe United Arab emirates labour laws"
          src={projectThree}
        />
      
        <ProjectsCard
          title="Router monitoring web app"
          des="utiling python i developed a router monitoring tool to manage the router e.g users connected to the router "
          src={projectTwo}
        />
      </div>
    </section>
  );
}

export default Projects