import React, { useEffect, useState } from 'react';

interface DropdownCategoryProps {
  onSelectCategory: (category: string) => void;
}



const DropdownCategory: React.FC<DropdownCategoryProps> = ({onSelectCategory}) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    onSelectCategory(category); // Call the onSelectCategory prop to notify the parent component

  };

  useEffect(() => {
    if (selectedCategory) {
      const timer = setTimeout(() => {
        setSelectedCategory('');
      }, 2000);

      return () => clearTimeout(timer); // Clear the timeout when the component unmounts or when selectedCategory changes
    }
  }, [selectedCategory]);


  return (
 
   <div>
    {selectedCategory && (
    <div className="alert alert-success" style={{ width: '300px', height: '100px' }}>
	<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path fillRule="evenodd" clipRule="evenodd" d="M24 4C12.96 4 4 12.96 4 24C4 35.04 12.96 44 24 44C35.04 44 44 35.04 44 24C44 12.96 35.04 4 24 4ZM18.58 32.58L11.4 25.4C10.62 24.62 10.62 23.36 11.4 22.58C12.18 21.8 13.44 21.8 14.22 22.58L20 28.34L33.76 14.58C34.54 13.8 35.8 13.8 36.58 14.58C37.36 15.36 37.36 16.62 36.58 17.4L21.4 32.58C20.64 33.36 19.36 33.36 18.58 32.58Z" fill="#00BA34" />
	</svg>
	<div className="flex flex-col">
		<span>Succes</span>
		<span className="text-content2">You have selected: {selectedCategory}</span>
	</div>
</div>
    )}
  

    <div className="dropdown" style={{ position: "fixed", top: 100, right: 30 }}>
      <label className="btn btn-solid-primary my-2 category-button" tabIndex={0}>
        Category: {selectedCategory}
      </label>
      <div className="dropdown-menu">
        <a
          className="dropdown-item text-sm"
          onClick={() => handleCategoryChange("Tech")}
        >
          Tech
        </a>
        <a
          tabIndex={-1}
          className="dropdown-item text-sm"
          onClick={() => handleCategoryChange("Sport")}
        >
          Sport
        </a>
        <a
          tabIndex={-1}
          className="dropdown-item text-sm"
          onClick={() => handleCategoryChange("Politics")}
        >
          Politics
        </a>
      </div>
    </div>
    </div>
  );

};

export { DropdownCategory };
