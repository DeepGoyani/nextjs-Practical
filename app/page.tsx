import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ textAlign: "center", padding: "2rem" }}>
      <h1>🍽️ Welcome to Food Order System</h1>
      <p>Order your favorite meal easily.</p>

      <Link
        href="/menu"
        style={{
          display: "inline-block",
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          backgroundColor: "#FAA41F",
          color: "white",
          borderRadius: "8px",
          textDecoration: "none",
        }}
      >
        View Menu
      </Link>
    </main>
  );
}
