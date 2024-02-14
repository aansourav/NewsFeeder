import { useContext, useState } from "react";
import CloseIcon from "../assets/icons/close.svg";
import SearchIcon from "../assets/icons/search.svg";
import { NewsContext } from "../context/newsContext";
import { debounce } from "../utils/debounceControl";
import useNewsQuery from "../hooks/useNewsQuery";
import fetchNewsData from "../utils/fetchNewsData";

const SearchBox = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const { setData } = useContext(NewsContext);
  const { fetchAPI } = useNewsQuery();

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setSearchText("");
  };

  const handleOnChange = async (e) => {
    const term = e.target.value;
    setSearchText(term);
    if (term) {
      debounce(async function () {
        const data = await fetchAPI(`/search?q=${term}`);
        setData(data);
      }, 700);
    } else {
      const newdata = await fetchNewsData();
      setData(newdata);
    }
  };

  return (
    <div className="flex items-center  space-x-3">
      {/* Search Box */}
      <div className={`ml-auto  lg:block ${isSearchOpen ? "visible" : "invisible"}`}>
        <input
          type="search"
          placeholder="Search"
          className="border-none rounded-3xl pl-4 pr-4 py-2 focus:outline-none bg-gray-200 text-sm text-gray-700 shadow-sm"
          value={searchText}
          onChange={handleOnChange}
        />
      </div>

      {/* Search Icon */}
      <button onClick={toggleSearch} className="p-2 rounded-full bg-gray-300 focus:outline-none">
        <img src={isSearchOpen ? CloseIcon : SearchIcon} />
        {/* <img src={CloseIcon} /> */}
      </button>
    </div>
  );
};

export default SearchBox;
