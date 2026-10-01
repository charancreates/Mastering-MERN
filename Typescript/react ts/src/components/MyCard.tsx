interface CardProp {
  name: string;
  price: number;
  isSpecial?: boolean;
}

export function MyCard({ name, price, isSpecial = false }: CardProp) {
  return (
    <article>
      <h2>
        {name}
        {isSpecial && <span>⭐</span>}
      </h2>
      <p>{price}</p>
    </article>
  );
}
