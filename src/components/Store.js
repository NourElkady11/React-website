import { Kady } from "./Slice";
import { configureStore } from "@reduxjs/toolkit";
export const store=configureStore({
    reducer:{
        productsslice:Kady.reducer
    }
});

