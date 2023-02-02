import { Inter } from "@next/font/google";
import Header from "@/components/Header";
import ButtonBlack from "@/components/ButtonInner";
import Link from "next/link";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import arrowRight from "../assets/arrow-right.svg";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Work() {
  const [work, setWork] = useState([]);

  const URI = "http://localhost:5005/projects";

  useEffect(() => {
    const source = axios.CancelToken.source();

    axios
      .get(URI, { cancelToken: source.token })
      .then((response) => response.data)
      .then((data) => setWork(data));
  }, []);

  console.log(work);

  return (
    <>
      <Header />
      <div className="flex flex-col items-start justify-center min-h-screen mr-[60px] mt-[150px] ml-[60px]">
        <div className="flex items-end justify-between w-full border-b-2 pb-4 border-black ">
          <h1 className="text-[80px] font-bold z-10 -mb-7">Work</h1>
          <p className="text-[20px] ">02</p>
        </div>

        <div className="w-full">
          <ul>
            {work.map((project) => {
              return (
                <li className="" key={project.id}>
                  <div className="flex flex-row justify-between text-[30px] items-center border-b-2 pb-6 pt-6 border-black">
                    <div className="flex flex-row gap-3 items-center">
                      <Image src={arrowRight} alt="arrow" />
                      <div className="text-bold font-medium">
                        {project.projectName}
                      </div>
                    </div>
                    <div>{project.stack}</div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
