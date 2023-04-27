import Image from "next/image";

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
  }
];

export default function Board() {
  return (
    <article className="bg-slate-50 rounded-md p-4 flex flex-col gap-8">
      <header>
        <h3 className="font-normal text-slate-900">Project name</h3>
      </header>

      <main className="flex align-center relative gap-1">
        {members.map((member, index) => (
          <Image
            key={member.id}
            src="/user.png"
            width="35"
            height="35"
            alt="Profile picture"
            className="rounded-full bg-violet-200"
          />
        ))}
      </main>

      <footer>
        <Button tailwindClasses="w-full bg-violet-600 py-2 px-6 rounded-md text-slate-100">
          Edit
        </Button>
      </footer>
    </article>
  );
}
