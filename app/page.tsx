import prisma from '@/lib/prisma'

export default async function Home() {
  const users = await prisma.user.findMany();
  const posts = await prisma.post.findMany();
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center -mt-16">
      <h1 className="text-4xl font-bold mb-8 font-sans text-[#333333]">
        Superblog
      </h1>
      <ol className="list-decimal list-inside font-sans">
        {users.map((user) => (
              <li key={user.id} className="mb-2">
                {user.name}
                {posts.map((post) => (
                  user.id === post.authorId &&
                  <p key={post.id} className='mb-2'>
                        {post.authorId}
                        {post.title}
                    </p>
                ))} 
              </li>
        ))}
      </ol>
    </div>
  );
}

// Main home page where users can see the number of user are there