"use client";

import { deleteItemAction } from "@/actions";
import { useRouter } from "next/navigation";

export default function DeleteItemFormWithBug({ id }: { id: string }) {
  const { push } = useRouter();

  return (
    <form
      action={async () => {
        await deleteItemAction(id, false); // Don't perform server-side redirect
        push("/"); // Navigate client-side
      }}
    >
      <button type="submit">Delete with client-side router.push - Bug</button>
    </form>
  );
}
