import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer, gadgetsReducer, selectedGadgetReducer } from "./productsReducer";
const reducers = combineReducers({
    allProducts: productsReducer,
    product: selectedProductsReducer,
    gadgets: gadgetsReducer,
    gadget:selectedGadgetReducer
});
export default reducers;