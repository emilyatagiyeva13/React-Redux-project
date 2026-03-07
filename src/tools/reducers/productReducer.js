const initialState = [];

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_PRODUCT":
            return action.product;
        // id-e gore artan sira duzmek ucun
        // sadece action-dan gelen producti gosterecek, store atmaga ehtiyac qalmir
        // supabase ozunu state kimi istifade ederik

        default:
            return state;
    }

}

// case "DELETE_PRODUCT":
//     return state.filter(p => p.id !== action.id);
// case "EDIT_PRODUCT":
//     return state.map(item => {
//         if (item.id == action.id) {
//             return {...item, ...action.update}
//         }
//         else {
//             return item;
//         }
//     })



// const initialState = [];

// export const productReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "CREATE_PRODUCT":
//             return [...state, action.product];

//         case "DELETE_PRODUCT":
//             return state.filter(product => product.id !== action.id);

//         case "UPDATE_PRODUCT":
//             return state.map(product =>
//                 product.id === action.product.id ? action.product : product
//             );

//         default:
//             return state;
//     }
// };