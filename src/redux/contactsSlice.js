import { createSelector, createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./contactsOps";
import { selectNameFilter } from "./filtersSlice";

const initialState = {
    items: [],
    loading: false,
    error: null
};

const slice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: builder => {
        builder
        .addCase(fetchContacts.fulfilled, (state, action) => {
            state.items = action.payload;
            state.loading = false;
        })
        .addCase(fetchContacts.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchContacts.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
        })
        .addCase(addContact.fulfilled, (state, action) => {
            state.items.push(action.payload);
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        })

    }
});

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;
export const selectFilteredContacts = createSelector(
    [selectContacts, selectNameFilter], (contacts, filter) => {
        if (!filter) return contacts;
        return contacts.filter((contact) => contact.name?.toLowerCase().includes(filter.toLowerCase())
        );
    }
);

export const contactReducer = slice.reducer;