import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./users-service"



export const loginThunk = createAsyncThunk(
    "user/login", async (credentials) => {
        const user = await service.login(credentials);
        return user;
    }
);

export const profileThunk = createAsyncThunk(
    "auth/profile", async () => {
        return await service.profile();
    });


export const logoutThunk = createAsyncThunk(
    "auth/logout", async () => {
        return await service.logout();
    });


export const updateUserThunk = createAsyncThunk(
    "user/updateUser", async (user) => {
        await service.updateUser(user);
        return user;
    }
);


export const registerThunk = createAsyncThunk('auth/register',
    async (userData) => {
            const response = await service.register(userData);
            return response;
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

