import axios from "axios";

const USERS_API = "http://localhost:4000/api/users";

const api = axios.create({
    withCredentials: true,
});
export const userFollowsUser = async (followerId, followedId) => {
    const response = await api.post(
        `${USERS_API}/${followerId}/follows/${followedId}`
    );
    return response.data;
};

export const userUnfollowsUser = async (followerId, followedId) => {
    const response = await api.delete(
        `${USERS_API}/${followerId}/follows/${followedId}`
    );
    return response.data;
};

export const findFollowsByFollowedId = async (followed) => {
    const response = await api.get(`${USERS_API}/${followed}/followers`);
    return response.data;
};

export const findFollowsByFollowerId = async (follower) => {
    const response = await api.get(`${USERS_API}/${follower}/followees`);
    return response.data;
};

