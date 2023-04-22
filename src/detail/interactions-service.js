import axios from "axios";
const SERVER_API_URL = process.env.REACT_APP_API_BASE;
const INTERACTIONS_URL = 'http://localhost:4000/api/interactions';


const api = axios.create({ withCredentials: true });

export const getAllInteractions = async () => {
  const response = await api.get(INTERACTIONS_URL);
  return response.data;
}

export const findInteractionsByUserId = async (userId) => {
  const response = await api.get(`${INTERACTIONS_URL}/${userId}`);
  return response.data;
}

export const findInteractionsByPlaceId = async (xid) => {
  const response = await api.get(`${INTERACTIONS_URL}/${xid}`);
  return response.data;
}

export const findSpecificInteraction = async (bothIds) => {
  const { xid, uid } = bothIds;
  const response = await api.get(`${INTERACTIONS_URL}/${xid}/${uid}`);
  console.log(response.data);
  return response.data;
}

export const createInteraction = async (interaction) => {
  const response = await api.post(INTERACTIONS_URL, interaction);
  return response.data;
}

export const deleteInteraction = async (iid) => {
  const response = await api.delete(`${INTERACTIONS_URL}/${iid}`);
  return response.data;
}