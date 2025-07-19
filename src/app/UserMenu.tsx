"use client";
import { useState, useRef } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function UserMenu() {
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Close menu on outside click
  // (for accessibility, not perfect but simple)
  if (typeof window !== "undefined") {
    window.onclick = (e) => {
      if (open && menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
  }

  return (
    <div className="fixed top-4 right-6 z-50" ref={menuRef}>
      <button
        aria-label="User menu"
        className="rounded-full bg-blue-100 dark:bg-blue-900 p-2 border border-blue-200 dark:border-blue-800 hover:bg-blue-200 dark:hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
        onClick={() => setOpen((v) => !v)}
      >
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-900 dark:text-blue-200">
          <circle cx="12" cy="8" r="4" strokeWidth="2" />
          <path strokeWidth="2" d="M4 20c0-3.314 3.134-6 7-6s7 2.686 7 6" />
        </svg>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg py-2">
          {status === "authenticated" ? (
            <>
              <div className="px-4 py-2 text-gray-900 dark:text-gray-100 font-semibold">
                {session.user?.email}
              </div>
              <button
                className="w-full text-left px-4 py-2 hover:bg-blue-50 dark:hover:bg-blue-800 text-blue-700 dark:text-blue-300"
                onClick={() => { setOpen(false); signOut(); }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                className="w-full text-left px-4 py-2 hover:bg-blue-50 dark:hover:bg-blue-800 text-blue-700 dark:text-blue-300"
                onClick={() => { setOpen(false); router.push("/login"); }}
              >
                Login
              </button>
              <button
                className="w-full text-left px-4 py-2 hover:bg-blue-50 dark:hover:bg-blue-800 text-blue-700 dark:text-blue-300"
                onClick={() => { setOpen(false); router.push("/register"); }}
              >
                Register
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
