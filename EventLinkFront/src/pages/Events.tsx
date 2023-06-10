import React, { useState } from 'react';
import { Card } from "../components/Card";
import { DropdownCategory } from "../components/DropdownCategory";

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      {/* {selectedCategory && <SuccesAlert selectedCategory={selectedCategory} />} */}
      <DropdownCategory onSelectCategory={handleCategoryChange} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 mt-7">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export { Events };

