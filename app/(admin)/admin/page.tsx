"use client";

import { useState } from "react";
import { useDeletePost, usePosts } from "@/hooks/usePosts";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ConfirmDialog } from "@/components/ui/ConfirmDialog";
import Link from "next/link";
import Loader from "@/components/ui/Loader";
interface Post {
  id: number;
  title: string;
  body: string;
}

const POSTS_PER_PAGE = 10;

export default function AdminPostTable() {
  const { data, isLoading, isError } = usePosts();
  const { mutate: deletePost, isPending } = useDeletePost();
  const [currentPage, setCurrentPage] = useState(1);

  if (isError)
    return (
      <p className="text-center py-10 text-red-500">Failed to load posts</p>
    );

  // Pagination logic
  const totalPages = Math.ceil(data?.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = data?.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Posts</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage your blog posts - {data?.length} posts in total
          </p>
        </div>
        <Link
          href="/admin/create"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-200"
        >
          Create New Post
        </Link>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Title</TableHead>
                <TableHead className="hidden md:table-cell">Body</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentPosts.map((post: Post) => (
                <TableRow key={post.id}>
                  <TableCell>{post.id}</TableCell>
                  <TableCell>{post.title}</TableCell>
                  <TableCell className="hidden md:table-cell text-gray-600 text-sm">
                    {post.body.slice(0, 50)}...
                  </TableCell>
                  <TableCell className="space-x-4">
                    <Link
                      href={`/admin/edit/${post.id}`}
                      className="bg-blue-500 rounded-lg text-white hover:bg-blue-600 transition-colors duration-200 h-8  gap-1.5 px-3 py-1.5 "
                    >
                      Edit
                    </Link>

                    <ConfirmDialog
                      title="Delete Post"
                      description="Are you sure you want to delete this post? This action cannot be undone."
                      onConfirm={() => deletePost(post.id)}
                      trigger={
                        <Button
                          size="sm"
                          variant="destructive"
                          disabled={isPending}
                        >
                          Delete
                        </Button>
                      }
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Pagination Controls */}
          <div className="flex justify-between items-center mt-6">
            <Button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              variant="outline"
            >
              Previous
            </Button>
            <p className="text-sm text-gray-500">
              Page {currentPage} of {totalPages}
            </p>
            <Button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              variant="outline"
            >
              Next
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
