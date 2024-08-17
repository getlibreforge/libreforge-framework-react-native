import { LocalImageManager } from "./LocalImageManager";

export class DefaultLocalImageManager extends LocalImageManager {

    getImageSource = (uri: string) => {
        return { uri }
    }
}