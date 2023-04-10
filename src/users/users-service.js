import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_BASE;
const USERS_API = `${API_BASE}/users`;


export const getAllUsers = async () => {
  const response = await axios.get(USERS_API);
  return response.data;
}

export const createUser = async (user) => {
  const response = await axios.post(USERS_API, user)
  return response.data;
}

export const findUserById = async (uid) => {
  const response = await axios.get(`${USERS_API}/${uid}`);
  return response.data;
}

export const deleteUser = async (uid) => {
  const response = await axios.delete(`${USERS_API}/${uid}`)
  return response.data
}

export const updateUser = async (user) => {
  const response = await axios.put(`${USERS_API}/${user._id}`, user);
  return response.data;
}

export const findUserByUsername = async (username) => {
  const response = await axios.get(`${USERS_API}/username/${username}`);
  return response.data;
}

export const incrementUserLikes = async (uid) => {
  const response = await axios.put(`${USERS_API}/${uid}/likes`);
  return response.data;
}

export const incrementUserComments = async (uid) => {
  const response = await axios.put(`${USERS_API}/${uid}/comments`);
  return response.data;
}

export const incrementUserRecommendations = async (uid) => {
  const response = await axios.put(`${USERS_API}/${uid}/recommendations`);
  return response.data;
}

export const incrementUserContributions = async (uid) => {
  const response = await axios.put(`${USERS_API}/${uid}/contributions`);
  return response.data;
}

export const incrementUserActionsTaken = async (uid) => {
  const response = await axios.put(`${USERS_API}/${uid}/actionsTaken`);
  return response.data;
}
