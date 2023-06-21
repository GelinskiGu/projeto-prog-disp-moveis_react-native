import { createSlice } from '@reduxjs/toolkit';

const initialValues = {
    vaccineId: null,
    name: null,
    vaccineDate: null,
    vaccineDataFormatted: null,
    vaccineNextDate: null,
    vaccineNextDateFormatted: null,
    dose: null,
}

export const vaccineDataSlice = createSlice({
    name: 'vaccineData',
    initialState: initialValues,
    reducers: {
        reducerSetVaccineData: (state, action) => {
            state.vaccineId = action.payload.vaccineId
            state.name = action.payload.name
            state.vaccineDate = action.payload.vaccineDate
            state.vaccineDataFormatted = action.payload.vaccineDataFormatted
            state.vaccineNextDate = action.payload.vaccineNextDate
            state.vaccineNextDateFormatted = action.payload.vaccineNextDateFormatted
            state.dose = action.payload.dose
        }
    }
})

export const { reducerSetVaccineData } = vaccineDataSlice.actions

export default vaccineDataSlice.reducer