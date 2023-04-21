import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./counters-service";


export const findCountersByPlaceIdThunk = createAsyncThunk(
    'counters/findCounterByPlaceId', async (placeId) => {
        const counters = await service.findCountersByPlaceId(placeId);
        if (counters === null) {
            const newCounters = await service.createCounter({xid: placeId, num_likes: 0, num_recommendations: 0});
            return newCounters;
        }
        return counters;
    }
);

export const incrementLikeThunk = createAsyncThunk(
    'counters/incrementLike', async (xid) => {
        const counter = await service.findCountersByPlaceId(xid);
        counter.num_likes++;
        const updatedCounter = await service.updateCounter(xid, counter);
        return updatedCounter;
    }
);

export const decrementLikeThunk = createAsyncThunk(
    'counters/decrementLike', async (xid) => {
        const counter = await service.findCountersByPlaceId(xid);
        counter.num_likes--;
        const updatedCounter = await service.updateCounter(xid, counter);
        return updatedCounter;
    }
);

export const incrementRecommendationThunk = createAsyncThunk(
    'counters/incrementRecommendation', async (xid) => {
        const counter = await service.findCountersByPlaceId(xid);
        counter.num_recommendations++;
        const updatedCounter = await service.updateCounter(xid, counter);
        return updatedCounter;
    }
);

export const decrementRecommendationThunk = createAsyncThunk(
    'counters/decrementRecommendation', async (xid) => {
        const counter = await service.findCountersByPlaceId(xid);
        counter.num_recommendations--;
        const updatedCounter = await service.updateCounter(xid, counter);
        return updatedCounter;
    }
);

