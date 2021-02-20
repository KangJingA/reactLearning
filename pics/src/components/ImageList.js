import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';


const ImageList = (props) => {

    // return image tag for each image inside the array
    // id should be assigned to the root tag
    // destructure out the variables
    const images = props.images.map((image) => {
        return (<ImageCard key = {image.id} image={image}></ImageCard>)
    })

    return (<div className = "image-list">{images}</div>)
}

export default ImageList;