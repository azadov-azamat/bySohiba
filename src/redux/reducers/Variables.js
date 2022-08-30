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

export const variablesSlice = createSlice({
    name: 'variables',
    initialState: {
        categories: [
            {label: 'Фронтенд', value: 'frontend'},
            {label: 'Бекенд', value: 'backend'},
            {label: 'Веб дизайн', value: 'design'}
        ],
        service: [
            {
                id: 1,
                title: 'Веб-дизайн',
                text: 'Проектирование и визуализация продуктов, их макетов и прототипов. *Визуализация прототипа,\n' +
                    '*Проектирование сайта или приложения\n' +
                    '*Взаимодействие с пользователем.'
            },
            {
                id: 2,
                title: 'Front-end development ',
                text: 'FrontEnd разработчик создает видимую для пользователя часть веб-страницы и его главная задача – точно передать в верстке то, что создал дизайнер, а также реализовать пользовательскую логику.\n'
            },
            {
                id: 3,
                title: 'Back-end development',
                text: 'Процесс программирования, конечной целью которого является разработка серверной части web-ресурса и ее объединение с пользовательской стороной.'
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