import { Image } from "./base";

export interface CVLine {
    title: string,
    body: string
}

export interface CVSection {
    title: string,
    lines: CVLine[]
}

export interface CV {
    name: string,
    icon?: Image,
    personalInfo: CVLine[],
    sections: CVSection[],
}