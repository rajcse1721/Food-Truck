import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClasCompoment from "./ProfileClassComp";
import personal from "../assets/personal.jpg";
const About = () => {
  return (
    <>
      <div className="bg-white text-black p-6 flex flex-col md:flex-row items-center justify-center gap-6">
        {/* Image with hover effect */}
        <div className="group relative">
          <img
            src={personal} // Replace with your image path
            alt="Rajesh Singh"
            className="w-40 h-40 rounded-full border-4 border-white object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <h2 className="text-center mt-2 text-xl font-bold">Rajesh Singh</h2>
        </div>

        {/* Description */}
        <div className="max-w-2xl">
          <p className="text-sm md:text-base leading-relaxed">
            I’m <span className="italic font-semibold">Rajesh Singh</span>, a
            Software Developer at{" "}
            <span className="italic font-semibold"> Oracle </span> with over 3+
            years of experience in designing and optimizing enterprise-level
            applications. My expertise lies in Java, Spring Boot, and backend
            development. I’ve worked on projects like clinical data systems and
            dynamic configuration management using Java, JUnit, and Git for
            seamless integration and performance tuning. I’m proficient in
            backend and frontend technologies, including React and SQL databases
            like MySQL. I have experience with build and deployment tools such
            as Maven and CI/CD pipelines using Jenkins. I enjoy solving
            real-world problems and building scalable, efficient software.
          </p>
        </div>
      </div>

      <div>
        <h1>this is about us page </h1>
        <p>you can brief about you and your services </p>

        {/* {<Outlet />} */}
        <Profile name="Rajesh" />
        <ProfileClasCompoment name="Sonu" />
      </div>
    </>
  );
};

export default About;
