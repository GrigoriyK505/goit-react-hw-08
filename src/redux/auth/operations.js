//https://connections-api.goit.global/
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baswURL = 'https://connections-api.goit.global/';

export const registerThunk = createAsyncThunk('auth/register', async (body, thunkAPI) => {
    try {
        const { data } = await axios.post('/users/register', body)
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});
export const loginThunk = createAsyncThunk('auth/login', async (body, thunkAPI) => {
    try {
        const { data } = await axios.post('/users/login', body)
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});
export const logoutThunk = createAsyncThunk('auth/logout', async (body, thunkAPI) => {
    try {
        const { data } = await axios.post('/users/logout', body)
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});
export const refreshThunk = createAsyncThunk('auth/refresh', async (body, thunkAPI) => {
    try {
        const { data } = await axios.post('/users/register', body)
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});