"use client";

import PostForm, { PostFormData } from "@/components/PostForm";
import { useCreatePost } from "@/hooks/usePosts";

export default function CreatePage() {
  const { mutate: createPost, isPending } = useCreatePost();

  const handleCreate = (data: PostFormData) => {
    createPost({ ...data, userId: 1 });
  };

  return (
    <div className="max-w-2xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Create New Post</h1>
      <PostForm onSubmit={handleCreate} isPending={isPending} />
    </div>
  );
}
