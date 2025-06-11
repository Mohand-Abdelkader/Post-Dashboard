"use client";

import { usePosts } from "@/hooks/usePosts";
import { PostCard } from "@/components/PostCard";
import { PostListSkeleton } from "@/components/PostListSkeleton";

interface Post {
  id: number;
  title: string;
  body: string;
}
export default function PostsPage() {
  const { data, isLoading, isError } = usePosts();

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">
        All Posts
      </h1>

      {isLoading && <PostListSkeleton />}
      {isError && (
        <p className="text-center text-red-500">Failed to load posts.</p>
      )}

      {!isLoading && !isError && data && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((post: Post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      )}
    </div>
  );
}
