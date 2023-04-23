import axios from "axios";
const SERVER_API_URL = process.env.REACT_APP_API_BASE;
const COUNTERS_URL = `${SERVER_API_URL}/counters`;


const api = axios.create({ withCredentials: true });

export const findCountersByPlaceId = async (xid) => {
  const response = await api.get(`${COUNTERS_URL}/${xid}`);
  if (response.data) {
    return response.data;
  } else {
    return null;
  }
}

export const findAllCounters = async () => {
  const response = await api.get(COUNTERS_URL);
  return response.data;
}

export const createCounter = async (counter) => {
  const response = await api.post(COUNTERS_URL, counter);
  return response.data;
}

export const updateCounter = async (xid, counter) => {
  const response = await api.put(`${COUNTERS_URL}/${xid}`, counter);
  return response.data;
}