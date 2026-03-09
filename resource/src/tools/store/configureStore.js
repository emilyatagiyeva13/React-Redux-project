import { combineReducers, createStore } from "redux";
import { productReducer } from "../reducers/productReducer";
import { categoryReducer } from "../reducers/categoryReducer"

const configureStore = () => {
    // state anbari yaradiriq burada
    // combineReducer isə bir neçə reduceri birləşdirmək üçün istifadə olunur hansı ki ç bir store da toplamaq üçün əlverişlidir
    // reducer isə state-ə necə dəyişəcəyini deyən bir funksiyadır
    const store = createStore(combineReducers({
        product: productReducer,
        category: categoryReducer

    }))

    return store;
}

export default configureStore;