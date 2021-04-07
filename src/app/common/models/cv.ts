import { Image } from "./base";

export interface Image_old {
    fields: {
        file: {
            url: string
        }
    }
}

export interface CVLine {
    title: string,
    body: string
}

export interface CVSection {
    title: string,
    lines: CVLine[]
}

export interface CV_old {
    icon?: Image_old,
    name: string,
    personalInfo: CVLine[],
    sections: CVSection[]
}

export interface CV {
    name: string,
    icon?: Image,
    summary: string,
    content: string
}