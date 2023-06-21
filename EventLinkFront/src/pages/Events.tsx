import React, { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { DropdownCategory } from "../components/DropdownCategory";
import { NotFound } from "../components/NotFound"; // Import the NotFound component
import { useEvents } from "../redux/events/useEvents";
import { Pagination } from "../components/Pagination";
import { useSearchParams } from "react-router-dom";

const Events = () => {
  const { get, response } = useEvents();

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    get({ params: searchParams });
  }, [get, searchParams]);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const onCurrentClick = (input: string) => {
    response && searchParams.set("page", (parseInt(input) - 1).toString());

    // Update the query parameters
    setSearchParams(searchParams);
  };

  const onNextClick = () => {
    response && searchParams.set("page", (response?.page + 1).toString());

    // Update the query parameters
    setSearchParams(searchParams);
  };

  const onPrevClick = () => {
    response && searchParams.set("page", (response?.page - 1).toString());

    // Update the query parameters
    setSearchParams(searchParams);
  };

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
      description: "Are you looking to increase your productivity at work?",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x200",
      title: "Positive",
      description: "Are you looking to increase your productivity at work?",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x200",
      title: "Positive",
      description: "Are you looking to increase your productivity at work?",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x200",
      title: "Positive",
      description: "Are you looking to increase your productivity at work?",
    },
  ];

  // Filter the cards based on the search term
  const filteredCards = cardsData.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* {selectedCategory && <SuccesAlert selectedCategory={selectedCategory} />} */}
      <DropdownCategory onSelectCategory={handleCategoryChange} />
      <div className="search-box">
        <input
          className="search"
          style={{
            width: "350px",
            height: "40px",
            marginLeft: "40px",
            padding: "10px",
            border: "1px solid",
            borderRadius: "5px",
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
          {response?.data.map((card, index) => (
            <Card
              key={index}
              image={card.img}
              title={card.title}
              description={card.textContent}
            />
          ))}
        </div>
      )}
      {response && (
        <div className="card-body">
          <Pagination
            onPrev={onPrevClick}
            onNext={onNextClick}
            onClick={onCurrentClick}
            totalPages={response.total}
            page={response?.page! + 1}
          />
        </div>
      )}
    </div>
  );
};

export { Events };
