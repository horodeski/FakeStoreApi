//! Aqui faz a função da action, deixa toda a lógica possivel dentro do reducer

 import CartActionTypes from "./action-types"

const initialState = {
    products: [] ,
    productsTotalPrice: 0,
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CartActionTypes.ADD_PRODUCT:
            return {

                ...state,
                products: [...state.products, action.payload]
                //? O que é o payload? é o produto que eu quero adicionar
            }                         
        default:              
            return state;
    }
}

export default cartReducer