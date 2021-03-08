export interface Image {
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
    /**
     * @TJS-default []
     */
    lines: CVLine[]
}

export interface CV {
    icon?: Image,
    name: string,
    /**
     * @TJS-default []
     */
    personalInfo: CVLine[],
    /**
     * @TJS-default []
     */
    sections: CVSection[]
}
