import { useRouter } from "next/router";
import type { AppProps } from "next/app";

// Fonts
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

// Style
import "@/styles/globals.css";

// Components
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const hideNavbar = ["/signUp", "/signIn"].includes(router.pathname);

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      {!hideNavbar && <Navbar />}
      <Component {...pageProps} />
    </>
  );
}
