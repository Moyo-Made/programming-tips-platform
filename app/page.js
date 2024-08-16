"use client";

import Hero from "@/components/Hero";
import TipFeed from "@/components/TipFeed";
import { useEffect, useState } from "react";

const page = () => {
	const [tips, setTips] = useState([]);

	useEffect(() => {
		// Fetch tips from localStorage when the component mounts
		const storedTips = JSON.parse(localStorage.getItem("tips") || "[]");
		setTips(storedTips);
	}, []);

	return (
		<div className="">
			<Hero />
			<TipFeed tips={tips} />
   
		</div>
	);
};

export default page;
