// components/PostListSkeleton.tsx
import { Skeleton } from "@/components/ui/skeleton";

export function PostListSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="p-4 border border-gray-200 rounded-lg space-y-3"
        >
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-3 w-1/3" />
        </div>
      ))}
    </div>
  );
}
