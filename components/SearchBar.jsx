"use client";

import { useState } from "react";


const SearchBar = ({ searchText }) => {
	// const [query, setQuery] = useState("");

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	onSearch(query);
	// 	setQuery("");
	// };
	return (
		<div className="w-full">
			{/* <form onSubmit={handleSubmit} className="relative w-full flex-center">
				<input
					type="text"
					placeholder="Search for tips"
					value={searchText}
					onChange={(e) => {
						setQuery(e.target.value);
					}}
					required
					className="search_input peer"
				/>
				<button
					type="submit"
					className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"
				>
					<SearchIcon className="h-5 w-5" aria-hidden="true" />
				</button>
			</form> */}
		</div>
	);
};

export default SearchBar;
