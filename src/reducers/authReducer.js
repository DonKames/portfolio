 import { types } from "../types/types";

import { createSlice } from "@reduxjs/toolkit";

// export const authReducer = (state = {}, action) => {
//     switch (action.type) {
//         case types.login:
//             return {
//                 uid: action.payload.uid,
//                 name: action.payload.displayName
//             };

//         case types.logout:
//             return {};

//         default:
//             return state;
//     }
// };

export const authReducer = createSlice({
    name: "auth",
    initialState: {},
    reducers: {
        [types.login]: (state, action) => {
            return(
                state.uid = action.payload.uid,
                state.name = action.payload.displayName
            );
        },
        [types.logout]: (state) => {
            return {};
        }
    }
});