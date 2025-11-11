import { notFound } from "next/navigation";

interface Item {
  id: string;
  name: string;
  price: number;
  desc: string;
}

const items: Item[] = [
  { id: "1", name: "Margherita Pizza", price: 299, desc: "Classic cheesy delight" },
  { id: "2", name: "Paneer Burger", price: 199, desc: "Spicy paneer patty with cheese" },
];

export default function ItemPage({ params }: { params: { itemId: string } }) {
  const item = items.find((i) => i.id === params.itemId);

  if (!item) return notFound(); // this triggers 404 if not matched

  return (
    <div style={{ padding: "1rem" }}>
      <h1>{item.name}</h1>
      <p>₹{item.price}</p>
      <p>{item.desc}</p>
    </div>
  );
}
