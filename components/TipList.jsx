import TipCard from './TipCard';
import { tips } from "@/lib/mockData";

export default function TipList() {

  return (
    <div className='flex flex-wrap gap-10 '>
      {tips.map((tip) => (
        <TipCard key={tip.id} tip={tip} />
      ))}
    </div>
  );
}