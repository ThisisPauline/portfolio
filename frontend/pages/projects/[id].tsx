import { Inter } from "@next/font/google";
import Header from "@/components/Header";
import Link from "next/link";
import Footer from "@/components/Footer";

import axios from "axios";
import Image from "next/image";
import ButtonOut from "@/components/ButtonOut";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function ProjectDetails() {
  const router = useRouter();
  const { id } = router.query;

  const [project, setProject] = useState([]);

  const backendURL = "http://localhost:5005";

  useEffect(() => {
    axios
      .get(`${backendURL}/projects/${id}`)
      .then((response) => response.data)
      .then((data) => setProject(data));
  }, [id]);

  // fecth date :id in a use effet store data u state to render comp.
  //and loading if not ready

  console.log(project);

  if (project.length == 0) return <p className="">Loading...</p>;

  return (
    <>
      <Header />
      <div className="mt-[200px]">
        <div className="">
          <Image
            src={project[0].url}
            width={30000}
            height={30000}
            alt="project image"
            className="w-screen h-[600px] object-cover"
          />
        </div>
        <div className="mr-[60px] ml-[188px]">
          <div className="flex items-end  w-full border-b-2 pb-4 border-black ">
            <h1 className="text-[40px] desktop:text-[80px] font-bold z-10 desktop:-mb-7 -mb-3 mt-7">
              {project[0].projectName}
            </h1>
          </div>

          <div className="flex flex-row justify-evenly items-center min-h-[400px]">
            <p className="not-italic flex items-center font-light text-3xl text-left text-black flex-1 w-[50%] pr-[4%] mr-[2%] border-r-2 pb-4 border-black min-h-[350px]">
              {project[0].description}
            </p>
            <div className="flex flex-col min-h-[400px] justify-evenly">
              <div className="flex flex-row justify-between">
                <p className="font-bold text-3xl text-[#0C26CD]">Year</p>
                <p className="not-italic font-light text-3xl text-right text-black">
                  {project[0].year}
                </p>
              </div>
              <div className="flex flex-row justify-between">
                <p className="font-bold text-3xl text-[#0C26CD]">Client</p>
                <p className="not-italic font-light text-3xl text-right text-black">
                  {project[0].client}
                </p>
              </div>
              <div className="flex flex-row justify-between">
                <p className="font-bold text-3xl text-[#0C26CD]">Project</p>
                <p className="not-italic font-light text-3xl text-right text-black">
                  {project[0].projectType}
                </p>
              </div>
              <div className="flex flex-row justify-between flex-wrap">
                <p className="font-bold text-3xl text-[#0C26CD] mr-12">Stack</p>
                <p className="not-italic font-light text-3xl text-right text-black">
                  {project[0].stack}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-20 mt-[5%]">
            <div className="flex-1">
              <Link href={`${project[0].repoLink}`}>
                <ButtonOut label="View the repo" />
              </Link>
            </div>
            <div className="flex-1">
              <Link
                href={`
              $project[0].siteLink}`}
              >
                <ButtonOut label="View it live" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-row mb-[5%] h-[600]">
          {project.slice(1, project.length).map((image) => {
            return (
              <li className="list-none object-cover h-[600]" key={image.id}>
                <div>
                  <Image
                    src={image.url}
                    alt="image project"
                    width={3000}
                    height={3000}
                    className="h-[600] object-cover"
                  />
                </div>
              </li>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
