import { deleteInvoice } from "@/lib/actions";
import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CreateInvoice() {
  return (
    <Button asChild>
      <Link href="/dashboard/invoices/create">
        <span className="hidden md:block">Create Invoice</span>{" "}
        <PlusIcon className="h-5 md:ml-4" />
      </Link>
    </Button>
  );
}

export function UpdateInvoice({ id }: { id: string }) {
  return (
    <Button asChild size={"icon"} variant={"outline"}>
      <Link href={`/dashboard/invoices/${id}/edit`}>
        <PencilIcon />
      </Link>
    </Button>
  );
}

export function DeleteInvoice({ id }: { id: string }) {
  const deleteInvoiceWithId = deleteInvoice.bind(null, id);

  return (
    <form action={deleteInvoiceWithId}>
      <Button type="submit" variant={"destructive"} size={"icon"}>
        <span className="sr-only">Delete</span>
        <TrashIcon />
      </Button>
    </form>
  );
}
