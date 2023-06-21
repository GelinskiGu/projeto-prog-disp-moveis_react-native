import { configureStore } from "@reduxjs/toolkit";
import userDataSlice from "./userDataSlice";
import vaccineDataSlice from "./vaccineDataSlice";

export const store = configureStore({
    reducer: {
        user: userDataSlice,
        vaccine: vaccineDataSlice,
    }
});