// Components
import Navbar from "@/components/Navbar";

// Fonts
import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <main>
      <Navbar />
      <h1>Rodrigo</h1>
    </main>
  )
}
