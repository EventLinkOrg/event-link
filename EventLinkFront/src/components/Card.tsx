import React from 'react';

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, title, description }) => {
  return (
    <div className="card card-image-cover">
      <img src={imageUrl} alt="" />
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
