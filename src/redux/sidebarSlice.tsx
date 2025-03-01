import { createSlice } from '@reduxjs/toolkit'

export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState: {
        isOpen: false,
    },
    reducers: {
        toggleBar: (state) => {
            state.isOpen = !state.isOpen;
        },
    },
})

export const { toggleBar } = sidebarSlice.actions

export default sidebarSlice.reducer