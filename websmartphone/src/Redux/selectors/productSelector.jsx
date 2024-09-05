import { createSelector } from "@reduxjs/toolkit";


// productSlice : name:'product'
const productSelector = (state) => state.product;

const selectProductSelector = createSelector(
    productSelector,
    state => state.products
)
const selectPageSelector = createSelector(
    productSelector,
    state => state.page
)

const selectSizeSelector = createSelector(
    productSelector,
    state => state.size
)
const selectTotalSizelector = createSelector(
    productSelector,
    state => state.totalSize
)

export const selectProducts = (state)=>{
    return selectProductSelector(state);
}

