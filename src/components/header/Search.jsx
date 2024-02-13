import SearchIcon from "../../assets/icons/search.svg";
const Search = () => {
  return (
    <div className=" flex items-center space-x-3">
      <div className="ml-auto lg:block">
        <input
          type="text"
          className="border-none rounded-3xl pl-4 pr-4 py-2 focus:outline-none bg-gray-200 text-sm text-gray-700 shadow-sm"
          placeholder="Search"
        />
      </div>
      <img src={SearchIcon} />
    </div>
  );
};

export default Search;
