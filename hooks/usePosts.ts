import toast from "react-hot-toast";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} from "@/lib/api";

export const usePosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
};

export const usePost = (id: number) => {
  return useQuery({
    queryKey: ["post", id],
    queryFn: () => getPostById(id),
  });
};

export const useCreatePost = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      router.push("/admin");
      toast.success(
        "Post Created successfully, Kindly Note that is fake api and does not allow write on the database "
      );
    },
    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message ||
          "Something went wrong, please try again later "
      );
    },
  });
};

export const useUpdatePost = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      id,
      ...data
    }: {
      id: number;
      title: string;
      body: string;
    }) => updatePost(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      router.push("/admin");
      toast.success(
        "Post Updated successfully, Kindly Note that is fake api and does not allow write on the database "
      );
    },
    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message ||
          "Something went wrong, please try again later "
      );
    },
  });
};

export const useDeletePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      toast.success(
        "Post deleted successfully, Kindly Note that is fake api and does not allow write on the database "
      );
    },
    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message ||
          "Something went wrong, please try again later "
      );
    },
  });
};
