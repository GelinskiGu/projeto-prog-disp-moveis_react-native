import { createSlice } from '@reduxjs/toolkit';

const initialValues = {
    userId: null,
    name: null,
    email: null,
    birthDate: null,
    gender: null,
}

export const userDataSlice = createSlice({
    name: 'userData',
    initialState: initialValues,
    reducers: {
        reducerSetUserData: (state, action) => {
            state.userLoggedId = action.payload.userLoggedId
            state.name = action.payload.name
            state.email = action.payload.email
            state.birthDateFormatted = action.payload.birthDateFormatted
            state.birthDate = action.payload.birthDate
            state.gender = action.payload.gender
        }
    }
})

export const { reducerSetUserData } = userDataSlice.actions

export default userDataSlice.reducer