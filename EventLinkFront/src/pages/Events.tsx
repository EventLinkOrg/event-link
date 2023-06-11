import React, { useState } from 'react';
import { Card } from "../components/Card";
import { DropdownCategory } from "../components/DropdownCategory";
import { NotFound } from "../components/NotFound"; // Import the NotFound component


const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const cardsData = [
    {
      imageUrl: "https://source.unsplash.com/random/300x200",
      title: "Hello Your Productivity at Work",
      description: "Are you looking to increase your productivity at work?"
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x200",
      title: "Positive",
      description: "Are you looking to increase your productivity at work?"
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x200",
      title: "Positive",
      description: "Are you looking to increase your productivity at work?"
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x200",
      title: "Positive",
      description: "Are you looking to increase your productivity at work?"
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x200",
      title: "Positive",
      description: "Are you looking to increase your productivity at work?"
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x200",
      title: "EventLink",
      description: "Are you looking to increase your productivity at work?"
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x200",
      title: "EventLink",
      description: "Are you looking to increase your productivity at work?"
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x200",
      title: "EventLink",
      description: "Are you looking to increase your productivity at work?"
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x200",
      title: "ss Your Productivity at Work",
      description: "Are you looking to increase your productivity at work?"
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x200",
      title: "EventLink",
      description: "Are you looking to increase your productivity at work?"
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x200",
      title: "ss Your Productivity at Work",
      description: "Are you looking to increase your productivity at work?"
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x200",
      title: "ss Your Productivity at Work",
      description: "Are you looking to increase your productivity at work?"
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x200",
      title: "ss Your Productivity at Work",
      description: "Are you looking to increase your productivity at work?"
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x200",
      title: "ss Your Productivity at Work",
      description: "Are you looking to increase your productivity at work?"
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x200",
      title: "ss Your Productivity at Work",
      description: "Are you looking to increase your productivity at work?"
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x200",
      title: "ss Your Productivity at Work",
      description: "Are you looking to increase your productivity at work?"
    },
  ];

  // Filter the cards based on the search term
  const filteredCards = cardsData.filter(card =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* {selectedCategory && <SuccesAlert selectedCategory={selectedCategory} />} */}
      <DropdownCategory onSelectCategory={handleCategoryChange} />
      <div className="search-box">
        <input className="search" style={{ 
         width: '350px',
         height: '40px',
         marginLeft: '40px',
         padding: '10px',
         border: '1px solid',
         borderRadius: '5px' 
        }}
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      {filteredCards.length === 0 ? (
       <NotFound />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 mt-7">
          {filteredCards.map((card, index) => (
            <Card
              key={index}
              imageUrl={card.imageUrl}
              title={card.title}
              description={card.description}
            />
          ))}
      </div>
      )}
    </div>
  );
};

export { Events };
