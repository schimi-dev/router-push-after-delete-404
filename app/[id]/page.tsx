import { getItems } from "@/db";
import { notFound } from "next/navigation";
import DeleteItemFormWithBug from "./DeleteItemFormWithBug";
import { deleteItemAction } from "@/actions";

export default async function ItemDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const items = await getItems();

  const item = items.find((r) => r.id === id);

  if (!item) {
    console.log(
      "Not found - This should not be logged when deleting an item and navigating away"
    );
    notFound();
  }

  return (
    <main>
      <h1>{item.name}</h1>
      <DeleteItemFormWithBug id={item.id} />
      <form
        action={
          deleteItemAction.bind(null, item.id, true) // Perform server-side redirect
        }
      >
        <button type="submit">
          Delete with server-side redirect - Works fine
        </button>
      </form>
    </main>
  );
}
