
import {createSlice} from '@reduxjs/toolkit';

const uiSlice = createSlice({
    name:'ui',
    initialState:{ cartIsVisibal :false},
    reducer:{
        toggle(state){
            state.cartIsVisibal = !state.cartIsVisibal;
        }
    }
});
export const uiActions = uiSlice.actions;
export default uiSlice;
