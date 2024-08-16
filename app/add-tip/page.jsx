"use client";

import { useState, useEffect } from "react";
import AddTip from "@/components/AddTip";
import { tips as initialTips } from "@/lib/mockData";
import TipFeed from "@/components/TipFeed";

const AddTipPage = () => {
	const [tips, setTips] = useState([]);

	useEffect(() => {
		// Load tips from localStorage when the component mounts
		const storedTips = localStorage.getItem("tips");
		if (storedTips) {
			setTips(JSON.parse(storedTips));
		} else {
			setTips(initialTips);
		}
	}, []);

	const addTip = (newTip) => {
		const updatedTips = [newTip, ...tips];
		setTips(updatedTips);
		// Save to localStorage
		localStorage.setItem("tips", JSON.stringify(updatedTips));
	};

	return (
		<div>
			<AddTip addTip={addTip} />
		</div>
	);
};

export default AddTipPage;
