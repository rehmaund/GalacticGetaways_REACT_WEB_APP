import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./comments-service";

export const getAllCommentsThunk = createAsyncThunk(
    'comments/getAllComments', async () =>
        await service.getAllComments()
)

export const addNewCommentThunk = createAsyncThunk(
    'comments/addNewComment', async (comment) =>
        await service.addNewComment(comment)
)

export const findCommentByIdThunk = createAsyncThunk(
    'comments/findCommentById', async (cid) =>
        await service.findCommentById(cid)
)

export const findCommentsByUserIdThunk = createAsyncThunk(
    'comments/findCommentsByUserId', async (uid) =>
        await service.findCommentsByUserId(uid)
)

export const findCommentsByPlaceIdThunk = createAsyncThunk(
    'comments/findCommentsByPlaceId', async (xid) =>
        await service.findCommentsByPlaceId(xid)
)

export const deleteCommentThunk = createAsyncThunk(
    'comments/deleteComment', async (cid) =>
        await service.deleteComment(cid)
)

export const updateCommentThunk = createAsyncThunk(
    'comments/updateComment', async (comment) =>
        await service.updateComment(comment)
)