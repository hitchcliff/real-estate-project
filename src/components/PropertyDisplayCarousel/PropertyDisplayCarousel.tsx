import React from 'react';
import './PropertyDisplayCarousel.scss';

// carousel
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

interface IHomesDisplayCarouselProp<T> {
  images: T[]; // expect an array
  alt: string;
  thumbs: boolean;
  showArrows?: boolean;
  showStatus?: boolean;
}

const PropertyDisplayCarousel = <T,>(
  props: IHomesDisplayCarouselProp<T>,
): JSX.Element => {
  const { images, alt, thumbs, showArrows } = props;
  if (!images || !alt) return <></>;
  const _images: T[] | unknown = images.slice(0, 5); // get images between 0 til 5 array

  const values = []; // container

  // check if the images is array
  if (!Array.isArray(_images)) return <></>;

  for (const image of _images) {
    // check if href exist
    if (image) {
      values.push(image.href);
    } else {
      values.push(Object.values(image)[0]); // push values in container
    }
  }

  return (
    <Carousel showThumbs={thumbs} showArrows={false} showStatus={false}>
      {values.map((value: any, i) => (
        <div key={i}>
          <img src={value} alt={alt} />
        </div>
      ))}
    </Carousel>
  );
};

export default PropertyDisplayCarousel;
