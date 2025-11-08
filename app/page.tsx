import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function Home() {
  const users = await prisma.user.findMany({
    include: {
      posts: true, // get posts count also
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Superblog</h1>

      <div className="space-y-4 w-[400px]">
        {users.map((user) => (
          <Link
            key={user.id}
            href={`/user/${user.id}`}
            className="block p-4 rounded-lg bg-white shadow border hover:bg-gray-100 transition"
          >
            <p className="text-lg font-semibold">
              {user.name}{" "}
              <span className="text-gray-600 text-sm">
                ({user.posts.length} {user.posts.length === 1 ? "post" : "posts"})
              </span>
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
