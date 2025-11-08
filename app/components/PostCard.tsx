// components/PostCard.tsx
import Link from "next/link";

// We should specify the type of table attributes before passing as props or you can use any.
type PostCardProps = {
  id: string | number;
  title: string;
  content: string;
};

export default function PostCard({ id, title, content }: PostCardProps) {
  return (
    <div className="border p-4 rounded-lg bg-white shadow hover:shadow-lg transition">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600">{content.substring(0, 80)}...</p>

      <Link
        href={`/posts/${id}`}
        className="text-blue-600 mt-2 inline-block hover:underline"
      >
        Read more →
      </Link>
    </div>
  );
}
