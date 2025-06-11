const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getPosts = async () => {
  const res = await fetch(`${BASE_URL}/posts`);
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
};

export const getPostById = async (id: number) => {
  const res = await fetch(`${BASE_URL}/posts/${id}`);
  console.log(res);
  if (res.status === 404) throw new Error("Post not found");
  if (!res.ok) throw new Error("Failed to fetch post");
  const data = await res.json();

  return data;
};

export const createPost = async (post: { title: string; body: string }) => {
  const res = await fetch(`${BASE_URL}/posts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  });
  if (!res.ok) throw new Error("Failed to create post");
  return res.json();
};

export const updatePost = async (
  id: number,
  post: { title: string; body: string }
) => {
  const res = await fetch(`${BASE_URL}/posts/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  });
  if (!res.ok) throw new Error("Failed to update post");
  return res.json();
};

export const deletePost = async (id: number) => {
  const res = await fetch(`${BASE_URL}/posts/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete post");
  return res.json();
};
