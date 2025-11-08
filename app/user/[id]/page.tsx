export const dynamic = "force-dynamic";
import prisma from "@/lib/prisma";

export default async function UserPostsPage({ params }: { params: Promise<{ id: string }> }) {

  const { id } = await params; // ✅ unwrapping the promise
  const userId = Number(id);   // ✅ convert to number

  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { posts: true },
  });

  if (!user) {
    return <p className="text-center mt-10 text-red-500">User not found</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-3xl font-bold mb-6">{user.name}'s Posts</h1>

      {user.posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        <div className="space-y-4">
          {user.posts.map((post) => (
            <div key={post.id} className="border p-4 rounded-lg bg-white shadow">
              <h2 className="font-semibold text-lg">{post.title}</h2>
              <p className="text-gray-600">{post.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
