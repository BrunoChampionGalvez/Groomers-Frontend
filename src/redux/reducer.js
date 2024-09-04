import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    userAppointments: []
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.user = action.payload;
        },
        addUserAppointments: (state, action) => {
            state.userAppointments = [...new Set(action.payload)]
        },
        addUserAppointment: (state, action) => {
            state.userAppointments.unshift(action.payload)
        }
    }
})

export const { addUser, addUserAppointments, addUserAppointment } = userSlice.actions