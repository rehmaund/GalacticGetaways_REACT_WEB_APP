import axios from "axios";
const SERVER_API_URL = process.env.REACT_APP_API_BASE;
const FLAGS_URL = `${SERVER_API_URL}/flags`;


const api = axios.create({ withCredentials: true });


export const getAllFlags = async () => {
  const response = await api.get(FLAGS_URL);
  return response.data;
}

export const createFlag = async (flag) => {
  console.log(flag)
  // const existingFlag = await api.get(`${FLAGS_URL}/${flag.uid}/${flag.item_id}`);
  // console.log(existingFlag)
  // if (existingFlag.data.length > 0) {
  //   return existingFlag.data[0];
  // }
  const response = await api.post(FLAGS_URL, flag)
  return response.data;
}

export const deleteFlag = async (fid) => {
  const response = await api.delete(`${FLAGS_URL}/${fid}`)
  return response.data
}
