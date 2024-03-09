import React from "react"

const SearchBar = () => {
  return (
    <input
      type="search"
      id="search"
      placeholder="search..."
      className="px-2 py-1 rounded-md dark:shadow-white shadow-gray-400  shadow-sm focus:outline-2 dark:bg-gray-700"
    />
  )
}

export default SearchBar
