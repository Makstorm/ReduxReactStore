import BusketPage from "./pages/Busket"
import DevicePage from "./pages/DevicePage"
import Shop from "./pages/Shop"
import { DEVICE_ROUTE, BUSKET_ROUTE, SHOP_ROUTE } from "./utils/consts"


export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },

    {
        path: BUSKET_ROUTE,
        Component: BusketPage
    },

    {
        path: DEVICE_ROUTE,
        Component: DevicePage
    },
]

