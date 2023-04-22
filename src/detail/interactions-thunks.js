import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./interactions-service";


export const getAllInteractionsThunk = createAsyncThunk(
    'interactions/getAllInteractions', async () => {
        const interactions = await service.getAllInteractions();
        return interactions;
    }
);

export const findInteractionsByPlaceIdThunk = createAsyncThunk(
    'interactions/findInteractionsByPlaceId', async (placeId) => {
        const interactions = await service.findInteractionsByPlaceId(placeId);
        return interactions;
    }
);

export const findInteractionsByUserIdThunk = createAsyncThunk(
    'interactions/findInteractionsByUserId', async (userId) => {
        const interactions = await service.findInteractionsByUserId(userId);
        return interactions;
    }
);

export const findSpecificInteractionThunk = createAsyncThunk(
    'interactions/findSpecificInteraction', async (bothIds) => {
        const interaction = await service.findSpecificInteraction(bothIds);
        return interaction;
    }
);

export const createInteractionThunk = createAsyncThunk(
    'interactions/createInteraction', async (interaction) => {
        const newInteraction = await service.createInteraction(interaction);
        return newInteraction;
    }
);

export const deleteInteractionThunk = createAsyncThunk(
    'interactions/deleteInteraction', async (interactionId) => {
        const status = await service.deleteInteraction(interactionId);
        return status;
    }
);
