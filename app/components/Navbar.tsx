// components/Navbar.tsx
"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <Link href="/" className="text-lg font-bold">
        🚀 User Post's
      </Link>

      <div className="flex gap-5">
          <Link
            href="/posts/new"
            className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
          >
            + Create Post
          </Link>

          <Link
            href="/user/new"
            className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
          >
            + Create User
          </Link>
      </div>
    </nav>
  );
}
