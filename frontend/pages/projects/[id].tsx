import { Inter } from "@next/font/google";
import Header from "@/components/Header";
import Link from "next/link";
import Footer from "@/components/Footer";
import React from "react";
import axios from "axios";
import Image from "next/image";
import ButtonOut from "@/components/ButtonOut";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "../../styles/menu.module.scss";
import ButtonInner from "@/components/ButtonInner";
import ButtonBack from "@/components/ButtonBack";

const inter = Inter({ subsets: ["latin"] });

export default function ProjectDetails() {
  const [work, setWork] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  const [project, setProject] = useState([]);

  const backendURL = "http://localhost:5005";

  useEffect(() => {
    if (id == null) return;
    axios
      .get(`${backendURL}/projects/${id}`)
      .then((response) => response.data)
      .then((data) => setProject(data));
  }, [id]);

  const URI = "http://localhost:5005/projects";

  useEffect(() => {
    const source = axios.CancelToken.source();

    axios
      .get(URI, { cancelToken: source.token })
      .then((response) => response.data)
      .then((data) => setWork(data));
  }, []);

  console.log(project);
  console.log(work);

  if (project.length == 0) return;
  const prevProject = parseInt(project[1].id) - 1;
  const nextProject = parseInt(project[1].id) + 1;
  console.log(nextProject);
  return (
    <div className="w-screen">
      <Header />
      <div className="desktop:mt-[200px] mt-[150px] w-screen">
        <div className="">
          <Image
            src={project[0].url}
            width={30000}
            height={30000}
            alt="project image"
            className="w-screen object-cover desktop:h-[800px]"
          />
        </div>
        <div className="desktop:mr-[60px] desktop:ml-[188px] mr-[26px] ml-[26px]">
          <div className="flex items-end  w-full border-b-2 pb-4 border-black ">
            <h1
              className={`font-bold z-10 desktop:-mb-7 -mb-3 mt-7 ${styles["h1"]}`}
            >
              {project[0].projectName}
            </h1>
          </div>

          <div className="flex desktop:flex-row flex-col-reverse gap-10 desktop:gap-0 justify-between items-center desktop:min-h-[600px]">
            <p
              className={`not-italic flex desktop:items-center desktop:font-[100] font-[100]  desktop:text-left text-black desktop:w-[50%] desktop:pr-[4%] desktop:border-r-2 pb-4 desktop:border-black desktop:min-h-[350px] ${styles["paragraphe"]}`}
            >
              {project[0].description}
            </p>
            <div className="flex flex-col desktop:min-h-[400px] min-h-[250px] justify-around desktop:justify-evenly desktop:w-[50%] w-full desktop:ml-[2%]">
              <div className="flex flex-row justify-between">
                <p
                  className={`font-bold text-[#0C26CD] ${styles["paragraphe"]}`}
                >
                  Year
                </p>
                <p
                  className={`not-italic font-[100] text-right text-black ${styles["paragraphe"]}`}
                >
                  {project[0].year}
                </p>
              </div>
              <div className="flex flex-row justify-between">
                <p
                  className={`font-bold text-[#0C26CD] ${styles["paragraphe"]}`}
                >
                  Client
                </p>
                <p
                  className={`font-[100] text-right text-black" ${styles["paragraphe"]}`}
                >
                  {project[0].client}
                </p>
              </div>
              <div className="flex flex-row justify-between">
                <p
                  className={`font-bold  text-[#0C26CD] ${styles["paragraphe"]}`}
                >
                  Project
                </p>
                <p
                  className={`not-italic font-[100]  text-right text-black ${styles["paragraphe"]}`}
                >
                  {project[0].projectType}
                </p>
              </div>
              <div className="flex flex-row justify-between items-center ">
                <p
                  className={`font-bold  text-[#0C26CD] mr-12 ${styles["paragraphe"]}`}
                >
                  Stack
                </p>
                <p
                  className={`not-italic font-[100]  text-right text-black ${styles["paragraphe"]}`}
                >
                  {project[0].stack}
                </p>
              </div>
            </div>
          </div>

          <div className="flex desktop:flex-row flex-col gap-10 desktop:gap-0  desktop:items-center justify-center  mt-[5%] desktop:mb-[5%] mb-[15%]">
            <div className="flex-1">
              {project[1].siteLink !== null ? (
                <div>
                  <Link target="_blank" href={project[0].siteLink}>
                    <ButtonOut label="View the website" />
                  </Link>
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div className="flex-1">
              {project[1].repoLink !== null ? (
                <div>
                  <Link target="_blank" href={project[0].repoLink}>
                    <ButtonOut label="View the repo" />
                  </Link>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="hidden desktop:block">
        <div className="overflow-x-scroll scrollbar-hidden">
          <Slider
            infinite={true}
            slidesToShow={1}
            slidesToScroll={1}
            centerMode={true}
            centerPadding={"0"}
            speed={500}
            dots={false}
            arrows={false}
            variableWidth={true}
            className="w-full"
          >
            {project.slice(1, project.length).map((image) => {
              return (
                <div className="list-none" key={image.index}>
                  <div className="desktop:w-[600px] desktop:h-[450px] desktop:snap-center">
                    <Image
                      src={image.url}
                      alt="image project"
                      width={660}
                      height={450}
                      className="desktop:object-cover desktop:h-full"
                    />
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>

      <div className="flex flex-col w-screen desktop:hidden">
        {project.slice(1, project.length).map((image) => {
          return (
            <div className="list-none" key={image.index}>
              <div className="w-screen m-0">
                <Image
                  src={image.url}
                  alt="image project"
                  width={860}
                  height={450}
                  className="desktop:object-cover desktop:h-full"
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-between desktop:mx-[66px] mx-2 my-10">
        {project[1].id !== 1 ? (
          <Link href={`/projects/${prevProject}`} className="flex-1 ">
            <ButtonBack label="Previous project" />
          </Link>
        ) : (
          <div></div>
        )}
        {project[1].id !== work.length ? (
          <Link
            href={`/projects/${nextProject}`}
            className="flex-1 flex flex-end justify-end"
          >
            <ButtonInner label="Next project" />
          </Link>
        ) : (
          ""
        )}
      </div>
      <Footer />
    </div>
  );
}
