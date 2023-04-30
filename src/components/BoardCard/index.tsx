import Image from "next/image";
import Link from "next/link";

// Components
import Button from "@/components/Button";

const members = [
  {
    id: "1",
  },
  {
    id: "2",
  },
  {
    id: "3",
  },
  {
    id: "4",
  },
  {
    id: "5",
  },
  {
    id: "6",
  },
  {
    id: "7",
  },
  {
    id: "8",
  },
];

export default function BoardCard() {
  return (
    <article className="bg-slate-50 rounded-md p-4 flex flex-col gap-8">
      <header>
        <h3 className="font-normal text-slate-900">Project's name</h3>
      </header>

      <footer className="flex flex-col gap-2">
        <Button tailwindClasses="w-full bg-transparent border-2 border-red-400 py-2 px-6 rounded-md text-center text-red-400">
            Delete
        </Button>
        <Link
          className="w-full bg-violet-600 py-2 px-6 rounded-md text-slate-100 text-center"
          href="/board"
        >
          View
        </Link>
      </footer>
    </article>
  );
}
