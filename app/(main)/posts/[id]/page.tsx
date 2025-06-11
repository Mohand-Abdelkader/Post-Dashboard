"use client";
import { useParams } from "next/navigation";
import { usePost } from "@/hooks/usePosts";
import { PostCard } from "@/components/PostCard";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function Page() {
  const { id } = useParams();
  const { data, isLoading, error } = usePost(Number(id));

  if (isLoading)
    return (
      <div className="p-4 border border-gray-200 rounded-lg space-y-3">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full" />
      </div>
    );
  if (error) {
    return (
      <div className="text-center py-8 text-red-500">
        {error.message || "Failed to load post"}
      </div>
    );
  }

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
