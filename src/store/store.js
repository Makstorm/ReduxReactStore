import { configureStore } from "@reduxjs/toolkit";
import devicesReducer from "../features/devices/deviceSlice";
import modalsReducer from "../features/modals/modalsSlice";
import userReducer from "../features/users/userSlice"

export default configureStore({
    reducer: {
        devices: devicesReducer,
        users: userReducer, 
        modals: modalsReducer
    }
})