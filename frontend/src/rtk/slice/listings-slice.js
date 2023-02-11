import { createSlice } from "@reduxjs/toolkit";


const initialState =[]
export const listingsSlice = createSlice({
    name: 'listingsSlice',
    initialState,
    reducers: {
        listings: (state, action) => {
            const { payload } = action
            console.log("listing slice");
            // console.log(payload);
            return [...payload]
                
        }
    }
})

export const { listings } = listingsSlice.actions

export default  listingsSlice