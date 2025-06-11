import Link from "next/link";

interface PostCardProps {
  id: number;
  title: string;
  body: string;
}

export function PostCard({ id, title, body }: PostCardProps) {
  return (
    <Link href={`/posts/${id}`}>
      <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-200 cursor-pointer group">
        <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-3">{body}</p>
        <div className="mt-3 text-xs text-gray-500">Post #{id}</div>
      </div>
    </Link>
  );
}
