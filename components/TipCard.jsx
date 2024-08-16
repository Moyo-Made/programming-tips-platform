export default function TipCard({ tip }) {
	return (
		<div className=" bg-white shadow overflow-hidden sm:rounded-lg mb-4 w-[20rem] h-[17rem]">
			<div className="px-4 py-5 sm:px-6">
				<h3 className="text-lg leading-6 font-semibold text-gray-900">
					{tip.title}
				</h3>
			</div>
			<div className="border-t border-gray-200 px-4 py-5 sm:p-0">
				<dl className="sm:divide-y sm:divide-gray-200">
					<div className="md:w-[27rem] py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<span className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
							{tip.description}
						</span>
					</div>
				</dl>
				<button
					className="md:pl-5 md:mt-1 max-w-2xl text-sm blue_gradient"
				
				>
					{tip.language}
				</button>
			</div>
		</div>
	);
}
