"use client";

import { useParams } from "next/navigation";
import PostForm, { PostFormData } from "@/components/PostForm";
import { usePost, useUpdatePost } from "@/hooks/usePosts";
import Loader from "@/components/ui/Loader";
export default function EditPage() {
  const { id } = useParams();
  const { data: post, isLoading } = usePost(Number(id));
  const { mutate: updatePost, isPending } = useUpdatePost();

  const handleUpdate = (data: PostFormData) => {
    updatePost({ ...data, id: Number(id), userId: 1 });
  };

  return (
    <div className="max-w-2xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Edit Post</h1>
      {isPending || isLoading ? (
        <Loader />
      ) : (
        <PostForm
          onSubmit={handleUpdate}
          isPending={isPending}
          initialValues={post}
        />
      )}
    </div>
  );
}
