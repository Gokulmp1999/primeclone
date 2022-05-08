import { useEffect } from "react";

export const initialState = {
    basket: [],
    user:null,
    
};
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action,"njan");
    switch (action.type) {
        case "SET_USER":
            return{
                ...state,
                user:action.user
            
            }   
            case "EMPTY_BASKET":
                return{
                    ...state,
                   basket:[]
                }      
        default:
            return state;
    }

}
export default reducer;