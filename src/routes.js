import BasketPage from "./pages/Basket"
import DevicePage from "./pages/DevicePage"
import Shop from "./pages/Shop"
import { DEVICE_ROUTE, BASKET_ROUTE, SHOP_ROUTE } from "./utils/consts"


export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },

    {
        path: BASKET_ROUTE,
        Component: BasketPage
    },

    {
        path: DEVICE_ROUTE,
        Component: DevicePage
    },
]

