"use server";

import { revalidatePath } from "next/cache";
import { addItem, deleteItem } from "./db";
import { redirect } from "next/navigation";

export const addItemAction = async (formData: FormData) => {
  const name = formData.get("name");

  if (!name || typeof name !== "string") return;

  await addItem(name);
  revalidatePath("/");
};

export async function deleteItemAction(
  id: string,
  serverSideRedirect: boolean
) {
  await deleteItem(id);
  revalidatePath("/");

  if (serverSideRedirect) redirect("/");
}
