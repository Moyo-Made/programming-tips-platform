import Link from "next/link";

const Layout = ({ children }) => {
	return (
		<div className="">
			<nav className="bg-white shadow-md">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between h-16">
						<div className="flex">
							<div className="mt-5 md:ml-10 ml-2">
								<Link
									href="/"
									className="flex-shrink-0 flex items-center uppercase text-[18px] blue_gradient font-semibold italic"
								>
									Get Programming Tips
								</Link>
							</div>
						</div>
						<div className="flex space-x-10 md:mr-32">
							<div className="mt-5">
								<Link href="/" className="text-gray-500 hover:border-b-gray-800 hover:border-b-2">
									Home
								</Link>
							</div>
							<div className="mt-4">
								<Link
									href="/add-tip"
									className="text-gray-500 hover:text-gray-700 black_btn"
								>
									Add Tip
								</Link>
							</div>
						</div>
					</div>
				</div>
			</nav>
			<main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</main>
		</div>
	);
};

export default Layout;
