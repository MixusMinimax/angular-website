export interface ProjectCard {
    title: string,
    preview: string,
    trailer?: string,
    description: { short: string, full: string },
    gallery: { title: string, description: string, url: string }[]
    links?: {
        code?: string,
        game?: string,
    }
}