export default function TipCard({ tip }) {
	return (
		<div className="flex flex-row flex-wrap bg-white shadow overflow-hidden sm:rounded-lg mb-4 w-[25rem] h-[15rem]">
			<div className="px-4 py-5 sm:px-6">
				<h3 className="text-lg leading-6 font-semibold text-gray-900">
					{tip.title}
				</h3>
			</div>
			<div className="border-t border-gray-200 px-4 py-5 sm:p-0">
				<dl className="sm:divide-y sm:divide-gray-200">
					<div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<span className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
							{tip.description}
						</span>
					</div>
				</dl>
			</div>
			<p className="mt-1 max-w-2xl text-sm text-gray-500">{tip.language}</p>
		</div>
	);
}
