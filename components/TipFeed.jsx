"use client";

import { useState, useEffect } from "react";
import { tips as initialTips } from "@/lib/mockData";
import TipCard from "./TipCard";
import Link from "next/link";

const TipFeed = () => {
	const [searchInput, setSearchInput] = useState("");
	const [filteredTips, setFilteredTips] = useState(initialTips);

	useEffect(() => {
		if (searchInput === "") {
			setFilteredTips(initialTips);
		} else {
			const filtered = initialTips.filter(
				(tip) =>
					tip.title.toLowerCase().includes(searchInput) ||
					tip.description.toLowerCase().includes(searchInput) ||
					tip.language.toLowerCase().includes(searchInput)
			);
			setFilteredTips(filtered);
		}
	}, [searchInput]);

	const handleSearch = (e) => {
		setSearchInput(e.target.value.toLowerCase());
	};

	return (
		<div>
			<div className="flex justify-center">
				<input
					type="text"
					placeholder="Search tips..."
					value={searchInput}
					onChange={handleSearch}
					required
					className="search_input peer"
				/>
			</div>

			<div className="flex flex-wrap justify-center gap-5 px-10 mt-5">
				{filteredTips.length > 0 ? (
					filteredTips.map((tip) => <TipCard key={tip.id} tip={tip} />)
				) : (
					<div className="mt-5">
						<p className="text-[18px]">No tips found.</p>
            <div className="mt-4">
								<Link
									href="/add-tip"
									className="text-gray-500 hover:text-gray-700 black_btn"
								>
									Add Tip
								</Link>
							</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default TipFeed;
