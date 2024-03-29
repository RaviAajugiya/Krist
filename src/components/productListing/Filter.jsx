import React, { useEffect, useState } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { useSearchParams } from "react-router-dom";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

function Filter({ title, items }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isItemVisible, setIsItemVisible] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([10, 500]);

  useEffect(() => {
    const categories = searchParams.getAll("category");
    setSelectedCategories(categories);

    const minPrice = parseFloat(searchParams.get("minPrice")) || 10;
    const maxPrice = parseFloat(searchParams.get("maxPrice")) || 500;
    setPriceRange([minPrice, maxPrice]);
  }, []);

  
  const handleCheckboxChange = (itemId) => {
    const updatedCategories = selectedCategories.includes(itemId)
      ? selectedCategories.filter((id) => id !== itemId)
      : [...selectedCategories, itemId];

    const categoryParam =
      updatedCategories.length > 0 ? updatedCategories.join(",") : undefined;

    const params = {
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
    };

    if (categoryParam) {
      params.category = categoryParam;
    }

    setSearchParams(params, { replace: true });
    setSelectedCategories(updatedCategories);
  };

  const handlePriceRangeChange = (value) => {
    setPriceRange(value);
  };
  
  const handlePriceRangeDragEnd = () => {
    setSearchParams(
      {
        category: selectedCategories.join(","),
        minPrice: priceRange[0],
        maxPrice: priceRange[1],
      },
      { replace: true }
    );
    console.log("Price range drag end");
  };

  return (
    <>
      <div className="flex w-full flex-col p-3 text-primary-color">
        <div
          onClick={() => setIsItemVisible(!isItemVisible)}
          className="flex justify-between items-center cursor-pointer">
          <h3 className="text-lg font-semibold">{title}</h3>
          {isItemVisible ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </div>
        {isItemVisible && (
          <div className="flex flex-col mt-2">
            {items?.map((item) => (
              <div className="flex gap-2" key={item._id}>
                <input
                  type="checkbox"
                  name={item.name}
                  id={item._id}
                  checked={selectedCategories.includes(item._id)}
                  onChange={() => handleCheckboxChange(item._id)}
                />
                <label htmlFor={item._id}>{item.name}</label>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="p-3 text-primary-color">
        <h3 className="text-lg font-semibold mb-2">Filter by Price</h3>
        <p className="mb-4">
          price: ${priceRange[0]} - ${priceRange[1]}
        </p>
        <RangeSlider
          name="priceRange"
          min={10}
          max={500}
          step={50}
          defaultValue={priceRange}
          value={priceRange}
          onInput={handlePriceRangeChange}
          onThumbDragEnd={handlePriceRangeDragEnd}
          className='max-w-[220px]'
        />
      </div>
    </>
  );
}

export default Filter;
