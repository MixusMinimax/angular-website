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
    icon?: string,
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
