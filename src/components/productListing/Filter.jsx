import React, { useId, useState } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

function Filter({ title, items }) {
  const [isIteamVisible, setIsIteamVisible] = useState(false);
  return (
    <>
      <div className="flex w-full flex-col  p-3 text-primary-color">
        <div
          onClick={() => setIsIteamVisible(!isIteamVisible)}
          className="flex justify-between items-center"
        >
          <h3 className="text-lg font-semibold">{title}</h3>
          {isIteamVisible ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </div>
        {isIteamVisible ? (
          <div className="flex flex-col mt-4">
            {items.map((item) => (
              <>
                <div className="flex gap-2">
                  <input type="checkbox" name="" id={item} />
                  <label htmlFor={item}>{item}</label>
                </div>
              </>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Filter;
