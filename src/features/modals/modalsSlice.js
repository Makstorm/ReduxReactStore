import { createSlice } from "@reduxjs/toolkit"

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        isOpen: false
    },
    reducers: {
        setIsOpenTrue: (state, action) => {
            console.log('isOpen true')
            return {
                ...state, 
                isOpen: true
            }
        },
        setIsOpenFalse: (state, action) => {
            return {
                ...state,
                isOpen: false
            }
        }
    },
    extraReducers: {

    }
})

export default modalSlice.reducer
export const {setIsOpenFalse, setIsOpenTrue} = modalSlice.actions

export const selectIsOpen = (state) => state.modals.isOpen
