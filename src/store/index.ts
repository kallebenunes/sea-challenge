import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sectors from "./modules/sectors";
const rootRdeucer = combineReducers({sectors})

export const store = configureStore({reducer: rootRdeucer})