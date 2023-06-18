import React, { useMemo } from "react";
import { Image } from "../redux/events/events.slice";

interface CardProps {
  image: Image;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ image, title, description }) => {
  const imageData = useMemo(() => {
    if (image) {
      const binaryData = image.data.data; // get the binary data from the blog object
      const typedArray = new Uint8Array(binaryData); // create a typed array from the binary data
      const blob = new Blob([typedArray], { type: "image/jpeg" }); // create a blob object with the typed array and content type
      return URL.createObjectURL(blob); // create a URL for the blob object and set it as the image source
    }
    return undefined; // return the
  }, [image]);

  return (
    <div className="card card-image-cover">
      <img
        src={imageData || "https://source.unsplash.com/random/300x200"}
        alt=""
      />
      <div className="card-body">
        <h2 className="card-header">{title}</h2>
        <p className="text-content2">{description}</p>
        <div className="card-footer">
          <button className="btn-secondary btn">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export { Card };
