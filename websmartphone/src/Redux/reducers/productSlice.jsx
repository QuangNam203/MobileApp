import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'product',
    initialState:{
        products:[],
        page:1,
        size:20,
        totalSize:1,
    },
    reducers:{
        setListProducts: (state,action)=>{
            state.products = action.payload;
        },
        setPageProducts: (state,action)=>{
            state.page = action.payload;
        },
        setSizeProducts: (state,action)=>{
            state.size = action.payload;
        },
        setTotalSizeProducts: (state,action)=>{
            state.totalSize = action.payload;
        },
    },
})

export const { actions, reducer } = productSlice;
export const {setListProducts, setPageProducts, setSizeProducts, setTotalSizeProducts} = actions;

export default productSlice;