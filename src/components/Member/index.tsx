// Components
import Image from "next/image";
import Button from "@/components/Button";

export default function Member() {
  return (
    <article className="bg-slate-50 rounded-md p-4 flex flex-col gap-2">
      <header className="flex align-center justify-between">
        <h3 className="font-normal text-slate-900">
          Nome Completo do membro
        </h3>
        <Image
          src="/user.png"
          width="35"
          height="35"
          alt="Profile picture"
          className="rounded-full bg-violet-200"
        />
      </header>

      <main className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-normal text-slate-900">E-mail:</label>
          <span className="text-sm font-normal text-slate-900">
            emailteste@gmail.com
          </span>
        </div>

        <div className="flex align-center justify-around">
          <div className="flex flex-col gap-1 w-2/5">
            <label className="text-sm font-semibold text-slate-900 text-center">
              Tasks
            </label>
            <span className="text-center font-bold text-violet-900">8</span>
          </div>
          <div className="flex flex-col gap-1 w-2/5">
            <label className="text-sm font-semibold text-slate-900 text-center">
              Completed
            </label>
            <span className="text-center font-bold text-violet-900">12</span>
          </div>
        </div>
      </main>

      <footer className="mt-4">
        <Button tailwindClasses="w-full bg-violet-600 py-2 px-6 rounded-md text-slate-100">
          Edit
        </Button>
      </footer>
    </article>
  );
}
