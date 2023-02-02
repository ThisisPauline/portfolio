import { createContext } from "react";

export interface Work {
    id:number;
    projectName:string;
    Stack:string;
    year:number;
    client:string;
    projectType:string;
    description:string;
    repoLink:string;
    siteLink:string;
    url:string;
}

export const WorkContext = createContext<Work | undefined>(undefined);
