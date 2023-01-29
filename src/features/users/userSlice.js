import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
    'users/login',
    async ({username, password}) => {
        // const user = await fetch('https://fakestoreapi.com/auth/login',
        //     {
        //         method:'POST',
        //         body:JSON.stringify({
        //             username: username,
        //             password: password
        //         })
        //     })
        // const json = await user.json()
        // return json
        return {
            token: "eyJhbGciOiJIUzI1NiIsInR"
        }
    }
)

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        isAuth: false,
        user: {},
        preCart: {},
        cart: [],
        isLoading: false,
        hasError: false
    },
    reducers: {
        addPreCartItem: (state, action) => {
            return {
                ...state,
                preCart: action.payload
            }
        },
        removePreCartItem: (state, action) => {
            return {
                ...state,
                preCart: {}
            }
        },

        addItemToCart: (state, action) => {
            state.cart.push({ 
                ...action.payload, 
            })
        },
        removeItemFromCart: (state, action) => {

        },

    },
    extraReducers: {
        [login.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [login.fulfilled]: (state, action) => {
            state.user  = action.payload.token;
            state.isAuth = true
            state.isLoading = false;
            state.hasError = false;
        },
        [login.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        },
    }
})

export default userSlice.reducer
export const { addItemToCart, removeItemFromCart, addPreCartItem, removePreCartItem } = userSlice.actions
export const selectUserCart = (state) => state.users.cart
export const selectPreCartItem = (state) => state.users.preCart