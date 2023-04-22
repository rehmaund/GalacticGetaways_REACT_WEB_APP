import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./flags-service";


export const getAllFlagsThunk = createAsyncThunk(
    'flags/getAllFlags', async () => {
        const flags = await service.getAllFlags();
        return flags;
    }
);

export const createFlagThunk = createAsyncThunk(
    'flags/createFlag', async (flag) => {
        console.log(flag);
        const newFlag = await service.createFlag(flag);
        return newFlag;
    }
);

export const deleteFlagThunk = createAsyncThunk(
    'flags/deleteFlag', async (fid) => {
        const flag = await service.deleteFlag(fid);
        return flag;
    }
);