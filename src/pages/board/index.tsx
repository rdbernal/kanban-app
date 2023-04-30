// Components
import Column from "@/components/Column";

export default function Board() {
  return (
    <section className="bg-slate-200">
      <section className="min-h-[calc(100vh-5.75rem)] max-w-screen-2xl mx-auto py-8 px-4 flex flex-col gap-12">
        <header>
          <h1 className="text-xl font-semibold text-violet-900 text-center">
            Project Name
          </h1>
        </header>

        <main>
          <div className="flex gap-4 overflow-x-auto lg:grid-cols-3">
            <div className="flex flex-col gap-8 min-w-[calc(100%-1.5rem)] lg:min-w-0">
              <h2 className="text-lg font-semibold">To-do</h2>
              <Column />
            </div>
            <div className="flex flex-col gap-8 min-w-[calc(100%-1rem)] lg:min-w-0">
              <h2 className="text-lg font-semibold">In progress</h2>
              <Column />
            </div>
            <div className="flex flex-col gap-8 min-w-[calc(100%-1rem)] lg:min-w-0">
              <h2 className="text-lg font-semibold">Done</h2>
              <Column />
            </div>
          </div>
        </main>
      </section>
    </section>
  );
}
