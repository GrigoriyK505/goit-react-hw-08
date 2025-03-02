import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://67b8c1bb699a8a7baef5293b.mockapi.io'

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async(_, thunkAPI) => {
    try {
        const { data } = await axios.get(`/contacts`);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const addContact = createAsyncThunk('contacts/addContact', async(body, thunkAPI) => {
        try {
            const { data } = await axios.post(`/contacts`, body);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    });

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
    try {
        const { data } = await axios.delete(`/contacts/${id}`);
        return data.id;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});