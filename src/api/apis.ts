import { instance } from "./instance";

export const getPost = async (id: number) => {
  const res = await instance.get(`/api/post/${id}`);
  console.log(res.data);
  return res.data;
};

export const createPost = async (data: { title: string; content: string }) => {
  const res = await instance.post(`/api/post`, data);
  console.log(res);
  return res.data;
};
