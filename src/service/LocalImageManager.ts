import 'reflect-metadata';
import { injectable } from 'inversify';

export const SYMBOL_LOCAL_IMAGE_MANAGER = 'LocalImageManager';

@injectable()
export abstract class LocalImageManager {

  abstract getImageSource(uri: string): any;
}
