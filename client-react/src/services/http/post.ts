import http from '@/services/http/axios';

const createPost = (data: any) => {
  return http.post(`/post/create`, data);
};

const getPost = (postId: number) => {
  return http.get(`/post/get/${postId}`);
};

const updatePost = (postId: number, data: any) => {
  return http.put(`/post/update/${postId}`, data);
};

const deletePost = (postId: number) => {
  return http.delete(`/post/update/${postId}`);
};

const getUserAllPosts = (userId: number) => {
  return http.get(`/post/${userId}/getall`);
};

const PostService = {
  createPost,
  getPost,
  updatePost,
  deletePost,
  getUserAllPosts,
};

export default PostService;
