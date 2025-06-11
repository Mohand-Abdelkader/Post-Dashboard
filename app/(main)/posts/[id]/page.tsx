"use client";
import { useParams } from "next/navigation";
import { usePost } from "@/hooks/usePosts";
import { PostCard } from "@/components/posts/PostCard";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function Page() {
  const { id } = useParams();
  const { data, isLoading, isError } = usePost(Number(id));

  if (isLoading)
    return (
      <div className="p-4 border border-gray-200 rounded-lg space-y-3">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full" />
      </div>
    );
  if (isError) return <div>Error loading post</div>;
  if (!data) return <div>Post not found</div>;
  return (
    <>
      <PostCard {...data} />
      <div className="mt-4 flex justify-end">
        <Button variant="outline" size="sm">
          <Link href="/"> Back to all posts</Link>
        </Button>
      </div>
    </>
  );
}
