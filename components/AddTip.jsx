"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const AddTip = ({ addTip }) => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [language, setLanguage] = useState("");
	const router = useRouter();

	const handleSubmit = (e) => {
		e.preventDefault();

		const newTip = {
			id: Date.now(),
			title,
			description,
			language,
		};

		addTip(newTip);

		// Reset form fields
		setTitle("");
		setDescription("");
		setLanguage("");

		// Navigate back to home page
		router.push("/");
	};

	return (
		<div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
				<form onSubmit={handleSubmit} className="space-y-6 p-6">
					<div>
						<h2 className="text-2xl font-bold text-gray-900 mb-4">
							Add a New Programming Tip
						</h2>
						<div className="space-y-4">
							<div>
								<label
									htmlFor="title"
									className="block text-sm font-medium text-gray-700"
								>
									Title
								</label>
								<input
									type="text"
									name="title"
									id="title"
									placeholder="Title"
									value={title}
									onChange={(e) => setTitle(e.target.value)}
									required
									className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								/>
							</div>

							<div>
								<label
									htmlFor="description"
									className="block text-sm font-medium text-gray-700"
								>
									Description
								</label>
								<textarea
									id="description"
									name="description"
									rows={4}
									value={description}
									onChange={(e) => setDescription(e.target.value)}
									required
									className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								/>
							</div>

							<div>
								<label
									htmlFor="language"
									className="block text-sm font-medium text-gray-700"
								>
									Programming Language
								</label>
								<input
									id="language"
									name="language"
									placeholder="Language"
									value={language}
									onChange={(e) => setLanguage(e.target.value)}
									required
									className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
								></input>
							</div>
						</div>
					</div>

					<div>
						<button
							type="submit"
							className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						>
							Add Tip
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddTip;
