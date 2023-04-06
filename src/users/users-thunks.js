import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./users-service"


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

export const updateUserThunk = createAsyncThunk(
    'users/updateUser', async (user) =>
        await service.updateUser(user)
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

export const incrementUserRecommendationsThunk = createAsyncThunk(
    'users/incrementUserRecommendations', async (uid) =>
        await service.incrementUserRecommendations(uid)
)

export const incrementUserContributionsThunk = createAsyncThunk(
    'users/incrementUserContributions', async (uid) =>
        await service.incrementUserContributions(uid)
)

export const incrementUserActionsTakenThunk = createAsyncThunk(
    'users/incrementUserActionsTaken', async (uid) =>
        await service.incrementUserActionsTaken(uid)
)
