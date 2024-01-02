import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    move: 10,
    clockTurn: 15,
    antiClockTurn: 15,
    currentElement: "",
}

const motion = createSlice({
    name: "motion",
    initialState,
    reducers: {
        changeMove: (state, action) => {
            state.move = action.payload;
        },
        changeClockTurn: (state, action) => {
            state.clockTurn = action.payload;
        },
        changeAntiClockTurn: (state, action) => {
            state.antiClockTurn = action.payload;
        },
        currentClickedElement: (state, action) => {
            state.currentElement = action.payload;
        }, 
    }
});

export const {
    changeMove,
    changeClockTurn,
    changeAntiClockTurn,
} = motion.actions;

export default motion.reducer;