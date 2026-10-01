import type { Coffee } from "../types";
import { MyCard } from "./MyCard";

interface MyListProps {
  items: Coffee[];
}

export function MyList({ items }: MyListProps) {
  return (
    <div>
      {items.map((coffee) => (
        <MyCard
          key={coffee.id}
          name={coffee.name}
          price={coffee.price}
          isSpecial={coffee.price > 30}
        />
      ))}
    </div>
  );
}
