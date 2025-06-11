"use client";
import { useEffect } from "react";
import { RichTextEditor } from "@/components/ui/RichTextEditor";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export interface PostFormData {
  title: string;
  body: string;
  userId: number;
}

interface PostFormProps {
  onSubmit: (data: PostFormData) => void;
  isPending?: boolean;
  initialValues?: PostFormData;
}

export default function PostForm({
  onSubmit,
  isPending,
  initialValues,
}: PostFormProps) {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<PostFormData>({
    defaultValues: initialValues || {
      title: "",
      body: "",
    },
  });
  useEffect(() => {
    register("body", { required: true, minLength: 10 });
  }, [register]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="space-y-2">
        <Label htmlFor="title">Post Title</Label>
        <Input
          id="title"
          {...register("title", { required: true, minLength: 5 })}
          placeholder="Enter title"
          className={`h-11 px-4 ${errors.title ? "border-red-500" : ""}`}
        />
        {errors.title && (
          <p className="text-sm text-red-500">
            {errors.title.type === "minLength"
              ? "Title must be at least 5 characters"
              : "Title is required"}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="body">Post Content</Label>
        <RichTextEditor
          value={getValues("body")}
          onChange={(value) =>
            setValue("body", value, { shouldValidate: true })
          }
        />

        {errors.body && (
          <p className="text-sm text-red-500">
            Content is required and must be at least 10 characters.
          </p>
        )}
      </div>

      <Button type="submit" disabled={isPending}>
        {initialValues && isPending
          ? "Updating...."
          : initialValues
          ? "Update Post"
          : !initialValues && isPending
          ? "Creating Post..."
          : "Create Post"}
      </Button>
    </form>
  );
}
