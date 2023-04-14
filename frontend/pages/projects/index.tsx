import { Inter } from "@next/font/google";
import Header from "@/components/Header";
import Link from "next/link";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import axios from "axios";

import Image from "next/image";

import styles from "../../styles/menu.module.scss";

const inter = Inter({ subsets: ["latin"] });

interface Project {
  projectSpecs_id: string;
  url: string;
  projectTag: string;
  projectName: string;
  stack: string;
}

export default function Work() {
  const [work, setWork] = useState<Project[]>([]);
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);

  const handleMouseEnter = (project: Project) => {
    setHoveredProject(project);
  };
  const handleMouseLeave = () => {
    setHoveredProject(null);
  };
  const URI = "http://localhost:5005/projects";

  useEffect(() => {
    const source = axios.CancelToken.source();

    axios
      .get(URI, { cancelToken: source.token })
      .then((response) => response.data)
      .then((data) => setWork(data));
  }, []);

  return (
    <div className="">
      <Header />
      <div className="flex flex-col items-start justify-center min-h-screen desktop:mr-[60px] desktop:ml-[180px] mr-[26px] ml-[26px] mt-[150px] mb-8">
        <div className="flex items-end justify-between w-full border-b-2 pb-4 border-black ">
          <h1 className={` font-bold z-10  -mb-3 ${styles["h1"]}`}>
            My projects
          </h1>
          <p className={`font-[100] ${styles["number"]}`}>02</p>
        </div>

        <div className="w-full grid desktop:grid-cols-2 gap-8 mt-8">
          {work.map((project) => {
            return (
              <li className="list-none" key={project.projectSpecs_id}>
                <Link href={`/projects/${project.projectSpecs_id}`}>
                  <div
                    className="flex-1 "
                    onMouseEnter={() => handleMouseEnter(project)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="relative  overflow-hidden pb-[56.25%]">
                      <Image
                        src={project.url}
                        alt={project.projectTag}
                        className="object-cover absolute inset-0 w-full h-full"
                        width={500}
                        height={500}
                      />
                      {project === hoveredProject && (
                        <div className="absolute h-full bottom-0 left-0 right-0 px-8 py-8 flex justify-end flex-col bg-[#0C26CD] transition-opacity duration-300 opacity-100">
                          <p
                            className={`${styles["projectName"]} text-white font-bold `}
                          >
                            {project.projectName}
                          </p>
                          <p
                            className={`${styles["projectTag"]} text-white font-bold  `}
                          >
                            {project.projectTag}
                          </p>
                          <p
                            className={`${styles["projectStack"]} text-white font-thin `}
                          >
                            {project.stack}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
