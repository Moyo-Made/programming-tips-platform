import Layout from "@/components/Layout";
import TipCard from "@/components/TipCard";
import TipList from "@/components/TipList";

const page = () => {
	return (
		<div className="bg-gray-100 ">
			<Layout />
			<TipList />
		</div>
	);
};

export default page;
