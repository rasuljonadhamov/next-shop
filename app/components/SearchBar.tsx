const SearchBar = () => {
  return (
    <form className="relative my-6 ml-16">
      <div className="absolute z-2 cursor-pointer inset-y-0 start-0 flex items-center ps-3">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          version="1.1"
          id="search"
          x="0px"
          y="0px"
          viewBox="0 0 24 24"
          className="bg-purpleshade-400 p-1 w-7 h-7 text-white rounded-lg "
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              d="M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31
		c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z
		 M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02
		z"
            />
          </g>
        </svg>
      </div>
      <input
        className="block z-1 lg:w-1/3 md:w-2/4 w-full p-4 ps-12 text-sm outline-none text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-purpleshade-400 focus:border-purpleshade-400 dark:bg-grayshade-500 dark:border-grayshade-300 dark:placeholde-grayshade-50 dark:text-black dark:focus:ring-purpleshade-400 dark:focus:border-purpleshade-400"
        placeholder="Search ..."
        defaultValue=""
      />
    </form>
  );
};

export default SearchBar;
