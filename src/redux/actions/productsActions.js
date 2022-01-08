import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};
export const setGadgets = (gadgets) => {
    return {
        type: ActionTypes.SET_GADGETS,
        payload: gadgets,
    };
};
export const setCart = (cart) => {
    return {
        type: ActionTypes.SET_CART,
        payload: cart,
    };
};
export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    };
};
export const selectedGadget = (gadget) => {
    return {
        type: ActionTypes.SELECTED_GADGET,
        payload: gadget,
    };
};
export const selectedFood = (food) => {
    return {
        type: ActionTypes.SELECTED_FOOD,
        payload: food,
    };
};

export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    };
};