//https://connections-api.goit.global/
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.goit.global/';

const setAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = ``;
};

export const registerThunk = createAsyncThunk('auth/register', async (body, thunkAPI) => {
    try {
        const { data } = await axios.post('/users/signup', body)
        setAuthHeader(data.token);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
    //"email"sivokstasia1@mail.com"
});
export const loginThunk = createAsyncThunk('auth/login', async (body, thunkAPI) => {
    try {
        const { data } = await axios.post('/users/login', body)
        setAuthHeader(data.token);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});
export const logoutThunk = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        await axios.post('/users/logout');
        clearAuthHeader();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});
export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    try {
        const savedToken = thunkAPI.getState().auth.token;
        if (savedToken === null) {
            return thunkAPI.rejectWithValue(`Token is not exist!`)
        }
        setAuthHeader(savedToken);
        const { data } = await axios.get('/users/current')
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});