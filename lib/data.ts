import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Nagindas Khandwala college",
    location: "Mumbai Thane",
    description:
      "Graduated from a Computer Science Degree ",
    icon: React.createElement(LuGraduationCap),
    date: "2023 March",
  },
  {
    title: "Front-End Developer - JURNI MEDIA",
    location: "London, UK",
    description:
      "Partnered with backend and created dynamic webpages using Javascript React resulting in wesbite leads increase",
    icon: React.createElement(CgWorkAlt),
    date: "2020 Feb - 2020 March",
  },
  {
    title: "Open Source Contribution",
    location: "India",
    description:
      "Engaged as a member of the Google Developer Group during quarantine, activelycontributing to open-source projects using technologies such as Mongo DB, Express,and Node.js",
    icon: React.createElement(FaReact),
    date: "2021 September - 2023 March",
  },
  {
    title: "Full-Stack Developer - Livnest Technologies",
    location: "Mumbai, INDIA",
    description:
      "Developed robust finance management system in startup using Core PHP, Node.js, Express, MongoDB, MySQL, Redis, and external APIs. Implemented OAuth, JWT for secure access, and optimized data storage with advanced normalization techniques. Designed REST APIs, integrated GraphQL, and ensured collaborative development with GIT version control. Demonstrated expertise in dynamic startup environment.",
    icon: React.createElement(FaReact),
    date: "2023 April - present",
  }
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "In this project Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs.  It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Kafka",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
