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
      <div className="w-full flex items-center justify-between gap-2 relative">
        <input
          type="text"
          name="city"
          placeholder="Search for a city"
          className="rounded-2xl w-full h-10 px-4 text-xl font-semibold focus:outline-none focus:ring-2 focus:ring-apricot shadow-sm placeholder:font-normal placeholder-slate-300"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          onClick={() => setInputValue("")}
        />
        <IoSearch
          className="absolute z-20 right-0 h-10 w-10 bg-transparent p-2 rounded-full hover:text-violet transition-all duration-100 hover:cursor-pointer"
          onClick={handleSearch}
        />
      </div>
      {emptyError ? (
        <p className="error-msg">Field must not be empty</p>
      ) : error ? (
        <p className="error-msg">{error.message}</p>
      ) : null}
    </>
  );
};

export default SearchBar;
