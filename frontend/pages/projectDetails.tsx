import { Inter } from "@next/font/google";
import Header from "@/components/Header";
import Link from "next/link";
import Footer from "@/components/Footer";

import axios from "axios";
import Image from "next/image";
import ButtonOut from "@/components/ButtonOut";

const inter = Inter({ subsets: ["latin"] });

export default function ProjectDetails() {
  return (
    <>
      <Header />
      <div className="mt-[150px]">
        <div>
          <Image src={} alt="project image" className="w-screen h-auto" />
        </div>
        <div className="mr-[60px] ml-[60px]">
          <h1 className="not-italic font-bold text-[80px]">{projectName}</h1>
        </div>
        <div className="flex flex-row justify-between items-center">
          <p className="not-italic font-light text-3xl text-right text-black">
            {description}
          </p>
          <div className="border-r-2 pb-4 border-black" />
          <div>
            <div>
              <p className="font-bold text-3xl text-[#0C26CD]">Year</p>
              <p className="not-italic font-light text-3xl text-right text-black">
                {year}
              </p>
            </div>
            <div>
              <p className="font-bold text-3xl text-[#0C26CD]">Client</p>
              <p className="not-italic font-light text-3xl text-right text-black">
                {client}
              </p>
            </div>
            <div>
              <p className="font-bold text-3xl text-[#0C26CD]">Project</p>
              <p className="not-italic font-light text-3xl text-right text-black">
                {projectType}
              </p>
            </div>
            <div>
              <p className="font-bold text-3xl text-[#0C26CD]">Stack</p>
              <p className="not-italic font-light text-3xl text-right text-black">
                {stack}
              </p>
            </div>
          </div>
          <div className="flex flex-row">
            <Link href={repoLink}>
              <ButtonOut label="View the repo" />
            </Link>
            <Link href={siteLink}>
              <ButtonOut label="View it live" />
            </Link>
          </div>
        </div>
      </div>
      <div className="">
        {array.forEach((photo) => {
          <div>
            <Image src={photo.url} alt="image project" />
          </div>;
        })}
      </div>
      <Footer />
    </>
  );
}
