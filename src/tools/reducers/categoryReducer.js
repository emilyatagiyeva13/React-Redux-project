const initialState = [];

export const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_CATEGORY":
            return action.category.sort((a, b) => a.id - b.id);
        default:
            return state;
    }
}


// export const categoryReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "CREATE_CATEGORY":
//             return [...state, action.category];

//         case "DELETE_CATEGORY":
//             return state.filter(cat => cat.id !== action.id);
//         case "EDIT_CATEGORY":
//             return state.map(item => {
//                 if (item.id == action.id) {
//                     return { ...item, ...action.update };
//                 }
//                 else {
//                     return item;
//                 }
//             })
//         case "DELETE_ALL_CATEGORIES":
//             return [];
//         default:
//             return state;
//     }
// }