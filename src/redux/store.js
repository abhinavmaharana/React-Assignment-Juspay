import { configureStore } from "@reduxjs/toolkit";
import root from "./reducers/root";

export const store = configureStore({
    reducer: { root },
})