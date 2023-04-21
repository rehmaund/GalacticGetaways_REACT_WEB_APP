import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./users-service"



export const loginThunk = createAsyncThunk(
    "users/login", async (credentials) => {
        const user = await service.login(credentials);
        return user;
    }
);

export const profileThunk = createAsyncThunk(
    "users/profile", async () => {
        return await service.profile();
    });


export const logoutThunk = createAsyncThunk(
    "users/logout", async () => {
        return await service.logout();
    });


export const updateUserThunk = createAsyncThunk(
    "users/updateUser", async (user) => {
        await service.updateUser(user);
        return user;
    }
);


export const registerThunk = createAsyncThunk('users/register',
    async (userData) => {
            const response = await service.register(userData);
            return response.data;
    });
export const getAllUsersThunk = createAsyncThunk(
    'users/getAllUsers', async () =>
        await service.getAllUsers()
)

export const createUserThunk = createAsyncThunk(
    'users/createUser', async (user) =>
        await service.createUser(user)
)

export const findUserByIdThunk = createAsyncThunk(
    'users/findUserById', async (uid) =>
        await service.findUserById(uid)
)

export const deleteUserThunk = createAsyncThunk(
    'users/deleteUser', async (uid) =>
        await service.deleteUser(uid)
)

export const findUserByUsernameThunk = createAsyncThunk(
    'users/findUserByUsername', async (username) =>
        await service.findUserByUsername(username)
)

export const incrementUserLikesThunk = createAsyncThunk(
    'users/incrementUserLikes', async (uid) =>
        await service.incrementUserLikes(uid)
)

export const incrementUserCommentsThunk = createAsyncThunk(
    'users/incrementUserComments', async (uid) =>
        await service.incrementUserComments(uid)
)


export const incrementUserActionsTakenThunk = createAsyncThunk(
    'users/incrementUserActionsTaken', async (uid) =>
        await service.incrementUserActionsTaken(uid)
)

