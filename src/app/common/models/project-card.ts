import { Image } from "./base";

export interface ProjectCard {
    title: string,
    preview: string,
    trailer?: string,
    description: { short: string, full: string },
    gallery: Image[]
    links?: {
        code?: string,
        game?: string,
    }
}