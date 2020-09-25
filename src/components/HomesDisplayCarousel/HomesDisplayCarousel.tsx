import React from 'react'
import './HomesDisplayCarousel.scss'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
interface IHomesDisplayCarouselProp {
    images: Object[],
    alt: string,
    thumbs: boolean,
}

const HomesDisplayCarousel: React.FC<IHomesDisplayCarouselProp> = (props) => {
    const { images, alt, thumbs } = props
    if(!images || !alt) return<></>;
    const _images = images.slice(0, 5); // get images between 0 and 5 array 
    const values = [] // container 
    for(let image of _images) { // loop all sliced images
        values.push(Object.values(image)[0]) // push values in container
    }
    
    return (
       <Carousel showThumbs={thumbs}>
           {values.map((values,i) => (
               <div key={i}>
                   <img src={values} alt={alt} />
               </div>
           ))}
       </Carousel>     
    )
}

export default HomesDisplayCarousel
