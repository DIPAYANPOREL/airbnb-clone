"use client";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div
      className="border-[1px]
        w-full
        md:w-auto
        py-2
        rounded-full
        shadow-sm
        hover:shadow-md
        transition
        cursor-pointer
        "
    >
      <div
        className="flex
      flex-row
      items-center
      justify-between"
      >
        <div
          className="text-sm
            font-semibold
            px-6"
        >
          Anywhere
        </div>
        <div
          className="
        hidden
        sm:block
        text-sm
        font-semibold
        px-6
        border-x-[1px]
        flex-1
        text-center"
        >
          Anyweek
        </div>
        <div
          className="
        text-sm
        pl-6
        pr-6
        text-gray-600
        flex
        flex-row
        items-center
        gap-3"
        >
          <div
            className="hidden
          sm:block
          "
          >
            Add Guests
          </div>
          <div
            className="
            flex
          
          bg-rose-full
          rounded-full
          text-white"
          >
            <img 
            className="w-4 h-4"
            src="/images/search.png" alt="search logo"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
