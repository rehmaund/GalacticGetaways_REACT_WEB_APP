import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_BASE;
const COMMENTS_API = `${API_BASE}/comments`;

export const getAllComments = async () => {
  const response = await axios.get(COMMENTS_API);
  return response.data;
}

export const addNewComment = async (comment) => {
  const response = await axios.post(COMMENTS_API, comment)
  return response.data;
}

export const findCommentById = async (cid) => {
  const response = await axios.get(`${COMMENTS_API}/${cid}`);
  return response.data;
}

export const findCommentsByUserId = async (uid) => {
  const response = await axios.get(`${COMMENTS_API}/user/${uid}`);
  return response.data;
}

export const findCommentsByPlaceId = async (xid) => {
  const response = await axios.get(`${COMMENTS_API}/place/${xid}`);
  return response.data;
}

export const deleteComment = async (cid) => {
  const response = await axios.delete(`${COMMENTS_API}/${cid}`)
  return response.data
}

export const updateComment = async (comment) => {
  const response = await axios.put(`${COMMENTS_API}/${comment._id}`, comment);
  return response.data;
}