import Link from "next/link";

export default function MenuPage() {
  const items = [
    { id: "1", name: "Margherita Pizza", price: 299 },
    { id: "2", name: "Paneer Burger", price: 199 },
  ];

  return (
    <main>
      <h1>Menu</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link href={`/menu/${item.id}`}>
              {item.name} - ₹{item.price}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
