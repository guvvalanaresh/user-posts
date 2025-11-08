import prisma from "@/lib/prisma";

export default async function Home() {
  const users = await prisma.user.findMany({
    include: {
      posts: true, // ✅ fetch relevant posts
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center -mt-16">
      <h1 className="text-4xl font-bold mb-8 font-sans text-[#333333]">
        Superblog
      </h1>

      <ul className="list-none font-sans border border-amber-500 p-5 space-y-4 flex gap-5">
        {users.map((user) => (
          <li key={user.id} className="border border-blue-500 p-3">
            <p className="text-lg font-semibold text-center">{user.name}</p>

            {/* ✅ Show user's posts */}
            {user.posts.length === 0 ? (
              <p className="text-sm text-gray-500">No posts yet</p>
            ) : (
              <ul className="mt-2 space-y-1">
                {user.posts.map((post) => (
                  <li key={post.id} className="text-gray-700">
                    👉 {post.title}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
