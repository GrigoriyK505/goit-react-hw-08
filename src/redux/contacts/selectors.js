import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/filtersSlice";

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