import { Inter } from "@next/font/google";
import Header from "@/components/Header";
import Link from "next/link";
import Footer from "@/components/Footer";
import React from "react";
import styles from "../../styles/menu.module.scss";
import axios from "axios";
import Image from "next/image";
import ButtonOut from "@/components/ButtonOut";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const inter = Inter({ subsets: ["latin"] });

export default function ProjectDetails() {
  const router = useRouter();
  const { id } = router.query;

  const [project, setProject] = useState([]);
  const photoScrollContainerRef = useRef(null);

  const backendURL = "http://localhost:5005";

  useEffect(() => {
    if (id == null) return;
    axios
      .get(`${backendURL}/projects/${id}`)
      .then((response) => response.data)
      .then((data) => setProject(data));
  }, [id]);

  console.log(project);

  useEffect(() => {
    if (photoScrollContainerRef.current == null) return;
    const container = photoScrollContainerRef.current;
    const wheelListener = (e) => {
      e.preventDefault();
      container.scrollBy(e.deltaY * 0.5, 0);
    };
    container.addEventListener("wheel", wheelListener, {
      passive: false,
    });
    return () => container.removeEventListener("wheel", wheelListener);
  }, [photoScrollContainerRef.current]);

  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "#0C26CD",
    height: "100vh",
  };

  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  if (project.length == 0)
    return (
      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );

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
            className="w-screen desktop:h-[600px] object-cover"
          />
        </div>
        <div className="desktop:mr-[60px] desktop:ml-[188px] mr-[26px] ml-[26px]">
          <div className="flex items-end  w-full border-b-2 pb-4 border-black ">
            <h1 className="text-[40px] desktop:text-[80px] font-bold z-10 desktop:-mb-7 -mb-3 mt-7">
              {project[0].projectName}
            </h1>
          </div>

          <div className="flex desktop:flex-row flex-col-reverse gap-10 desktop:gap-0 justify-between items-center desktop:min-h-[600px]">
            <p className="not-italic flex desktop:items-center desktop:font-[100] font-[100] text-[18px] desktop:text-3xl desktop:text-left text-black desktop:w-[50%] desktop:pr-[4%] desktop:border-r-2 pb-4 desktop:border-black desktop:min-h-[350px]">
              {project[0].description}
            </p>
            <div className="flex flex-col desktop:min-h-[400px] min-h-[250px] justify-around desktop:justify-evenly desktop:w-[50%] w-full desktop:ml-[2%]">
              <div className="flex flex-row justify-between">
                <p className="font-bold text-[18px] desktop:text-3xl text-[#0C26CD]">
                  Year
                </p>
                <p className="not-italic font-light text-[18px] font-[100] desktop:text-3xl text-right text-black">
                  {project[0].year}
                </p>
              </div>
              <div className="flex flex-row justify-between">
                <p className="font-bold text-[18px] desktop:text-3xl text-[#0C26CD]">
                  Client
                </p>
                <p className="not-italic font-[100] text-[18px] desktop:text-3xl text-right text-black">
                  {project[0].client}
                </p>
              </div>
              <div className="flex flex-row justify-between">
                <p className="font-bold text-[18px] desktop:text-3xl text-[#0C26CD]">
                  Project
                </p>
                <p className="not-italic font-[100] text-[18px] desktop:text-3xl text-right text-black">
                  {project[0].projectType}
                </p>
              </div>
              <div className="flex flex-row justify-between flex-wrap">
                <p className="font-bold text-[18px] desktop:text-3xl text-[#0C26CD] mr-12">
                  Stack
                </p>
                <p className="not-italic font-[100] text-[18px] desktop:text-3xl text-right text-black">
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
      <div
        ref={photoScrollContainerRef}
        className="flex desktop:justify-center flex-col gap-5 desktop:flex-row mb-[5%] desktop:h-[450px] desktop:overflow-x-auto  desktop:overflow-y-hidden "
      >
        {project.slice(1, project.length).map((image) => {
          return (
            <li className="list-none" key={image.index}>
              <div className=" desktop:w-[600px] desktop:h-[450px]  desktop:snap-center">
                <Image
                  src={image.url}
                  alt="image project"
                  width={660}
                  height={450}
                  className="desktop:object-cover  desktop:h-full"
                />
              </div>
            </li>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
