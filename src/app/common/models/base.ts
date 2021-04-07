import { Asset } from "contentful"

export class Image {
    title: string
    description: string
    url: string

    constructor(image: Image) {
        this.title = image.title
        this.description = image.description
        this.url = image.url
    }

    static fromAsset(asset?: Asset): Image | null {
        return asset ? new Image({
            title: asset.fields.title,
            description: asset.fields.description,
            url: asset.fields.file.url
        }) : null;
    }
}