// components/Navbar.tsx
"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <Link href="/" className="text-lg font-bold">
        🚀 Mini Project Hub
      </Link>

      <Link
        href="/posts/new"
        className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
      >
        + Create Post
      </Link>
    </nav>
  );
}
