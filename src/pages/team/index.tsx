// Components
import CustomInput from "@/components/CustomInput";
import Button from "@/components/Button";
import Member from "@/components/Member";

export default function Team() {
  return (
    <section className="bg-slate-200">
      <section className="min-h-screen max-w-screen-2xl mx-auto py-8 px-4 flex flex-col gap-12">
        <header className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-12">
          <CustomInput label="Search for a member" type="text"/>

          <Button tailwindClasses="w-full bg-violet-600 py-2 px-6 rounded-md text-slate-100 md:w-1/4 md:max-h-10">
          Add member
          </Button>
        </header>

        <main className="flex flex-col gap-8">
          <h1 className="text-xl font-semibold text-violet-900 text-center">Team</h1>
          <div className="flex flex-col gap-4 md:grid md:grid-cols-2 2xl:grid-cols-3">
            <Member />
            <Member />
            <Member />
            <Member />
            <Member />
            <Member />
          </div>     
        </main>
      </section>
    </section>
  )
}