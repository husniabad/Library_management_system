import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
} from '../constants/productConstants'


export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            console.log("Request")
            return { loading: true, products: [] }

        case PRODUCT_LIST_SUCCESS:
            console.log("payload",action.payload.products)

            return {
                loading: false,
                products: action.payload.products,

            }

        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}
