"use client";

import { useForm } from "react-hook-form";
import { useCreatePost } from "@/hooks/usePosts";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface PostFormData {
  title: string;
  body: string;
}

export default function CreatePage() {
  const { mutate: createPost, isPending } = useCreatePost();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PostFormData>();

  const onSubmit = (data: PostFormData) => {
    const newPost = {
      ...data,
      userId: 1,
    };
    createPost(newPost, {
      onSuccess: () => {
        reset();
      },
    });
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50/50 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-8">
        <div className="space-y-2 mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Create New Post</h1>
          <p className="text-gray-500">Fill in the details below to create a new blog post.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Title */}
          <div className="space-y-2">
            <Label 
              htmlFor="title" 
              className="text-sm font-medium text-gray-900"
            >
              Post Title
            </Label>
            <Input
              id="title"
              placeholder="Enter an engaging title"
              {...register("title", { required: true, minLength: 5 })}
              className={`h-11 px-4 ${errors.title ? "border-red-500 focus-visible:ring-red-500" : "focus-visible:ring-blue-500"}`}
            />
            {errors.title && (
              <p className="text-sm text-red-500">
                {errors.title.type === "minLength"
                  ? "Title must be at least 5 characters"
                  : "Title is required"}
              </p>
            )}
          </div>

          {/* Body */}
          <div className="space-y-2">
            <Label 
              htmlFor="body"
              className="text-sm font-medium text-gray-900"
            >
              Post Content
            </Label>
            <Textarea
              id="body"
              placeholder="Write your post content here..."
              rows={8}
              {...register("body", { required: true, minLength: 10 })}
              className={`resize-y min-h-[200px] px-4 py-3 ${errors.body ? "border-red-500 focus-visible:ring-red-500" : "focus-visible:ring-blue-500"}`}
            />
            {errors.body && (
              <p className="text-sm text-red-500">
                {errors.body.type === "minLength"
                  ? "Content must be at least 10 characters"
                  : "Content is required"}
              </p>
            )}
          </div>

          {/* Submit */}
          <div className="pt-4">
            <Button 
              type="submit" 
              disabled={isPending}
              className="w-full sm:w-auto min-w-[120px] bg-blue-600 hover:bg-blue-700 text-white"
            >
              {isPending ? "Creating..." : "Create Post"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
