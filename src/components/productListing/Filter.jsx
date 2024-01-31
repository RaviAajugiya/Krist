import React, { useEffect, useState } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { useSearchParams } from "react-router-dom";

function Filter({ title, items }) {
  const [isItemVisible, setIsItemVisible] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (e) => {
    const itemName = e.target.id;

    setSelectedCategories((prevCategories) => {
      const isItemSelected = prevCategories.includes(itemName);

      if (isItemSelected) {
        return prevCategories.filter((category) => category !== itemName);
      } else {
        return [...prevCategories, itemName];
      }
    });
  };

  const searchParamsObject = Object.fromEntries(searchParams);


  useEffect(() => {
    setSearchParams({})
    if (selectedCategories.length !== 0) {
      setSearchParams((prevCategories) => {
        return { ...prevCategories, categoryId: selectedCategories.join(",") };
      });
    }
  }, [selectedCategories]);

  return (
    <>
      <div className="flex w-full flex-col p-3 text-primary-color">
        <div
          onClick={() => setIsItemVisible(!isItemVisible)}
          className="flex justify-between items-center cursor-pointer"
        >
          <h3 className="text-lg font-semibold">{title}</h3>
          {isItemVisible ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </div>
        {isItemVisible ? (
          <div className="flex flex-col mt-2">
            {items?.map((item) => (
              <div className="flex gap-2" key={item._id}>
                <input
                  type="checkbox"
                  name={item.name}
                  id={item._id}
                  checked={selectedCategories.includes(item._id)}
                  onChange={(e) => handleChange(e)
                  }
                />
                <label htmlFor={item._id}>{item.name}</label>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Filter;
