import { cookies } from "next/headers";
import { Item } from "./types";

export const getItems = async () => {
  const cookieStore = await cookies();
  const db = cookieStore.get("db")?.value;

  if (db) return JSON.parse(db) as Item[];

  return [];
};

export const addItem = async (name: string) => {
  const items = await getItems();

  items.push({
    id: crypto.randomUUID(),
    name,
  });

  await setItems(items);
};

export const deleteItem = async (id: string) => {
  const items = await getItems();

  await setItems(items.filter((r) => r.id !== id));
};

const setItems = async (items: Item[]) => {
  const cookieStore = await cookies();
  cookieStore.set("db", JSON.stringify(items));
};
