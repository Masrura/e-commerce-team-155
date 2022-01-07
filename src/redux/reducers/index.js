import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer, gadgetsReducer, selectedGadgetReducer, cartReducer } from "./productsReducer";
const reducers = combineReducers({
    allProducts: productsReducer,
    product: selectedProductsReducer,
    gadgets: gadgetsReducer,
    gadget: selectedGadgetReducer,
    cart: cartReducer
});
export default reducers;