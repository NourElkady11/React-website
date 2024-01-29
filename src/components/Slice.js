import { createSlice } from "@reduxjs/toolkit";

const productsState={
    productslist:[

    ]
}
export const Kady=createSlice({
    name:"productsslice",
    initialState:productsState,
    reducers:{
        addproduct:(state,action)=>{
            // state dy l products lly 3andy w action dy el action lly haytnafez 3ala l state dy
            // payload dh array gowa el object lly howa action w t insert br7tak b2a s3tha gowa l action 3n tare2 l payload 
            state.productslist.push(action.payload)

        },
        // removeproduct:(state,action)=>{
        //     state.products

        // }
    
    }
})
