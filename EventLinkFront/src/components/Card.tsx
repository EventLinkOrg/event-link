import React, { useMemo } from "react";
import { Image } from "../redux/events/events.slice";
import { is_expired } from "../utils/date";

interface CardProps {
  image: Image;
  title: string;
  description: string;
  tickets: number;
  endDate: string;
  onClick: () => void;
  loading?: boolean;
}

const Card: React.FC<CardProps> = ({
  loading = true,
  image,
  title,
  description,
  tickets,
  endDate,
  onClick,
}) => {
  const imageData = useMemo(() => {
    if (image) {
      const binaryData = image.data.data; // get the binary data from the blog object
      const typedArray = new Uint8Array(binaryData); // create a typed array from the binary data
      const blob = new Blob([typedArray], { type: image.contentType }); // create a blob object with the typed array and content type
      return URL.createObjectURL(blob); // create a URL for the blob object and set it as the image source
    }
    return undefined; // return the
  }, [image]);

  return (
    <div className="card card-image-cover">
      {loading ? (
        <div className="skeleton h-64 card-body"></div>
      ) : (
        <img
          src={imageData || "https://source.unsplash.com/random/300x200"}
          alt=""
        />
      )}

      <div className="card-body">
        <h2 className="card-header">
          {title}{" "}
          {is_expired(endDate) && (
            <span className="badge badge-outline-error">Expired</span>
          )}
        </h2>
        <p className="text-content2">{description}</p>
        <div className="card-footer">
          <p className="text-content2">Tickets left: {tickets}</p>
          <button
            className="btn-secondary btn"
            disabled={is_expired(endDate)}
            onClick={onClick}
          >
            Purchase Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export { Card };
