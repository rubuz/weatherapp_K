import { IoSearch } from "react-icons/io5";

import { SearchBarProps } from "../types";

const SearchBar = ({
  inputValue,
  handleChange,
  handleKeyPress,
  handleSearch,
  setInputValue,
  error,
  emptyError,
}: SearchBarProps) => {
  return (
    <>
      <div className="relative flex w-full items-center justify-between gap-2">
        <input
          type="text"
          name="city"
          placeholder="Search for a city"
          className="h-10 w-full rounded-2xl px-4 text-xl font-semibold placeholder-slate-300 shadow-sm placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-apricot"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          onClick={() => setInputValue("")}
        />
        <IoSearch
          className="absolute right-0 z-20 h-10 w-10 rounded-full bg-transparent p-2 transition-all duration-100 hover:cursor-pointer hover:text-violet"
          onClick={handleSearch}
        />
      </div>

      {/* ERROR */}
      {emptyError ? (
        <p className="error-msg">Field must not be empty</p>
      ) : error ? (
        <p className="error-msg">{error.message}</p>
      ) : null}
    </>
  );
};

export default SearchBar;
