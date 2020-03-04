import { combineReducers } from "redux";
import productos from "../productos/productos.reductor";

export default combineReducers({
  productosReducer: productos
});
