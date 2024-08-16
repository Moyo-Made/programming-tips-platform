import TipCard from "./TipCard";
import { tips } from "@/lib/mockData";

export default function TipList() {
	return (
		<div className="flex flex-wrap justify-center gap-5 px-10 mt-5">
			{tips.map((tip) => (
				<TipCard key={tip.id} tip={tip} />
			))}
		</div>
	);
}
