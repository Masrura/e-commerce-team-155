import { ActionTypes } from "../constants/action-types";
const intialState = {
    products: [],
    gadgets: [],
    cart:[],
};

export const productsReducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload };
        default:
            return state;
    }
};

export const gadgetsReducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_GADGETS:
            return { ...state, gadgets: payload };
        default:
            return state;
    }
};

export const cartReducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_CART:
            return { ...state, cart: payload };
        default:
            return state;
    }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
    console.log(type);
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return { ...state, ...payload };
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }
};

export const selectedGadgetReducer = (state = {}, { type, payload }) => {
    console.log(type);
    switch (type) {
        case ActionTypes.SELECTED_GADGET:
            return { ...state, ...payload };
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }
};