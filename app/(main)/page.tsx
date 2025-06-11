"use client";

import { Button } from "@/components/ui/button";
import { usePosts } from "@/hooks/usePosts";
import Link from "next/link";
import { PostCard } from "@/components/PostCard";
import { PostListSkeleton } from "@/components/PostListSkeleton";

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function Home() {
  const { data, isLoading, isError } = usePosts();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to&nbsp;
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Post Dashboard
          </span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Manage and explore posts with our intuitive dashboard interface. Built
          with modern technologies for the best user experience.
        </p>
        <div className="flex gap-4 justify-center">
          <Button
            size="lg"
            asChild
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
          >
            <Link href="/admin">Go to Admin</Link>
          </Button>
          <Button variant="outline" size="lg">
            <Link
              target="_blank"
              href="https://github.com/Mohand-Abdelkader/Post-Dashboard/blob/main/README.md"
            >
              Learn More
            </Link>
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Latest Posts</h2>
          {!isLoading && (
            <span className="text-sm text-gray-500">
              {data?.length || 0} posts available
            </span>
          )}
        </div>

        {isLoading && <PostListSkeleton />}
        {isError && (
          <div className="text-center text-red-500 py-10">
            Something went wrong loading posts.
          </div>
        )}
        {!isLoading && !isError && (
          <>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {data?.slice(0, 6).map((post: Post) => (
                <PostCard key={post.id} {...post} />
              ))}
            </div>

            {data?.length > 6 && (
              <div className="text-center mt-6">
                <Button variant="outline" asChild>
                  <Link href="/posts">View All Posts ({data.length})</Link>
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
