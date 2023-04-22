import axios from "axios";

const USERS_API = "http://localhost:4000/api";

const api = axios.create({
    withCredentials: true,
});
export const userFollowsUser = async (followerId, followedId) => {
    const response = await api.post(
        `${USERS_API}/follows/${followerId}/${followedId}`
    );
    return response.data;
};

export const userUnfollowsUser = async (followerId, followedId) => {
    const response = await api.delete(
        `${USERS_API}/unfollows/${followerId}/${followedId}`
    );
    return response.data;
};

export const findFollowsByFollowedId = async (followed) => {
    const response = await api.get(`${USERS_API}/followers/${followed}`);
    return response.data;
};

export const findFollowsByFollowerId = async (follower) => {
    const response = await api.get(`${USERS_API}/following/${follower}`);
    return response.data;
};

