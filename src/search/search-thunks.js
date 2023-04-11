import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./search-service"

export const getPlacesThunk = createAsyncThunk(
    'search/getPlaces', async (place) =>
        await service.getPlaces(place)
)

export const getPlaceDetailsForListThunk = createAsyncThunk(
    'search/getPlaceDetailsForList', async (xid) =>
        await service.getPlaceDetails(xid)
)

export const getPlaceDetailsThunk = createAsyncThunk(
    'search/getPlaceDetails', async (xid) =>
        await service.getPlaceDetails(xid)
)
