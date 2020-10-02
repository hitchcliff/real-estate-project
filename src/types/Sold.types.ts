import { PropertiesSale } from './Sale.types';

export interface PropertiesSold extends PropertiesSale {
  photos: SoldPhotos[];
}

export interface SoldPhotos {
  href: string;
}
