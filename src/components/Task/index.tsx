import Image from "next/image";

// Components
import Button from "@/components/Button";

export default function Task() {
  return (
    <article className="bg-slate-50 rounded-md p-4 flex flex-col gap-4">
      <header>
        <h4 className="font-semibold">Task's name</h4>
      </header>

      <main className="flex flex-col gap-2">
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, animi?
        </span>

        <span>
          <Image
            src="/user.png"
            width="35"
            height="35"
            alt="Profile picture"
            className="rounded-full bg-violet-200"
          />
        </span>
      </main>

      <footer className="flex align-center gap-2">
        <Button tailwindClasses="w-full bg-transparent border-2 border-red-400 py-2 px-6 rounded-md text-center text-red-400">
          Delete
        </Button>
        <Button tailwindClasses="w-full bg-violet-600 py-2 px-6 rounded-md text-slate-100 text-center">
          Edit
        </Button>
      </footer>
    </article>
  );
}
