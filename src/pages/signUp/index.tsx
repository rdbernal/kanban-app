import Link from "next/link";

// Components
import CustomInput from "@/components/CustomInput";
import Button from "@/components/Button";

export default function SignUp() {
  return (
    <section className={"h-screen flex justify-center items-center bg-violet-400"}>
      <article className={"w-11/12 max-w-lg bg-slate-200 p-6 rounded-md flex flex-col gap-6"}>
        <h1 className="text-xl font-semibold text-violet-900 text-center">Register</h1>

        <CustomInput label="Name" type="text" />
        <CustomInput label="E-mail" type="text" />
        <CustomInput label="Password" type="password" />
        <CustomInput label="Confirm password" type="password" />

        <Button tailwindClasses="w-full bg-violet-600 py-2 px-6 rounded-md text-slate-100">
          Sign Up
        </Button>

        <Link href="/signIn" className="w-max mx-auto underline text-violet-900">Login</Link>
      </article>
    </section>
  )
}