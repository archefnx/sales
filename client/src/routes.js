import { CHEQUE_ROUTE, PRODUCT_ROUTE, SELLER_ROUTE } from "./utils/consts"}

export const publicRoutes = [
    {
        path: SELLER_ROUTE,
        component: Seller
    }
    {
        path: PRODUCT_ROUTE,
        component: Product
    }
    {
        path: CHEQUE_ROUTE,
        component: Cheque
    }
]