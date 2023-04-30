import Link from "next/link";
import { useState } from "react";

// Components
import Button from "@/components/Button";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  function handleToggleMenu() {
    setShowMenu((sm) => (sm = !sm));
  }

  function handleCloseNavbar() {
    setShowMenu(false);
  }

  return (
    <nav
      className={`bg-violet-600 w-screen ${
        showMenu ? "fixed top-0 left-0" : ""
      }`}
    >
      <div className="flex justify-between max-w-screen-2xl mx-auto py-8 px-5 lg:justify-normal lg:gap-5 lg:items-center text-slate-100">
        <Link href="/" className="text-xl">Kanbangee</Link>

        <ul
          className={`bg-violet-600 ${
            showMenu
              ? "fixed top-20 left-0 w-screen h-[calc(100vh-5rem)] py-14 px-6 flex flex-col gap-10"
              : "hidden"
          } lg:flex lg:gap-5 lg:items-center lg:ml-auto`}
        >
          <li>
            <Link href="/" onClick={handleCloseNavbar}>Boards</Link>
          </li>
          <li>
            <Link href="/profile" onClick={handleCloseNavbar}>Profile</Link>
          </li>
          <Button tailwindClasses="w-full bg-slate-100 py-2 px-6 rounded-md text-violet-600 mt-auto lg:mt-0">
            Logout
          </Button>
        </ul>

        <button
          className="flex flex-col justify-center gap-1 lg:hidden"
          onClick={handleToggleMenu}
        >
          <span className="w-7 h-1 bg-slate-100 rounded-lg"></span>
          <span className="w-7 h-1 bg-slate-100 rounded-lg"></span>
          <span className="w-7 h-1 bg-slate-100 rounded-lg"></span>
        </button>
      </div>
    </nav>
  );
}
