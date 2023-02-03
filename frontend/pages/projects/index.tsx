import { Inter } from "@next/font/google";
import Header from "@/components/Header";
import Link from "next/link";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import arrowRight from "../../assets/arrow-right.svg";
import Image from "next/image";
import BounceLoader from "react-spinners/ClipLoader";

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

  if (work.length == 0) return <BounceLoader />;

  return (
    <>
      <Header />
      <div className="flex flex-col items-start justify-center min-h-screen desktop:mr-[60px] desktop:ml-[180px] mr-[26px] ml-[26px] mt-[150px] ">
        <div className="flex items-end justify-between w-full border-b-2 pb-4 border-black ">
          <h1 className="desktop:text-[80px] font-bold z-10  -mb-3 text-[40px]">
            My projects
          </h1>
          <p className="desktop:text-[20px] font-[100] text-[16px]">02</p>
        </div>

        <div className="w-full">
          <ul>
            {work.map((project) => {
              return (
                <li className="" key={project.id}>
                  <Link href={`/projects/${project.id}`}>
                    <div className="flex flex-col desktop:flex-row justify-between  desktop:text-[30px] text-[20px]items-start desktop:items-center border-b-2 pb-6 pt-6 border-black">
                      <div className="flex flex-row gap-3 items-center">
                        <Image src={arrowRight} alt="arrow" />
                        <div className="text-bold  font-medium">
                          {project.projectName}
                        </div>
                      </div>
                      <div className="desktop:ml-0 font-[100] ml-[36px]">
                        {project.stack}
                      </div>
                    </div>
                  </Link>
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
