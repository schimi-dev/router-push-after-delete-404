import { addItemAction } from "@/actions";
import { getItems } from "@/db";
import Link from "next/link";

export default async function ItemList() {
  const items = await getItems();

  return (
    <main>
      <h1>Items</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link href={`/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
      {items.length === 0 && <p>No Items</p>}
      <h2>Add Item</h2>
      <form action={addItemAction}>
        <input name="name" />
        <button type="submit">Add</button>
      </form>
    </main>
  );
}
