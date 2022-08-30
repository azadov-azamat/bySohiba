// export const getAllCategories = createAsyncThunk('category/getAllCategories', async (query, {
//     rejectWithValue,
//     dispatch
// }) => {
//     try {
//         const response = await http_no_auth.get("v1/auth/all-categories", {
//             params: query
//         })
//         if (response.data?.data === null) return rejectWithValue(response.data.message)
//         return response.data
//     } catch (error) {
//         const error_status = error.response?.status
//         if (error_status === 404) window.location.replace("/not_found/404")
//         if (error_status === 401) dispatch(auth.handleRefreshLogin({refreshToken: localStorage.getItem(REFRESH_TOKEN)}))
//         return rejectWithValue(error.message)
//     }
// })

import {createSlice} from "@reduxjs/toolkit"
import wedding from "../../assets/png/wedding.png"
import abayas from "../../assets/png/abayas.png"
import beauty from "../../assets/png/beauty.png"
import accessories from "../../assets/png/accessories.png"

export const variablesSlice = createSlice({
    name: 'variables',
    initialState: {
        service: [
            {
                id: 1,
                img: wedding,
                title: 'Weddings',
                text: 'свадебные платья'
            },
            {
                id: 2,
                img: abayas,
                title: 'Abayas',
                text: 'Абая Бутик'
            },
            {
                id: 3,
                img: beauty,
                title: 'Beauty salon',
                text: 'салон красоты'
            },
            {
                id: 4,
                img: accessories,
                title: 'accessories',
                text: 'Аксессуары'
            }
        ],
        portfolio: [],
        current_page: null, // 0 page
        count_item: null, // 12
        total_elements: null, // 280
        isLoading: false
    },
    reducers: {},
    extraReducers: {}
})

export const {} = variablesSlice.actions
export default variablesSlice.reducer