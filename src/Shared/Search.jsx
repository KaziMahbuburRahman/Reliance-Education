import React from "react";

// react icons

const Search = () => {
  return (
    <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
      {/* search input with search text button */}
      <div className="w-full md:w-[60%] relative">
        <input
          type="text"
          placeholder="Find Courses Here..."
          className="border bg-white border-border py-3 pl-4 pr-[65px] outline-none w-full rounded-md"
        />

        <span className="bg-[#DC3127] text-white absolute top-0 right-0 h-full px-5 flex items-center justify-center rounded-r-md cursor-pointer hover:bg-gray-400 hover:text-gray-200">
          Search
        </span>
      </div>
    </div>
  );
};

export default Search;
