import Image from "next/image";

// Components
import CustomInput from "@/components/CustomInput";
import Button from "@/components/Button";

export default function Profile() {
  return (
    <section className="bg-slate-200">
      <section className="min-h-screen max-w-screen-sm mx-auto py-8 px-4 flex flex-col gap-8">
        <header>
          <h1 className="text-xl font-semibold text-violet-900 text-center">
            Profile
          </h1>
        </header>

        <main className="flex flex-col gap-8">
          <Image
            src="/user.png"
            alt="Profile picture"
            width="100"
            height="100"
            className="rounded-full bg-violet-200 border-4 border-violet-900"
          />

          <CustomInput
            label="Full name"
            placeholder="Enter your full name"
            type="text"
          />

          <CustomInput
            label="E-mail"
            placeholder="Enter your e-mail"
            type="text"
          />
        </main>

        <footer className="flex flex-col gap-2">
          <Button tailwindClasses="w-full bg-transparent border-2 border-red-400 py-2 px-6 rounded-md text-center text-red-400">
            Delete
          </Button>
          <Button tailwindClasses="w-full bg-violet-600 py-2 px-6 rounded-md text-slate-100">
            Save
          </Button>
        </footer>
      </section>
    </section>
  );
}
